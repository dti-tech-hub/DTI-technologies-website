import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from './App.jsx';

/** Renders a route to static markup — used by scripts/smoke.mjs to verify every page. */
export function renderRoute(path) {
  return renderToString(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}
