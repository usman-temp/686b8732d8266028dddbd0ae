import { useEffect } from 'react';
import Stats from 'stats.js';

export default function AnimationDebugger() {
  useEffect(() => {
    const stats = new Stats();
    stats.showPanel(0);
    document.body.appendChild(stats.dom);

    const animate = () => {
      stats.begin();
      stats.end();
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    return () => {
      document.body.removeChild(stats.dom);
    };
  }, []);

  return null;
}