import React, { useState, useEffect, useRef } from "react";

const NumberCount = ({ number, description, className }) => {
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
    <div ref={containerRef} className={`w-[100px] h-[100px] flex flex-col border-[2px] relative border-violet-600 rounded-xl justify-center items-center text-black dark:text-white ${className}`}>
      <div className="flex justify-center font-bold">+{count}</div>
      <div className="flex text-center text-[10px]">{description}</div>
      {/* circulos para las curvas */}
      <div className="w-[0.75rem] h-[0.75rem] border-[1px] top-0 left-0 bg-red-200 absolute">
        <div className="rounded-full w-full h-full bg-dark"></div>
      </div>
      <div className="w-[0.75rem] h-[0.75rem] border-[1px] top-0 right-0 bg-red-200 absolute">
        <div className="rounded-full w-full h-full bg-red-500"></div>
      </div>
      <div className="w-[0.75rem] h-[0.75rem] border-[1px] bottom-0 right-0 bg-red-200 absolute">
        <div className="rounded-full w-full h-full bg-red-500"></div>
      </div>
      <div className="w-[0.75rem] h-[0.75rem] border-[1px] bottom-0 left-0 bg-red-200 absolute">
        <div className="rounded-full w-full h-full bg-red-500"></div>
      </div>

    </div>
  );
};

export default NumberCount;


