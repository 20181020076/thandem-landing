"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { DollarIcon, StarIcon } from "./Icons";

const Card = () => {
  const [scrollY, setScrollY] = useState(0);
  const [angulo, setAngulo] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const porcentageDivBefore = 2.3;
      if (
        window.scrollY >= window.innerHeight * porcentageDivBefore &&
        window.scrollY <= window.innerHeight * 3.6
      ) {
        const aumento = window.scrollY - window.innerHeight * porcentageDivBefore;
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
      className={`flex flex-col h-[370px] w-[270px] justify-center items-center absolute bg-quaternary rounded-2xl overflow-hidden`}
    >
      <div className="flex flex-col justify-center items-center w-full h-[70%] overflow-hidden ">
        <h2 className="block text-start w-full px-3 font-bold text-lg">Planes para <span className="text-purple-800">toda ocacion</span></h2>
        <div className="h-[85%] w-[90%] relative border border-black overflow-hidden rounded-lg">
          <div className="absolute flex top-[5px] left-[7px] w-[60px] h-[25px] bg-white rounded-full text-black font-bold"><StarIcon/> <p className="">5</p></div>
        <img
          src="/images/dance.png"
          alt="fiesta"
          className="w-full max-w-none"
        />
        </div>
      </div>
      <div className="h-[30%] p-2">
        <div className="flex justify-around">
        <h2 className="text-purple-800 font-bold text-lg  ">¿Que hacemos?</h2>
        <div className="flex w-[50px]">
          <DollarIcon/>
          <DollarIcon/>
          <DollarIcon/>

        </div>

        </div>
        <p className=" px-2 text-justify">conectar gente con su propia identidad</p>
      </div>
      <div className="w-full flex justify-between px-2 pb-1 font-bold"><p>hora: <span className="text-violet-800 text-bold text-lg">ya!</span></p><p>lugar: <span className="text-violet-800">Thandem</span></p></div>
    </div>
  ) : 
    <div
      ref={cardRef}
      style={{
        top: `${40 + scrollY}px`,
        transform: `rotateY(${180-angulo<=0?0:180-angulo}deg)`,
        backfaceVisibility: "hidden",
      }}
       className={`flex flex-col h-[322px] w-[250px] justify-center items-center absolute border-[3px] border-black bg-white rounded-2xl overflow-hidden`}
    >
      <img src="/images/th.gif" alt="gif" />
    </div>
};

export default Card;
