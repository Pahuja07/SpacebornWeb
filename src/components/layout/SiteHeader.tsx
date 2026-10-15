import { Link, NavLink } from 'react-router';
import { Wordmark } from '../ui/Wordmark';

type HeaderLink = {
  href: string;
  label: string;
  external?: boolean;
};

const links: HeaderLink[] = [
  { href: '/deryk', label: 'Home' },
  { href: '/deryk/approach', label: 'Approach' },
  { href: '/deryk/research', label: 'Research areas' },
  { href: '/deryk/unknowns', label: 'Open questions' },
  { href: '/gaming/DERYK_Gaming_AI.html', label: 'Gaming AI', external: true },
];

const capabilities = [
  { href: '/physical-ai', label: 'Physical AI' },
  { href: '/deryk/research#platform', label: 'Platform AI' },
  { href: '/deryk/research#neural', label: 'Neural AI' },
  { href: '/deryk/research#gaming', label: 'Gaming AI' },
  { href: '/deryk', label: 'AGI Direction' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container header-inner navbar">
        <Link className="brand" to="/deryk" aria-label="DERYK — AGI Direction">
          <Wordmark />
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {links.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ) : (
              <NavLink key={link.href} to={link.href} end>
                {link.label}
              </NavLink>
            ),
          )}
          {links.map((link) => (
            <NavLink key={link.href} to={link.href} end={link.href === '/deryk'}>
              {link.label}
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
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}
                >
                  {link.label}
                </a>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end
                  onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}
                >
                  {link.label}
                </NavLink>
              ),
            )}
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
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/deryk'}
                onClick={(event) =>
                  event.currentTarget.closest('details')?.removeAttribute('open')
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
