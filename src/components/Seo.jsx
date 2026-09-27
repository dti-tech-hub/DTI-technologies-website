import { useEffect } from 'react';
import { site } from '../data/site.js';

function setMetaAttribute(selector, attribute, key, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
}

function setLinkAttribute(rel, href) {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

/**
 * Per-page SEO: title, description, canonical URL and Open Graph tags.
 * Official domain is pending — canonical/OG URLs are only emitted when
 * `site.origin` is configured.
 */
export default function Seo({ title, description, path = '', type = 'website' }) {
  const fullTitle = title ? `${title} | ${site.titleBrand}` : site.defaultMeta.title;
  const metaDescription = description || site.defaultMeta.description;

  useEffect(() => {
    document.title = fullTitle;
    setMetaAttribute('meta[name="description"]', 'name', 'description', metaDescription);
    setMetaAttribute('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaAttribute('meta[property="og:description"]', 'property', 'og:description', metaDescription);
    setMetaAttribute('meta[property="og:type"]', 'property', 'og:type', type);

    if (site.origin) {
      setMetaAttribute('meta[property="og:url"]', 'property', 'og:url', `${site.origin}${path}`);
      setLinkAttribute('canonical', `${site.origin}${path}`);
    }
  }, [fullTitle, metaDescription, path, type]);

  return null;
}
