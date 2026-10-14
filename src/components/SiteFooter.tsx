import { PreviewLink } from './PreviewLink';
import { Wordmark } from './Wordmark';

const pages = [
  { href: '#home', label: 'Home' },
  { href: '/agi/approach', label: 'Our approach' },
  { href: '/agi/research', label: 'Research areas' },
  { href: '/agi/unknowns', label: 'Open questions' },
];
const researchAreas = [
  { id: 'physical', label: 'Physical AI' },
  { id: 'platform', label: 'Platform AI' },
  { id: 'neural', label: 'Neural AI' },
  { id: 'gaming', label: 'Gaming AI' },
  { id: 'agi-direction', label: 'AGI Direction' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-inner">
        <div className="footer-brand-column">
          <a className="footer-brand" href="#home" aria-label="DERYK — home">
            <Wordmark />
          </a>
          <p>Understanding intelligence, one question at a time.</p>
          <small>© {new Date().getFullYear()} DERYK. All rights reserved.</small>
        </div>
        <nav className="footer-navigation" aria-label="Explore the AGI direction">
          <h2>Explore</h2>
          {pages.map((page) => (
            <PreviewLink key={page.href} href={page.href}>
              {page.label}
            </PreviewLink>
          ))}
        </nav>
        <nav className="footer-research footer-navigation" aria-label="Research focus">
          <h2>Research focus</h2>
          {researchAreas.map((area) => (
            <PreviewLink
              key={area.id}
              href={area.id === 'agi-direction' ? '#home' : `/agi/research#${area.id}`}
            >
              {area.label}
            </PreviewLink>
          ))}
        </nav>
      </div>
    </footer>
  );
}
