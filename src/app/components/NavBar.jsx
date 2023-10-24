import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon, MenuIcon, ThandemIcon } from "./Icons";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const NavBar = ({ mode, setMode }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);
  return (
    <div
      className={`w-[95%] h-[40px] px-2 flex z-50 bg-white rounded-full justify-between  fixed top-4 left-1/2 -translate-x-1/2 transition-all duration-300 dark:bg-dark ${
        visible ? "" : !isOpen && "-translate-y-20"
      }`}
    >
      <div
        className={` fixed -top-4  flex w-[80vw] pt-[12vh] h-[100vh] bg-gradient-to-b from-primary to-black z-40 text-white transition-all duration-300 ${
          !isOpen ? "-left-[500px]" : "-left-[2.5vw]"
        } `}
      >
        <ul className="flex flex-col  w-full capitalize ">
          <li className=" flex w-full h-[6vh] pl-[8vw] font-extralight  items-center border-t-[#828282] border-t">
            <a
              href="#seccion1"
              className="w-full "
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Home
            </a>
          </li>
          <li className=" flex w-full h-[6vh] font-extralight pl-[8vw] items-center border-t-[#828282] border-t-[1px]">
            <a href="#seccion2" onClick={() => setIsOpen(false)}>
              Nosotros
            </a>
          </li>
          <li className=" flex w-full h-[6vh] font-extralight pl-[8vw] items-center border-t-[#828282] border-t-[1px]">
            <a href="#seccion3" onClick={() => setIsOpen(false)}>
              Que hacemos
            </a>
          </li>
          <li className=" flex w-full h-[6vh] font-extralight pl-[8vw] items-center border-t-[#828282] border-b-[#828282] border-t border-b">
            <a href="#seccion4" onClick={() => setIsOpen(false)}>
              Equipo
            </a>
          </li>
        </ul>
      </div>
      <div className={`fixed w-[21vw] h-[100vh] bg-black opacity-50 -top-4 transition-all duration-300 ${!isOpen ? "-left-[500px]" : "left-[77vw]"}`}>

      </div>
      <button
        className={`flex justify-center ml-2 items-center h-full w-6 transition-all duration-300 ${
          isOpen ? "fixed z-50 left-[70%]" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
      </button>
      <div className={`flex h-full  ${isOpen?"w-[100px] translate-x-[3vw]":"w-[75px]"}  justify-center items-center dark:text-white -translate-y-[2px] z-50`}>
        <ThandemIcon mode={mode} />
      </div>
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
