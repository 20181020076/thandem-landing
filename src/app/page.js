"use client";
import Contador from "./components/Contador";
import NavBar from "./components/NavBar";
import { useState, useEffect, useRef } from "react";
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
import LineContainer from "./components/LineContainer";
import useThemeSwitcher from "./components/hooks/useThemeSwitcher";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [colorTheme, setColorTheme] = useState();
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const [mode, setMode] = useThemeSwitcher();

  const categories = [
    {
      id: 1,
      title: "Nightlife & Clubs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim aborum.",
      icon: "NightLifeIcon",
    },
    {
      id: 2,
      title: "Naturaleza",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim aborum.",
      icon: "NatureIcon",
    },
    {
      id: 3,
      title: "Cafe",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim aborum.",
      icon: "CoffeIcon",
    },
    {
      id: 4,
      title: "Romanticos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim aborum.",
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
    <div className="overflow-hidden bg-white dark:bg-black" id="seccion1">
      <NavBar mode={mode} setMode={setMode} />
      {/* seccion 1 */}
      <div className="flex flex-col relative overflow-hidden  justify-start items-start bg-white w-full text-primary h-[100vh]  dark:bg-dark dark:text-white">
        <div className="w-full h-[100vh]">
          <div className="flex justify-center items-center  w-[100%] h-[75%] relative">
            <div className="w-full h-[30vh] flex justify-center  items-end absolute -bottom-1 z-10 bg-gradient-to-b from-transparent to-white dark:to-black">
              <p className="text-center font-extralight text-[17px]">
                Al final de todo solo nos quedamos <br></br> con nuestras
                experiencias
              </p>
            </div>
            <video
              className="h-full max-w-none"
              height={"100vh"}
              loop
              autoPlay
              muted
            >
              <source src="/images/video-fondo2.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="flex flex-col w-full h-[25%] justify-start items-center z-20 gap-4 pt-7">
            <div className="flex w-full justify-center items-center gap-4">
              <div className="">
                <RomanticIcon size={40} />
              </div>

              <NatureIcon size={40} />
              <NightLifeIcon size={40} />
              <CoffeIcon size={40} />
            </div>
            <div className="bg-primary w-[80%] h-[2px] rounded-full mt-[15px] dark:bg-white"></div>
          </div>
        </div>
      </div>
      {/* seccion 2 */}
      <div
        className={`flex flex-col w-full h-[100vh] items-center justify-center bg-gradient-to-b from-white to-white dark:bg-gradient-to-b dark:from-black dark:to-dark -translate-y-[1px] pt-[30px] dark:text-white`}
        id="seccion2"
        style={{
          background: `linear-gradient(to bottom, ${
            mode == "dark" ? "#000000" : "#ffffff"
          } 25%, ${colorTheme})`,
        }}
      >
        <div
          className="mb-7 flex flex-col h-[15%] gap-2 "
          style={{
            opacity: scrollY > windowHeight / 2 ? 1 : 0,
            transform: `translateY(${scrollY > windowHeight / 2 ? 0 : 50}px)`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <h2 className="font-bold text-[25px] text-center">¿Quienes somos?</h2>
          <p className="w-[310px] text-center text-sm">
            Somos una startup que busca el bienestar de todos logrando conectar
            grandes experiencias con personas que estan dispuestas a los retos
          </p>
        </div>
        <div
          className="flex w-[80%] max-w-[300px] justify-center items-start h-[20%]  z-20 "
          style={{
            opacity: scrollY > windowHeight * 0.7 ? 1 : 0,
            transform: `translateY(${scrollY > windowHeight * 0.7 ? 0 : 50}px)`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <NumberCount2 number1={50} number2={150} number3={3} />
        </div>

        <div
          className="w-full h-[65%] flex justify-center items-center "
          style={{
            opacity: scrollY > windowHeight*0.9 ? 1 : 0,
            transform: `translateY(${scrollY > windowHeight *0.9? 0 : 50}px)`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <StackCategories
            categories={categories}
            colorTheme={colorTheme}
            setColorTheme={setColorTheme}
          />
        </div>
      </div>
      {/* seccion 3 */}

      <div
        className="flex flex-col  items-center w-full h-[150vh] relative -translate-y-[2px] pt-10"
        id="seccion3"
        style={{
          background: `linear-gradient(to bottom, ${colorTheme}, ${
            mode == "dark" ? "#000000" : "#ffffff"
          })`,
        }}
      >
        <div
          className="flex  justify-center items-start mt-5 w-full  absolute"
          style={{
            opacity: scrollY > windowHeight * 1.8 ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        >
          <LineContainer scrollY={scrollY} />
          <div className=" w-full h-[405px] flex flex-col bottom-0 items-end justify-end  gap-[2.5vh]  absolute">
            <CardProfile
              orden={1}
              profile={{
                name: "Bryan David Coy",
                rol: "co-founder",
                image: "profile.png",
              }}
              scrollY={scrollY}
            />
            <CardProfile
              orden={2}
              izquierda={true}
              profile={{
                name: "Diego Alejandro Rojas",
                rol: "co-founder",
                image: "profile.png",
              }}
              scrollY={scrollY}
            />
            <CardProfile
              orden={3}
              profile={{
                name: "Diego Alejandro Garzon",
                rol: "co-founder",
                image: "profile.png",
              }}
              scrollY={scrollY}
            />
          </div>
        </div>
        <div
          className={`absolute w-full flex flex-col top-[3vh] justify-center items-center    dark:text-white`}
          style={{
            opacity: scrollY > windowHeight * 1.6 ? 1 : 0,
            transform: `translateY(${scrollY > windowHeight * 1.6 ? 0 : 50}px)`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <h2 className="w-full text-[25px] text-center font-bold text-white dark:text-white">
            Nuestros Servicios
          </h2>
          <div className="w-[70%] h-[2px] bg-white"></div>
        </div>
        <div
          className="flex  pt-10 justify-center items-center w-full overflow-hidden"
          style={{
            opacity: scrollY > windowHeight * 1.95 ? 1 : 0,
            transform: `translateX(${
              scrollY > windowHeight * 1.95 ? 0 : 50
            }px)`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <CardServices />
        </div>
      </div>
      {/* seccion 4 */}

      <div
        className="relative flex  flex-col justify-start items-center bg-gradient-to-b from-white to-white  w-full h-[100vh] -translate-y-[3px] text-white pt-[10px] dark:from-black dark:to-black"
        id="seccion4"
      >
        <h2
          className="font-bold mb-[20px]"
          style={{
            opacity: scrollY > windowHeight * 3.25 ? 1 : 0,
            transform: `translateY(${scrollY > windowHeight * 3.25 ? 0 : 50}px)`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          ¿Como trabajar con nosotros?
        </h2>
        <form
          className="w-[80%] py-[20px] text-xs flex flex-col justify-center items-center gap-3 bg-primary rounded-xl"
          style={{
            opacity: scrollY > windowHeight * 3.4 ? 1 : 0,
            transform: `translateY(${scrollY > windowHeight * 3.4 ? 0 : 50}px)`,
            transition: "opacity 0.5s, transform 0.5s",
          }}
        >
          <div
            className="w-[80%] flex flex-col gap-[4px] items-center justify-center"
            style={{
              opacity: scrollY > windowHeight * 3.45 ? 1 : 0,
              transform: `translateY(${
                scrollY > windowHeight * 3.45 ? 0 : 50
              }px)`,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <label htmlFor="nombre" className=" block w-full">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              className="rounded-full h-[25px] w-full bg-white text-white border border-white p-2"
              style={{
                opacity: scrollY > windowHeight * 3.46 ? 1 : 0,
                transform: `translateY(${
                  scrollY > windowHeight * 3.46 ? 0 : 50
                }px)`,
                transition: "opacity 0.5s, transform 0.5s",
              }}
            />
          </div>
          <div
            className="w-[80%] flex flex-col gap-[4px] items-center justify-center"
            style={{
              opacity: scrollY > windowHeight * 3.47 ? 1 : 0,
              transform: `translateY(${
                scrollY > windowHeight * 3.47 ? 0 : 50
              }px)`,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <label htmlFor="correo" className=" block w-full">
              Correo Electronico
            </label>
            <input
              id="correo"
              name="correo"
              className="rounded-full h-[25px] w-full bg-white text-white border border-white p-2"
              style={{
                opacity: scrollY > windowHeight * 3.48 ? 1 : 0,
                transform: `translateY(${
                  scrollY > windowHeight * 3.48 ? 0 : 50
                }px)`,
                transition: "opacity 0.5s, transform 0.5s",
              }}
            />
          </div>
          <div
            className="w-[80%] flex flex-col gap-[4px] items-center justify-center"
            style={{
              opacity: scrollY > windowHeight * 3.49 ? 1 : 0,
              transform: `translateY(${
                scrollY > windowHeight * 3.49 ? 0 : 50
              }px)`,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <label htmlFor="empresa" className=" block w-full">
              Nombre de la empresa
            </label>
            <input
              id="empresa"
              name="empresa"
              className="rounded-full h-[25px] w-full bg-white text-white border border-white p-2"
            />
          </div>
          <div
            className="w-[80%] flex flex-col gap-[4px] items-center justify-center"
            style={{
              opacity: scrollY > windowHeight * 3.5 ? 1 : 0,
              transform: `translateY(${
                scrollY > windowHeight * 3.5 ? 0 : 50
              }px)`,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            <label htmlFor="descripcion" className=" block w-full">
              Describe tu necesidad
            </label>
            <input
              id="descripcion"
              name="descripcion"
              className="rounded-full h-[40px] w-full bg-white text-white border border-white p-2"
            />
          </div>

          <button
            className="rounded-md w-[90px] h-[20px] bg-secundary text-white"
            style={{
              opacity: scrollY > windowHeight * 3.47 ? 1 : 0,
              transform: `translateY(${
                scrollY > windowHeight * 3.47 ? 4 : 50
              }px)`,
              transition: "opacity 0.5s, transform 0.5s",
            }}
          >
            Enviar
          </button>
        </form>
        <div className="text-white  flex flex-col absolute gap-2 bottom-0 w-[70%] h-[40vh] justify-center items-center">
          <div className="w-full ">
            <div className="capitalize flex justify-between items-center text-[18px] bold"><span>Thandem</span><div className="w-[10px] h-[10px] -rotate-45 border-t-[2px] border-r-[2px]"></div></div>
            <div className="">
              <ul className="text-[12px] font-light">
                <li>Cookies Policy</li>
                <li>Cookies Management</li>
                <li>Contacto</li>
              </ul>
            </div>
          </div>
          <div className="w-full">
          <div className="capitalize w-full flex justify-between items-center text-[18px] bold"><span>Más</span><div className="w-[10px] h-[10px] -rotate-45 border-t-[2px] border-r-[2px]"></div></div>
            <div className="">
              <ul className="text-[12px] flex flex-col font-light">
                <li>Aviso Legal</li>
                <li>Política de privacidad</li>
                <li>Términos y condiciones</li>
                <li>Preguntas frecuentes</li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
