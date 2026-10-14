export function Arrow({ diagonal = false, down = false }: { diagonal?: boolean; down?: boolean }) {
  const icon = down ? 'circle-arrow-down' : diagonal ? 'arrow-up-right-from-square' : 'arrow-right';
  return <i className={`fa-solid fa-${icon}`} aria-hidden="true" />;
}
