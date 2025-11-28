import { useState, useEffect } from 'react';
import Desktop from './imports/Desktop';
import Tablet from './imports/Tablet';
import Mobile from './imports/Mobile';

export default function App() {
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setViewport('desktop');
      } else if (width >= 768) {
        setViewport('tablet');
      } else {
        setViewport('mobile');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f0e0e]">
      {viewport === 'desktop' && <Desktop />}
      {viewport === 'tablet' && <Tablet />}
      {viewport === 'mobile' && <Mobile />}
    </div>
  );
}
