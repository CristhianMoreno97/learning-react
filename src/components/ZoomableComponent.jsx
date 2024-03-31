import { useState, useEffect, useCallback } from 'react';

const ZoomableComponent = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const zoomIncrement = 0.1;
  const maxZoomLevel = 2; // Máximo nivel de zoom
  const minZoomLevel = 0.5; // Mínimo nivel de zoom

  const handleScroll = useCallback((event) => {
    const deltaY = event.deltaY;

    setZoomLevel(prevZoom => {
      let newZoom = prevZoom + (deltaY < 0 ? zoomIncrement : -zoomIncrement);
      newZoom = Math.min(Math.max(newZoom, minZoomLevel), maxZoomLevel); // Asegurar que el nuevo nivel de zoom esté entre los límites
      return newZoom;
    });
  }, [zoomIncrement, minZoomLevel, maxZoomLevel]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleScroll]);

  return (
    <div style={{
      transform: `scale(${zoomLevel})`,
      transformOrigin: '0 0',
      border: '1px solid black',
      width: '300px',
      height: '200px',
      overflow: 'hidden'
    }}>
      <img
        src="https://via.placeholder.com/300x200"
        alt="Zoomable Image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
  );
};

export default ZoomableComponent;
