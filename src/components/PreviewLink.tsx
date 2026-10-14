import type { ReactNode } from 'react';

// Other page labels are kept for visual fidelity, but do not pretend to navigate.
// Replace this with your team's real links when integrating the home page.
export function PreviewLink({
  href,
  className,
  active = false,
  children,
}: {
  href: string;
  className?: string;
  active?: boolean;
  children: ReactNode;
}) {
  if (href === '#home') {
    return (
      <a
        href={href}
        className={className}
        aria-current={active ? 'page' : undefined}
        onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}
      >
        {children}
      </a>
    );
  }
  return (
    <span
      className={`${className ?? ''} preview-disabled`}
      aria-disabled="true"
      data-destination={href}
      title="This standalone package contains the home page only"
    >
      {children}
    </span>
  );
}
