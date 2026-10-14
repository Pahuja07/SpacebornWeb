import { Link, NavLink } from 'react-router';
import { Wordmark } from '../ui/Wordmark';

const links = [
  { href: '/agi', label: 'Home' },
  { href: '/agi/approach', label: 'Approach' },
  { href: '/agi/research', label: 'Research areas' },
  { href: '/agi/unknowns', label: 'Open questions' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container header-inner navbar">
        <Link className="brand" to="/agi" aria-label="DERYK — AGI Direction">
          <Wordmark />
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {links.map((link) => (
            <NavLink key={link.href} to={link.href} end>
              {link.label}
            </NavLink>
          ))}
        </nav>
        <details className="mobile-navigation dropdown dropdown-end">
          <summary>
            Menu <i className="fa-solid fa-bars" aria-hidden="true" />
          </summary>
          <nav className="menu dropdown-content mobile-menu" aria-label="Mobile navigation">
            {links.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end
                onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}
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
