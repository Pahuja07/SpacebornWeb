import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons/faCircleArrowDown';

export function Arrow({ diagonal = false, down = false }: { diagonal?: boolean; down?: boolean }) {
  const icon = down
    ? faCircleArrowDown
    : diagonal
      ? faArrowUpRightFromSquare
      : faArrowRight;

  return <FontAwesomeIcon className="button-icon" icon={icon} aria-hidden="true" />;
}
