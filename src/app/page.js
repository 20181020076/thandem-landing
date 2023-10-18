"use client";
import Contador from "./components/Contador";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import NumberCount2 from "./components/NumberCount2";
import {
  BorderCount,
  CamelPlan,
  CoffeIcon,
  HomeIcon,
  NatureIcon,
  NightLifeIcon,
  PlantaIcon,
  EyeIcon,
  RomanticIcon,
  LineIcon,
} from "./components/Icons";

import Profile from "./components/Profile";
import StackCategories from "./components/StackCategories";
import CardServices from "./components/CardServices";
import CardProfile from "./components/CardProfile";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [colorTheme, setColorTheme] = useState()
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
const [windowHeight, setWindowHeight] = useState(typeof window !== 'undefined' ? window.innerHeight : 0);

  
  const categories = [
    {
      id:1,
      title: "Nightlife & Clubs",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim aborum.",
      icon: "NightLifeIcon",
    },
    {
      id:2,
      title: "Naturaleza",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim aborum.",
      icon: "NatureIcon",
    },
    {
      id:3,
      title: "Cafe",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim aborum.",
      icon: "CoffeIcon",
    },
    {
      id:4,
      title: "Romanticos",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim aborum.",
      icon: "RomanticIcon",
    },
    
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [colorTheme]);
  return (
    <div className="overflow-hidden" id="seccion1">
      <NavBar />
      {/* seccion 1 */}
      <div className="flex flex-col relative overflow-hidden  justify-start items-start bg-gray-200 w-full text-white h-[100vh]  dark:bg-dark">
        <div className="w-full h-[100vh]">
          <div className="flex justify-center items-center  w-[100%] h-[70%] relative">
          <div className="w-full h-[50vh] absolute -bottom-1 z-10 bg-gradient-to-b from-transparent to-black"></div>
          <video className="h-full max-w-none" height={"100vh"} loop autoPlay muted>
            <source src="/images/Video-amigos.mp4" type="video/mp4"/>
          </video>
        </div>

        <div className="flex flex-col w-full h-[30%] justify-start items-center z-20 gap-4">
          <p className="w-[80%] text-center font-monserrat-alternates font-extralight text-[17px]">
            Al final de todo solo nos quedamos <br></br> con nuestras experiencias
          </p>
          <div className="flex w-full justify-center items-center gap-4">
            <div className="">
              <RomanticIcon size={40}/>
            </div>

            <NatureIcon size={40}/>
            <NightLifeIcon size={40}/>
            <CoffeIcon size={40}/>
          </div>
          <div className="bg-white w-[80%] h-[2px] rounded-full mt-[15px]"></div>
        </div>
        </div>
        
      </div>
      {/* seccion 2 */}
      <div
        className={`flex flex-col w-full h-[100vh] items-center justify-center dark:bg-gradient-to-b dark:from-black dark:to-dark -translate-y-[1px] pt-[30px] dark:text-white`}
        id="seccion2"
        style={{background:`linear-gradient(to bottom, #000000 25%, ${colorTheme})`}}
      >
        <div className="mb-7 flex flex-col h-[15%] gap-2 " style={{opacity: (scrollY>windowHeight/2)?1 :0, transform:`translateY(${(scrollY>windowHeight/2)? 0 : 50}px)`,transition: 'opacity 0.5s, transform 0.5s'}}>
          <h2 className="font-bold text-[25px] text-center">
            ¿Quienes somos?
          </h2>
          <p
            className="w-[310px] text-center text-sm"
            
          >
            Somos una startup que busca el bienestar de todos logrando conectar
            grandes experiencias con personas que estan dispuestas a los retos
          </p>
        </div>
        <div className="flex w-[80%] justify-center items-start h-[20%]  z-20 " style={{opacity: (scrollY>windowHeight*0.7)? 1 : 0, transform:`translateY(${(scrollY>windowHeight*0.7)? 0 : 50}px)`,transition: 'opacity 0.5s, transform 0.5s'}}>
          <NumberCount2 number1={50} number2={150} number3={3}/>
        </div>
        
        <div className="w-full h-[65%] flex justify-center items-center " style={{opacity: (scrollY>windowHeight)? 1 : 0, transform:`translateY(${(scrollY>windowHeight)? 0 : 50}px)`,transition: 'opacity 0.5s, transform 0.5s'}}>
          <StackCategories categories={categories} colorTheme={colorTheme} setColorTheme={setColorTheme} />
        </div>
      </div>
      {/* seccion 3 */}

      <div
        className="flex flex-col  items-center w-full h-[150vh] relative -translate-y-[2px] pt-10"
        id="seccion3"
        style={{background:`linear-gradient(to bottom, ${colorTheme}, #000000)`}}
      >
        <div className="flex  justify-center items-start mt-5 w-full  absolute">
          <LineIcon/>
          <div className=" w-full h-[405px] flex flex-col bottom-0 items-end justify-end  gap-[2.5vh]  absolute">
          <CardProfile profile={{name:"Bryan David Coy", rol:"co-founder", image:"profile.png"}}/>
          <CardProfile izquierda={true} profile={{name:"Diego Alejandro Rojas", rol:"co-founder", image:"profile.png"}}/>
          <CardProfile profile={{name:"Diego Alejandro Garzon", rol:"co-founder", image:"profile.png"}}/>

        </div>
        </div>
        <div className="absolute w-full flex flex-col top-[3vh] justify-center items-center left-[50%] -translate-x-[50%]  dark:text-white">
          <h2 className="w-full text-[25px] text-center font-bold ">Nuestros Servicios</h2>
          <div className="w-[70%] h-[2px] bg-white"></div>
        </div>
       <div className="flex  pt-10 justify-center items-center w-full overflow-hidden">
          <CardServices/>
        </div> 
       
        
       
      </div>
      {/* seccion 4 */}

      <div
        className="relative flex flex-col justify-start items-center bg-gradient-to-b from-black to-dark  w-full h-[100vh] -translate-y-[3px] text-white pt-[40px]"
        id="seccion4"
      >
        <h2 className="font-bold">Contactenos </h2>
        <form className="w-[80%] flex flex-col justify-center gap-3">
          <input
            placeholder="nombre "
            className="rounded-full bg-transparent text-white border border-white p-2"
          />
          <input
            placeholder="apellido "
            className="rounded-full bg-transparent text-white border border-white p-2"
          />
          <input
            placeholder="descripcion "
            className="rounded-full bg-transparent text-white border border-white p-2"
          />
          <button className="rounded-full bg-transparent text-white border border-white p-2">
            Hola
          </button>
        </form>
        
        
      </div>
      
    </div>
  );
}
