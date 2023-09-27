import React, { useState, useEffect, useRef } from "react";

const NumberCout = ({ number, description }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
          if (prevCount < number) {
            return prevCount + 1;
          }
          clearInterval(interval);
          return prevCount;
        });
      }, 2500 / number);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isVisible, number]);

  return (
    <div ref={containerRef} className="w-[90px] h-[90px] flex flex-col border-[7px]  border-violet-600 rounded-full justify-center items-center text-black dark:text-white">
      <div className="flex justify-center font-bold">+{count}</div>
      <div className="flex text-center text-[12px]">{description}</div>
    </div>
  );
};

export default NumberCout;


