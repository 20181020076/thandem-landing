"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const Card = () => {
  const [scrollY, setScrollY] = useState(0);
  const [angulo, setAngulo] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY >= window.innerHeight * 2.1 &&
        window.scrollY <= window.innerHeight * 3.4
      ) {
        const aumento = window.scrollY - window.innerHeight * 2.1;
        let anguloAumento = aumento * 0.3;
        // cardRef.current.offsetTop =  cardRef.style.top + aumento
        setScrollY(aumento);

        if (scrollY < window.innerHeight) {
          setAngulo(anguloAumento);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY,angulo]);
  return angulo <= 90 ? (
    <div
      ref={cardRef}
      style={{
        top: `${40 + scrollY}px`,
        transform: `rotateY(${angulo}deg)`,
      }}
      className={`flex flex-col h-[322px] w-[250px] justify-center items-center absolute bg-white rounded-xl overflow-hidden`}
    >
      <div className="flex justify-center items-center w-full h-[70%] overflow-hidden ">
        <Image
          src="/images/dance.png"
          width={250}
          height={250}
          alt="fiesta"
          priority
        />
      </div>
      <div className="h-[30%]">
        <h2>Que hacemos</h2>
        <p>conectar gente con su propia identidad</p>
      </div>
    </div>
  ) : 
    <div
      ref={cardRef}
      style={{
        top: `${40 + scrollY}px`,
        transform: `rotateY(${180-angulo<=0?0:180-angulo}deg)`,
        backfaceVisibility: "hidden",
      }}
       className={`flex flex-col h-[322px] w-[250px] justify-center items-center absolute border-[3px] border-black bg-white rounded-xl overflow-hidden`}
    >
      <img src="/images/th.gif" alt="gif" />
    </div>
};

export default Card;
