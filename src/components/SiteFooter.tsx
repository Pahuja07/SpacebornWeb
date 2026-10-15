import { Link } from 'react-router';
import { Wordmark } from './Wordmark';

const pages = [
  { href: '/deryk', label: 'Home' },
  { href: '/deryk/approach', label: 'Our approach' },
  { href: '/deryk/research', label: 'Research areas' },
  { href: '/deryk/unknowns', label: 'Open questions' },
];

const researchAreas = [
  { id: 'physical', label: 'Physical AI', href: '/physical-ai' },
  { id: 'platform', label: 'Platform AI', href: '/deryk/research#platform' },
  { id: 'neural', label: 'Neural AI', href: '/neural-ai' },
  { id: 'gaming', label: 'Gaming AI', href: '/gaming/DERYK_Gaming_AI.html' },
  { id: 'agi-direction', label: 'AGI Direction', href: '/deryk' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-brand-column">
          <Link className="footer-brand" to="/deryk" aria-label="DERYK — home">
            <Wordmark />
          </Link>
          <p>Understanding intelligence, one question at a time.</p>
          <small>© {new Date().getFullYear()} DERYK. All rights reserved.</small>
        </div>
        <nav className="footer-navigation" aria-label="Explore the AGI direction">
          <h2>Explore</h2>
          {pages.map((page) => (
            <Link key={page.href} to={page.href}>
              {page.label}
            </Link>
          ))}
        </nav>
        <nav className="footer-research footer-navigation" aria-label="Research focus">
          <h2>Research focus</h2>
          {researchAreas.map((area) =>
            area.href.includes('#') || area.href.endsWith('.html') ? (
              <a key={area.id} href={area.href}>
                {area.label}
              </a>
            ) : (
              <Link key={area.id} to={area.href}>
                {area.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
