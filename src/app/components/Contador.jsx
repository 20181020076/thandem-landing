import React, { useState, useEffect, useRef } from 'react';

function Contador(props) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Cambia el umbral según tus necesidades
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < props.numero) {
            return prevCount + 1;
          }
          clearInterval(interval);
          return prevCount;
        });
      }, 2000 / props.numero);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isVisible, props.numero]);

  return (
    <div ref={containerRef}>
      <p>Cuenta: {count}</p>
    </div>
  );
}

export default Contador;