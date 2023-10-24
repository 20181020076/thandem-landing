"use client";
import React, { useState, useEffect } from "react";
import { NextIcon } from "./Icons";
import { RomanticIcon, NatureIcon, CoffeIcon, NightLifeIcon } from "./Icons";
import Image from "next/image";

const StackCategories = ({ categories, colorTheme, setColorTheme }) => {
  const [currentCategory, setCurrentCategory] = useState(0);
  const titleArray = categories[currentCategory].title.split(' ')

  const handleColor = () => {
    console.log(currentCategory);
    if (currentCategory === 0) {
      setColorTheme("#7011bb");
    } else if (currentCategory === 1) {
      setColorTheme("#52a12c");
    } else if (currentCategory === 2) {
      setColorTheme("#ea8322");
    } else if (currentCategory === 3) {
      setColorTheme("#bf1667");
    } else {
    }
  };
  const handleIcon = () => {
    if (categories[currentCategory].title === "Romanticos") {
      return <RomanticIcon size={30} />;
    } else if (categories[currentCategory].title === "Naturaleza") {
      return <NatureIcon size={30} />;
    } else if (categories[currentCategory].title === "Cafe") {
      return <CoffeIcon size={30} />;
    } else if (categories[currentCategory].title === "Nightlife & Clubs") {
      return <NightLifeIcon size={30} />;
    }
  };
  const handleNext = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory((state) => state + 1);
      handleColor();
    } else {
      setCurrentCategory(0);
      handleColor();
    }
  };
  useEffect(() => {
    handleColor();
  }, [currentCategory, colorTheme]);
  if (currentCategory === null) {
    return <div>Cargando</div>;
  } else {
    return (
      <div className="w-full  h-full flex justify-center items-start bg-transparent">
        <div className="relative  w-[80%] max-w-[300px]  h-full flex ">
          <div
            className={` absolute w-[265px] h-[370px] flex flex-col justify-start items-center p-[10px] shadow-card rounded-2xl bg-white text-black  z-40`}
          >
            <h2 className="font-bold flex gap-1 w-full text-start  text-[16px] ml-3 mb-[8px]">
            {titleArray.map((word,index, array)=>{
              console.log(index, colorTheme)
              return <span key={index} style={{color:index==titleArray.length-1?colorTheme:""}}>{word}</span>
            })}
            </h2>

            <div className="relative w-[97%]  h-[200px] bg-black rounded-2xl mb-[10px] overflow-hidden">
              <Image
                fill
                src={`/images/${categories[currentCategory].image}`}
                className="max-w-none object-cover"
                alt="category"
              />
              <div className="absolute bottom-[10px] right-[10px]">
                {handleIcon()}
              </div>
            </div>
            <div>
              <p className="text-xs ml-3 ">
                {categories[currentCategory].description}
              </p>
            </div>

            <div
              className="absolute block bottom-2 right-2"
              onClick={() => handleNext()}
            >
              <NextIcon color={colorTheme} />
            </div>
          </div>

          <div
            className={`absolute w-[265px] h-[370px] p-[10px] shadow-card rounded-2xl bg-white text-black z-30 translate-x-[10px]`}
          ></div>
          <div
            className={`absolute w-[265px] h-[370px] p-[10px] shadow-card rounded-2xl bg-white text-black z-20 translate-x-[20px]`}
          ></div>
          <div
            className={`absolute w-[265px] h-[370px] p-[10px] shadow-card rounded-2xl bg-white text-black z-10 translate-x-[30px]`}
          ></div>
        </div>
      </div>
    );
  }
};

export default StackCategories;
