"use client";
import Contador from "./components/Contador";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import NumberCount from "./components/NumberCout";
import { CamelPlan, HomeIcon, PlantaIcon } from "./components/Icons";
import Image from "next/image";
import Card from "./components/Card";
import Profile from "./components/Profile";
import BgStars from "./components/BgStars";
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
          <h1 className="text-4xl font-bold uppercase text-center -translate-y-7">
            thandem
          </h1>
          <p className="w-[80%] text-center">
            Al final de todo solo nos quedamos con nuestras experiencias{" "}
          </p>
        </div>
      </div>
      {/* seccion 2 */}
      <div
        className="flex flex-col pt-[40vh] items-center bg-white w-full h-[120vh] dark:bg-dark dark:text-white"
        id="seccion2"
      >
        <div className="mb-10 flex flex-col gap-10">
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
        className="flex flex-col justify-center items-center bg-gradient-to-b from-violet-800  to-black w-full h-[200vh] relative"
        id="seccion3"
      >
        <div className="absolute w-full h-full">
          <BgStars />
        </div>
        <Card />
      </div>
      {/* seccion 4 */}

      <div
        className="relative flex flex-col justify-center items-center bg-gradient-to-b from-black to-dark  w-full h-[150vh] -translate-y-[1px] text-white border-[0px]"
        id="seccion4"
      >
        
        {/* <h2>Trayecto</h2> */}
        <div className="flex w-full flex-col gap-4 justify-center items-center">
          <div className="flex-col">
            <Profile
              imagen={"coy.jpg"}
              nombre={"Bryan Coy"}
              rol={"co-founder"}
              descripcion={"el mas gei de todos dfdfdfdffffffffff dfdfdf dff fdfgddgsagd gdg d"}
            />
          </div>
          <div className="flex-col">
            <Profile
              imagen={"musculoso.jpeg"}
              nombre={"Diego Rojas"}
              rol={"co-founder"}
              descripcion={"el mas riki de todos"}
            />
          </div>
          <div className="flex-col">
            <Profile
              imagen={"garzan.jpg"}
              nombre={"Diego Garzon"}
              rol={"co-founder"}
              descripcion={"chiguirio"}
            />
          </div>
        </div>
      </div>
      {/* seccion  5*/}
      <div className="h-[100vh] text-white w-[100%] bg-dark border-[0px]  flex flex-col justify-center items-center -translate-y-[2px]" id="seccion5">
        <h2 className="font-bold">Contactanos </h2>
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
          <button className="rounded-full bg-transparent text-white border border-white p-2">Hola</button>
        </form>
      </div>
    </div>
  );
}
