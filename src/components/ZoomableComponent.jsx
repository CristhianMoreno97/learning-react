import { useState, useEffect } from 'react';

const ZoomableComponent = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleScroll = (event) => {
      const zoomIncrement = 0.1;
      const deltaY = event.deltaY;

      if (deltaY > 0) {
        setZoomLevel((prevZoom) => prevZoom - zoomIncrement);
      } else if (deltaY < 0) {
        setZoomLevel((prevZoom) => prevZoom + zoomIncrement);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div style={{ transform: `scale(${zoomLevel})`, transformOrigin: '0 0', border: '1px solid black', width: '300px', height: '200px', overflow: 'hidden' }}>
      <img src="https://via.placeholder.com/300x200" alt="Zoomable Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
};

export default ZoomableComponent;
