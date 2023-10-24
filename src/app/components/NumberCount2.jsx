import React, {useState, useEffect, useRef} from "react";
import { BorderCount } from "./Icons";

const NumberCount2 = ({ number1, number2, number3 }) => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

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
      }else{
        setIsVisible(false);

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
    const handleInterval = (number, setCount) =>{
      const interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < number) {
            return prevCount + 1;
          }
          
          return prevCount;
        });
      }, 2500 / number);
    }
    if (isVisible) {
      handleInterval(number1,setCount1)
      handleInterval(number2,setCount2)
      handleInterval(number3,setCount3)
    }
  }, [isVisible, number1,number2, number3]);

  return (
    <div className="flex w-full h-[90px]  justify-center items-center relative" ref={containerRef}>
      <div className="w-full absolute">
        <BorderCount />
      </div>
      {/* caja 1 */}
      <div className="flex flex-col  h-[55px] w-[300px] justify-center items-center">
        <h3 className="text-lg">+{count1}</h3>
        <p className="text-center text-[12px]">empresas<br></br>asociadas</p>
      </div>
      {/* caja 2 */}
      <div className="flex flex-col  h-[55px] w-[300px] justify-center items-center">
        <h3 className="text-lg">+{count2}</h3>
        <p className="text-center text-[12px]">empresas<br></br>asociadas</p>
      </div>
      {/* caja 3 */}
      <div className="flex flex-col  h-[55px] w-[300px] justify-center items-center">
        <h3 className="text-lg">+{count3}</h3>
        <p className="text-center text-[12px]">empresas<br></br>asociadas</p>
      </div>
    </div>
  );
};

export default NumberCount2;
