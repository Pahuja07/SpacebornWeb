import { useEffect, useRef, useState } from 'react';
import './gaming-ai.css';

type GamingPageHeightMessage = {
  type: 'gaming-page-height';
  height: number;
};

function isGamingPageHeightMessage(value: unknown): value is GamingPageHeightMessage {
  return (
    typeof value === 'object' &&
    value !== null &&
    'type' in value &&
    value.type === 'gaming-page-height' &&
    'height' in value &&
    typeof value.height === 'number' &&
    Number.isFinite(value.height) &&
    value.height > 0
  );
}

export function GamingAIPage() {
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [frameHeight, setFrameHeight] = useState(900);

  useEffect(() => {
    function handleMessage(event: MessageEvent<unknown>) {
      if (
        event.origin !== window.location.origin ||
        event.source !== frameRef.current?.contentWindow ||
        !isGamingPageHeightMessage(event.data)
      ) {
        return;
      }

      setFrameHeight(event.data.height);
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe
      ref={frameRef}
      className="gaming-ai-frame"
      src="/gaming/DERYK_Gaming_AI.html?embed=1"
      title="Gaming AI research"
      height={frameHeight}
    />
  );
}
