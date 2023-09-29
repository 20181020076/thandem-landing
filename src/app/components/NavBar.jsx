import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[prevScrollPos, visible])
  return (
    <div className={`w-[95%] h-[50px] px-2 flex z-50 bg-white rounded-full justify-between  fixed top-4 left-1/2 -translate-x-1/2 transition-all duration-300 dark:bg-dark ${visible ? '' :  (!isOpen&& '-translate-y-20')}`}>
      <div
        className={` fixed -top-4  flex w-[80vw] items-center h-[100vh] bg-violet-700 text-white transition-all duration-300 ${
          !isOpen ? "-left-[500px]": "-left-[2.5vw]"
        } `}
      >
        <ul className="flex flex-col gap-1 capitalize">
          <li>
            <a href="#seccion1" onClick={()=>{setIsOpen(false)} }>Home</a>
          </li>
          <li>
            <a href="#seccion2" onClick={()=>setIsOpen(false)}>Nosotros</a>
          </li>
          <li>
            <a href="#seccion3" onClick={()=>setIsOpen(false)}>Que hacemos</a>
          </li>
          <li>
            <a href="#seccion4" onClick={()=>setIsOpen(false)}>Equipo</a>
          </li>
          <li>
            <a href="#seccion5" onClick={()=>setIsOpen(false)}>Contactenos</a>
          </li>
        </ul>
      </div>
      <button
        className={`flex flex-col justify-center items-center transition-all duration-300  ${
          isOpen ? "fixed h-[50px] right-[23%]" : ""
        }`}
        onClick={handleClick}
      >
        <span
          className={`bg-black dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "hidden" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : -"translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="flex h-full items-center dark:text-white">Thandem</div>
      <div className="flex justify-center items-center ">
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
