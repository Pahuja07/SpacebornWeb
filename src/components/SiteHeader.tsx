import { Link, NavLink } from 'react-router';
import type { MouseEvent } from 'react';
import { Wordmark } from './Wordmark';

const pages = [
  { href: '/deryk', label: 'Home' },
  { href: '/deryk/approach', label: 'Approach' },
  { href: '/deryk/research', label: 'Research areas' },
  { href: '/deryk/unknowns', label: 'Open questions' },
];

const capabilities = [
  { href: '/physical-ai', label: 'Physical AI' },
  { href: '/platform-ai', label: 'Platform AI' },
  { href: '/neural-ai', label: 'Neural AI' },
  { href: '/gaming-ai', label: 'Gaming AI' },
  { href: '/agi-direction', label: 'AGI Direction' },
];

function isExternalHref(href: string) {
  return href.includes('#');
}

function closeMenu(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest('details')?.removeAttribute('open');
}

function CapabilityLinks() {
  return (
    <>
      {capabilities.map((capability) =>
        isExternalHref(capability.href) ? (
          <a key={capability.label} href={capability.href} onClick={closeMenu}>
            {capability.label}
          </a>
        ) : (
          <Link key={capability.label} to={capability.href} onClick={closeMenu}>
            {capability.label}
          </Link>
        ),
      )}
    </>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-container header-inner navbar">
        <Link className="brand" to="/deryk" aria-label="DERYK — AGI Direction">
          <Wordmark />
        </Link>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {pages.map((page) => (
            <NavLink key={page.href} to={page.href} end={page.href === '/deryk'}>
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
              <CapabilityLinks />
            </div>
          </details>
        </nav>
        <details className="mobile-navigation dropdown dropdown-end">
          <summary>
            Menu <i className="fa-solid fa-bars" aria-hidden="true" />
          </summary>
          <nav className="menu dropdown-content mobile-menu" aria-label="Mobile navigation">
            <CapabilityLinks />
            {pages.map((page) => (
              <NavLink
                key={page.href}
                to={page.href}
                end={page.href === '/deryk'}
                onClick={closeMenu}
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