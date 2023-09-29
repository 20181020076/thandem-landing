import React from "react";
import ProfileImage from "./ProfileImage";

const Profile = ({ nombre, descripcion, rol, imagen }) => {
  return (
    <div className="flex flex-col w-[300px] h-[300px] items-center justify-center bg-white bg-opacity-50 ">
      <ProfileImage image={imagen} />
      <div className="w-[90%]">
        <h3 className="text-violet-800 font-bold text-xl">{nombre}</h3>
        <span className="text-sm underline underline-offset-1">{rol}</span>
        <p className="">{descripcion}</p>
      </div>
    </div>
  );
};

export default Profile;
