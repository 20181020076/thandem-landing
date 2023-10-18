import React from "react";
import { ProfileCircleIcon } from "./Icons";

const CardProfile = ({ izquierda, profile }) => {
  return (
    <div
      className={`flex text-white ${
        izquierda ? "justify-end" : "justify-start "
      } w-full`}
    >
      <div className={`w-[87%] flex  h-[120px] ${izquierda? "pl-[15px]":"justify-end"} overflow-hidden`}>
        <div
          className={`w-[80%] h-full flex  justify-end `}
        >
          <div className={`relative flex justify-center items-center w-[100px] h-full `}>
            <div className={`absolute flex justify-end items-center w-full h-full  `}>
              <ProfileCircleIcon />
            </div>
            <div className={`flex justify-end items-center w-full  text-center`}>
              <img src={`/images/${profile.image}`} alt="Profile" className=" w-[80%] -translate-x-[9px]"/>
            </div>
          </div>
          <div className=" flex flex-col text-start justify-center items-center bg-transparent w-[180px] h-full ">
            <h3 className="text-[14px] font-bold">{profile.name}</h3>
            <span>{profile.rol}</span>

        </div>
        </div>
        
      </div>
    </div>
  );
};

export default CardProfile;
