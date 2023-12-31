"use client";
import React, {useState} from "react";
import { ProfileCircleIcon } from "./Icons";
import Image from "next/image";

const CardProfile = ({ izquierda, profile, scrollY, orden }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);
  return (
    <div
      className={`flex text-white ${
        izquierda ? "justify-end" : "justify-start "
      } w-full`}
      style={{opacity: (scrollY>(orden==1?windowHeight*2.1:(orden==2?windowHeight*2.3:windowHeight*2.4)))? 1 : 0, transform:`translateX(${(scrollY>(orden==1?windowHeight*2.1:(orden==2?windowHeight*2.3:windowHeight*2.4)))? 0 : (izquierda?50:-50)}px)`,transition: 'opacity 0.5s, transform 0.5s'}}
    >
      <div className={`w-[87%] flex  h-[120px] ${izquierda? "pl-[15px]":"justify-end"} overflow-hidden`} >
        <div
          className={`w-[85%] h-full flex  justify-center items-center `}
        >
          <div className={`relative flex  justify-center items-center w-[100px] h-full ${izquierda?"-translate-x-3":""}`}>
            <div className={`absolute  flex justify-end items-center w-full h-full  `} style={{opacity: (scrollY>windowHeight*2.1)? 1 : 0,animation: "rotate 5s linear infinite"}}>
              <ProfileCircleIcon />
            </div>
            <div className={`flex text-center justify-center items-center w-full `}>
              <Image  src={`/images/${profile.image}`} alt="Profile" className="" width={78} height={78}/>
            </div>
          </div>
          <div className=" flex flex-col text-start justify-center items-center bg-transparent w-[180px] h-full ">
            <h3 className="text-[14px] font-bold text-white whitespace-nowrap">{profile.name}</h3>
            <span className="text-light text-[14px] text-white">{profile.rol}</span>

        </div>
        </div>
        
      </div>
    </div>
  );
};

export default CardProfile;
