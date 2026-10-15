import { Link, NavLink } from 'react-router';
import { Wordmark } from './Wordmark';

const pages = [
  { href: '/deryk', label: 'Home' },
  { href: '/deryk/approach', label: 'Approach' },
  { href: '/deryk/research', label: 'Research areas' },
  { href: '/deryk/unknowns', label: 'Open questions' },
];

const capabilities = [
  { href: '/physical-ai', label: 'Physical AI' },
  { href: '/deryk/research#platform', label: 'Platform AI' },
  { href: '/deryk/research#neural', label: 'Neural AI' },
  { href: '/gaming/DERYK_Gaming_AI.html', label: 'Gaming AI' },
  { href: '/deryk', label: 'AGI Direction' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container header-inner navbar">
        <Link className="brand" to="/deryk" aria-label="DERYK — home">
          <Wordmark />
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {pages.map((page) => (
            <NavLink
              key={page.href}
              to={page.href}
              end={page.href === '/deryk'}
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
                capability.href.includes('#') || capability.href.startsWith('/gaming/') ? (
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
              capability.href.includes('#') || capability.href.startsWith('/gaming/') ? (
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
                end={page.href === '/deryk'}
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
