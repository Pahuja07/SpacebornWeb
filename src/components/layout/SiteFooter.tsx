import { Link } from 'react-router';
import { Wordmark } from '../ui/Wordmark';

type ResearchArea = {
  id: string;
  label: string;
  href?: string;
};

const pages = [
  { path: '/agi', label: 'Home' },
  { path: '/agi/approach', label: 'Our approach' },
  { path: '/agi/research', label: 'Research areas' },
  { path: '/agi/unknowns', label: 'Open questions' },
];

const researchAreas: ResearchArea[] = [
  { id: 'physical', label: 'Physical AI' },
  { id: 'platform', label: 'Platform AI' },
  { id: 'neural', label: 'Neural AI' },
  { id: 'gaming', label: 'Gaming AI', href: '/gaming/DERYK_Gaming_AI.html' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-brand-column">
          <Link className="footer-brand" to="/agi" aria-label="DERYK — overview">
            <Wordmark />
          </Link>
          <p>Understanding intelligence, one question at a time.</p>
          <small>© {new Date().getFullYear()} DERYK. All rights reserved.</small>
        </div>
        <nav className="footer-navigation" aria-label="Explore the AGI direction">
          <h2>Explore</h2>
          {pages.map((page) => (
            <Link key={page.path} to={page.path}>
              {page.label}
            </Link>
          ))}
        </nav>
        <nav className="footer-research footer-navigation" aria-label="Research focus">
          <h2>Research focus</h2>
          {researchAreas.map((area) =>
            area.href ? (
              <a key={area.id} href={area.href}>
                {area.label}
              </a>
            ) : (
              <Link key={area.id} to={`/agi/research#${area.id}`}>
                {area.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </footer>
  );
}
