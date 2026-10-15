import { Link, NavLink } from 'react-router';
import { Wordmark } from './Wordmark';

const pages = [
  { href: '/agi', label: 'Home' },
  { href: '/agi/approach', label: 'Approach' },
  { href: '/agi/research', label: 'Research areas' },
  { href: '/agi/unknowns', label: 'Open questions' },
];

const capabilities = [
  { href: '/physical-ai', label: 'Physical AI' },
  { href: '/agi/research#platform', label: 'Platform AI' },
  { href: '/neural-ai', label: 'Neural AI' },
  { href: '/agi/research#gaming', label: 'Gaming AI' },
  { href: '/agi', label: 'AGI Direction' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container header-inner navbar">
        <Link className="brand" to="/agi" aria-label="DERYK — home">
          <Wordmark />
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {pages.map((page) => (
            <NavLink
              key={page.href}
              to={page.href}
              end={page.href === '/agi'}
            >
              {page.label}
            </NavLink>
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
              {capabilities.map((capability) =>
                capability.href.startsWith('#') || capability.href.includes('#') ? (
                  <a
                    key={capability.label}
                    href={capability.href}
                    onClick={(event) =>
                      event.currentTarget.closest('details')?.removeAttribute('open')
                    }
                  >
                    {capability.label}
                  </a>
                ) : (
                  <Link
                    key={capability.label}
                    to={capability.href}
                    onClick={(event) =>
                      event.currentTarget.closest('details')?.removeAttribute('open')
                    }
                  >
                    {capability.label}
                  </Link>
                )
              )}
            </div>
          </details>
        </nav>
        <details className="mobile-navigation dropdown dropdown-end">
          <summary>
            Menu <i className="fa-solid fa-bars" aria-hidden="true" />
          </summary>
          <nav className="menu dropdown-content mobile-menu" aria-label="Mobile navigation">
            {capabilities.map((capability) =>
              capability.href.startsWith('#') || capability.href.includes('#') ? (
                <a
                  key={capability.label}
                  href={capability.href}
                  onClick={(event) =>
                    event.currentTarget.closest('details')?.removeAttribute('open')
                  }
                >
                  {capability.label}
                </a>
              ) : (
                <Link
                  key={capability.label}
                  to={capability.href}
                  onClick={(event) =>
                    event.currentTarget.closest('details')?.removeAttribute('open')
                  }
                >
                  {capability.label}
                </Link>
              )
            )}
            {pages.map((page) => (
              <NavLink
                key={page.href}
                to={page.href}
                end={page.href === '/agi'}
                onClick={(event) =>
                  event.currentTarget.closest('details')?.removeAttribute('open')
                }
              >
                {page.label}
              </NavLink>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
