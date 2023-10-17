"use client";
import React, { useState, useRef } from "react";
import { EyeIcon, NextIcon, BarCharIcon, FlexibleIcon } from "./Icons";

const CardServices = () => {
  const services = [
    {
      title: "Visibilidad",
      description: "Potenciar el crecimiento y visibilidad de tu negocio",
    },
    {
      title: "Informacion Relevante",
      description:
        "Acceder a informacion de valor sobre sus clientes y el mercado",
    },
    {
      title: "Soluciones a su medida",
      description:
        "Escuchar tus necesidades para proponer soluciones flexibles ajustads a tu negocio",
    },
  ];
  const carrousel = useRef(null);
  const [currentCard, setCurrentCard] = useState(0);
  const handleNext = () => {
    if (currentCard < services.length - 1) {
      setCurrentCard((state) => state + 1);
    } else {
      setCurrentCard(0);
    }
  };
  const handleIcon = () => {
    if (currentCard == 0) {
      return <EyeIcon />;
    } else if (currentCard == 1) {
      return <BarCharIcon />;
    } else if (currentCard == 2) {
      return <FlexibleIcon />;
    } else {
      return <div>wtf bro</div>;
    }
  };
  return (
    <div
      className="flex flex-col w-full h-[375px] gap-10 justify-center items-center  text-white font-monserrat"
      ref={carrousel}
    >
      <div className="w-[300px] h-[350px] relative rounded-2xl">
        {services[currentCard] ? (
          <div className="">
            <div className="flex justify-center items-center">
              {handleIcon()}
            </div>
            <div className="flex flex-col text-center justify-center items-center">
              <h3 className="text-xl font-bold">{services[currentCard].title}</h3>
              <p className="text-lg max-w-[80%]">{services[currentCard].description}</p>
            </div>
            <div
              className="absolute bottom-5 right-7"
              onClick={() => handleNext()}
            >
              <NextIcon color={"white"} />
            </div>
          </div>
        ) : (
          <div>
            <h3>no existe</h3>
          </div>
        )}
      </div>
      {/* <div className="flex justify-center items-center gap-3 ">
        <div
          onClick={() => setCurrentCard(0)}
          className="w-[20px] h-[20px] bg-red-500 rounded-full"
        ></div>
        <div
          onClick={() => setCurrentCard(1)}
          className="w-[20px] h-[20px] bg-red-500 rounded-full"
        ></div>
        <div
          onClick={() => setCurrentCard(2)}
          className="w-[20px] h-[20px] bg-red-500 rounded-full"
        ></div>
      </div> */}
    </div>
  );
};

export default CardServices;
