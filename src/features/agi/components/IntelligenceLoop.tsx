import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons/faCircleArrowLeft';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons/faCircleArrowRight';
import type { IntelligenceStep } from '../directionContent';

export function IntelligenceLoop({ steps }: { steps: IntelligenceStep[] }) {
  const [stepPosition, setStepPosition] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const instanceId = useId();
  const activeIndex = ((stepPosition % steps.length) + steps.length) % steps.length;
  const fillAngle = isCompleting ? 360 : activeIndex * 360 / steps.length;

  useEffect(() => {
    if (isCompleting) {
      const timer = window.setTimeout(() => {
        setIsResetting(true);
        setStepPosition((position) => position + 1);
        setIsCompleting(false);
      }, 1100);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => {
      setIsResetting(false);
      if (activeIndex === steps.length - 1) setIsCompleting(true);
      else setStepPosition((position) => position + 1);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [stepPosition, activeIndex, isCompleting, steps.length]);

  function selectStep(index: number) {
    setIsCompleting(false);
    setIsResetting(false);
    setStepPosition((position) => {
      const currentIndex = ((position % steps.length) + steps.length) % steps.length;
      let distance = (index - currentIndex + steps.length) % steps.length;
      if (distance > steps.length / 2) distance -= steps.length;
      return position + distance;
    });
  }

  function nextStep() {
    if (activeIndex === steps.length - 1) setIsCompleting(true);
    else selectStep(activeIndex + 1);
  }

  function selectWithKeyboard(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown': nextIndex = (index + 1) % steps.length; break;
      case 'ArrowLeft':
      case 'ArrowUp': nextIndex = (index - 1 + steps.length) % steps.length; break;
      case 'Home': nextIndex = 0; break;
      case 'End': nextIndex = steps.length - 1; break;
      default: return;
    }
    event.preventDefault();
    selectStep(nextIndex);
    tabs.current[nextIndex]?.focus();
  }

  return (
    <div className="agi-intelligence-explorer">
      <div className="agi-loop-diagram">
        <svg className="agi-loop-track" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <circle className="agi-loop-base" cx="50" cy="50" r="38" fill="none" strokeWidth="1.5" />
          <circle
            className={`agi-loop-fill${isResetting ? ' is-resetting' : ''}`}
            cx="50" cy="50" r="38" fill="none" strokeWidth="1.5"
            pathLength="360" strokeDasharray="360"
            strokeDashoffset={360 - fillAngle}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <ul className="steps agi-loop-steps" role="tablist" aria-label="Explore the nine intelligence loop stages">
          {steps.map((step, index) => {
            const angle = index * 2 * Math.PI / steps.length;
            return (
              <li
                key={step.id}
                role="presentation"
                className={`step agi-loop-node${index <= activeIndex ? ' step-primary' : ''}`}
                style={{ left: `${50 + 38 * Math.sin(angle)}%`, top: `${50 - 38 * Math.cos(angle)}%` }}
              >
                <button
                  ref={(element) => { tabs.current[index] = element; }}
                  type="button"
                  role="tab"
                  id={`${instanceId}-tab-${step.id}`}
                  aria-label={step.label}
                  aria-controls={`${instanceId}-panel-${step.id}`}
                  aria-selected={activeIndex === index}
                  tabIndex={activeIndex === index ? 0 : -1}
                  className="step-icon btn btn-circle"
                  onClick={() => selectStep(index)}
                  onKeyDown={(event) => selectWithKeyboard(event, index)}
                >{index + 1}</button>
                <span className="agi-loop-label" aria-hidden="true">{step.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="agi-loop-reading">
        {steps.map((step, index) => (
          <div
            key={step.id}
            id={`${instanceId}-panel-${step.id}`}
            role="tabpanel"
            aria-labelledby={`${instanceId}-tab-${step.id}`}
            tabIndex={0}
            hidden={activeIndex !== index}
          >
            <h3>{step.label}</h3>
            <p className="agi-loop-description">{step.description}</p>
          </div>
        ))}
        <div className="agi-loop-controls">
          <button
            type="button"
            className="btn btn-circle btn-ghost"
            aria-label="Previous intelligence loop stage"
            onClick={() => selectStep((activeIndex - 1 + steps.length) % steps.length)}
          ><FontAwesomeIcon icon={faCircleArrowLeft} /></button>
          <span aria-live="off">{activeIndex + 1} of {steps.length}</span>
          <button
            type="button"
            className="btn btn-circle btn-ghost"
            aria-label="Next intelligence loop stage"
            onClick={nextStep}
          ><FontAwesomeIcon icon={faCircleArrowRight} /></button>
        </div>
      </div>
    </div>
  );
}
