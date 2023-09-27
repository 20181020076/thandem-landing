"use client";
import Contador from "./components/Contador";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import NumberCount from "./components/NumberCout";
import { CamelPlan, HomeIcon, PlantaIcon } from "./components/Icons";
import Image from "next/image";
import Card from "./components/Card";
export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="overflow-hidden " id="seccion1">
      <NavBar />

      <div className="flex flex-col relative overflow-hidden  justify-start bg-gray-200 w-full text-white h-[120vh] pt-[50px]  dark:bg-dark">
        <div className="absolute flex top-0 justify-center items-center  w-[100%] h-[100%]">
          <video autoPlay loop muted className=" w-[450%] max-w-none">
            <source src="/images/file.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex flex-col w-full h-[100%] justify-center items-center z-20">
          <h1 className="text-2xl font-bold uppercase text-center">thandem</h1>
          <p>Al final de todo solo nos quedamos con nuestras experiencias </p>
        </div>
      </div>
      {/* seccion 2 */}
      <div
        className="flex flex-col justify-center items-center bg-white w-full h-[100vh] dark:bg-dark dark:text-white"
        id="seccion2"
      >
        <div className="mb-10">
          <h2 className="font-bold text-xl text-center mb-5">
            ¿Quienes somos?
          </h2>
          <p className="text-center">
            Somos una startup que busca el bienestar de todos logrando conectar
            grandes experiencias con personas qie estan dispuestas a los retos
          </p>
        </div>
        <div className="flex w-full justify-center gap-1 z-20">
          <NumberCount number={50} description={"Empresas asociados"} />
          <NumberCount number={150} description={"Usuarios activos"} />
          <NumberCount number={5} description={"socios al mando"} />
        </div>
      </div>
      {/* seccion 3 */}

      <div
        className="flex flex-col justify-center items-center bg-violet-700 w-full h-[200vh] relative"
        id="seccion3"
      >
        <Card/>
      </div>
      {/* seccion 4 */}

      <div
        className="flex flex-col justify-center bg-dark w-full h-[100vh] text-white"
        id="seccion4"
      >
        <h2>Trayecto</h2>
      </div>
    </div>
  );
}
