import React, { useState, useEffect, useRef } from "react";
import { LineIcon } from "./Icons";

const LineContainer = ({ scrollY }) => {
  const [porcentage, setPorcentage] = useState(0);
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const lineRef = useRef(null);
  const handlePorcentage = () => {
    if (scrollY > windowHeight * 1.8 && scrollY < windowHeight*2.8) {
      setPorcentage(
        [
          (scrollY - windowHeight * 1.8) /
            (windowHeight * 2.8 - windowHeight * 1.8),
        ] * 100
        
      );
      
    }
  };

  useEffect(() => {
    handlePorcentage();
    if (lineRef.current) {
      const pathLength = lineRef.current.getTotalLength();
      lineRef.current.style.strokeDasharray = pathLength+' '+pathLength
      lineRef.current.style.strokeDashoffset = pathLength

      const drawLength = pathLength * porcentage/100;

      lineRef.current.style.strokeDashoffset = pathLength-drawLength

      
    }
  }, [lineRef, scrollY]);

  return (
    <div className="">
      <LineIcon ref={lineRef} />
    </div>
  );
};

export default LineContainer;
