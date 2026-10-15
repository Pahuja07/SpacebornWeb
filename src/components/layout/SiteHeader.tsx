import { Link, NavLink } from 'react-router';
import { Wordmark } from '../ui/Wordmark';

type HeaderLink = {
  href: string;
  label: string;
  external?: boolean;
};

const links: HeaderLink[] = [
  { href: '/agi', label: 'Home' },
  { href: '/agi/approach', label: 'Approach' },
  { href: '/agi/research', label: 'Research areas' },
  { href: '/agi/unknowns', label: 'Open questions' },
  { href: '/gaming/DERYK_Gaming_AI.html', label: 'Gaming AI', external: true },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container header-inner navbar">
        <Link className="brand" to="/agi" aria-label="DERYK — AGI Direction">
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
          </nav>
        </details>
      </div>
    </header>
  );
}
