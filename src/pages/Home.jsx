import Seo from '../components/Seo.jsx';
import Hero from '../sections/Hero.jsx';
import Intro from '../sections/Intro.jsx';
import ServicesGrid from '../sections/ServicesGrid.jsx';
import HowWeWork from '../sections/HowWeWork.jsx';
import PortfolioPreview from '../sections/PortfolioPreview.jsx';
import Testimonials from '../sections/Testimonials.jsx';
import HomeDualCta from '../sections/HomeDualCta.jsx';

export default function Home() {
  return (
    <>
      <Seo
        title={null}
        description="Intelligent, secure, and scalable digital solutions across AI, cyber security, data, software, and consulting."
        path="/"
      />
      <Hero />
      <Intro />
      <ServicesGrid />
      <HowWeWork />
      <PortfolioPreview />
      <Testimonials />
      <HomeDualCta />
    </>
  );
}

