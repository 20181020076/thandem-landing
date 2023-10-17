import React from "react";
import { ProfileCircleIcon } from "./Icons";

const CardProfile = ({ izquierda, profile }) => {
  return (
    <div
      className={`flex ${
        izquierda ? "justify-end" : "justify-start"
      } w-full`}
    >
      <div className="w-[87%] h-[120px] overflow-hidden">
        <div
          className={`w-[63%] h-full flex  justify-end`}
        >
          <div className={`relative flex justify-center items-center w-[100px] h-full ${izquierda?"mr-[70px]":"mr-[20px]"}`}>
            <div className={`absolute flex justify-end items-center w-full h-full  `}>
              <ProfileCircleIcon />
            </div>
            <div className={`flex justify-end items-center w-full  text-center`}>
              <img src={`/images/${profile.image}`} alt="Profile" className=" w-[80%] -translate-x-[9px]"/>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CardProfile;
