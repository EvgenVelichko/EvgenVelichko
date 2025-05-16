import React, { useRef, useState, useEffect } from 'react';

const Slider = ({ items, type }) => {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseUp);
    };
  }, []);

  const renderItem = (item) => {
    if (type === 'project') {
      return (
        <a href={item.link} className="slider-item" target="_blank" key={item.id}>
          <img src={item.image} alt={item.title} />
          <div className="project-title">{item.title}</div>
        </a>
      );
    }

    return (
      <div className="slider-item" key={item.id}>
        <img src={item.image} alt={`${type} ${item.id}`} />
        <div className={`${type}-title`}>{item.title}</div>
      </div>
    );
  };

  return (
    <div className="slider">
      <div
        className="slider-track"
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {items.map(renderItem)}
      </div>
    </div>
  );
};

export default Slider;