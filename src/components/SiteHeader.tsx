import { PreviewLink } from './PreviewLink';
import { Wordmark } from './Wordmark';

const pages = [
  { href: '#home', label: 'Home' },
  { href: '/agi/approach', label: 'Approach' },
  { href: '/agi/research', label: 'Research areas' },
  { href: '/agi/unknowns', label: 'Open questions' },
];
const capabilities = [
  { href: '/agi/research#physical', label: 'Physical AI' },
  { href: '/agi/research#platform', label: 'Platform AI' },
  { href: '/agi/research#neural', label: 'Neural AI' },
  { href: '/agi/research#gaming', label: 'Gaming AI' },
  { href: '#home', label: 'AGI Direction' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container header-inner navbar">
        <a className="brand" href="#home" aria-label="DERYK — home">
          <Wordmark />
        </a>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {pages.map((page) => (
            <PreviewLink key={page.href} href={page.href} active={page.href === '#home'}>
              {page.label}
            </PreviewLink>
          ))}
          <details
            className="capabilities-dropdown"
            onMouseEnter={(event) => {
              event.currentTarget.open = true;
            }}
            onMouseLeave={(event) => {
              if (!event.currentTarget.contains(document.activeElement)) {
                event.currentTarget.open = false;
              }
            }}
            onFocus={(event) => {
              event.currentTarget.open = true;
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                event.currentTarget.open = false;
              }
            }}
          >
            <summary>
              Capabilities <i className="fa-solid fa-chevron-down" aria-hidden="true" />
            </summary>
            <div className="capabilities-menu" aria-label="Capabilities">
              {capabilities.map((capability) => (
                <PreviewLink
                  key={capability.label}
                  href={capability.href}
                >
                  {capability.label}
                </PreviewLink>
              ))}
            </div>
          </details>
        </nav>
        <details className="mobile-navigation dropdown dropdown-end">
          <summary>
            Menu <i className="fa-solid fa-bars" aria-hidden="true" />
          </summary>
          <nav className="menu dropdown-content mobile-menu" aria-label="Mobile navigation">
            {capabilities.map((capability) => (
              <PreviewLink
                key={capability.label}
                href={capability.href}
              >
                {capability.label}
              </PreviewLink>
            ))}
            {pages.map((page) => (
              <PreviewLink key={page.href} href={page.href} active={page.href === '#home'}>
                {page.label}
              </PreviewLink>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
