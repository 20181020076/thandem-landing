import React from "react";
import { BorderCount } from "./Icons";

const NumberCount2 = ({ number1, number2, number3 }) => {
  return (
    <div className="flex w-full h-[90px]  justify-center items-center relative">
      <div className="w-full absolute">
        <BorderCount />
      </div>
      {/* caja 1 */}
      <div className="flex flex-col  h-[55px] w-[300px] justify-center items-center">
        <h3 className="text-lg">+{number1}</h3>
        <p className="text-center text-[12px]">empresas<br></br>asociadas</p>
      </div>
      {/* caja 2 */}
      <div className="flex flex-col  h-[55px] w-[300px] justify-center items-center">
        <h3 className="text-lg">+{number1}</h3>
        <p className="text-center text-[12px]">empresas<br></br>asociadas</p>
      </div>
      {/* caja 3 */}
      <div className="flex flex-col  h-[55px] w-[300px] justify-center items-center">
        <h3 className="text-lg">+{number1}</h3>
        <p className="text-center text-[12px]">empresas<br></br>asociadas</p>
      </div>
    </div>
  );
};

export default NumberCount2;
