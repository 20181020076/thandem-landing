import React, { useEffect, useState } from "react";

const Star = ({x,y,radius})=>{
  return <div className={`absolute bg-white rounded-full`} style={{left:`${x}px`, top:`${y}px`, width:`${radius}px`, height:`${radius}px` }}></div>
}



const BgStars = () => {
  const [stars, setStars] = useState([])
  const putStar = ()=>{
    const variableStar = []
    for(let i=0; i<600; i++ ){

      const newStar = { x: Math.random() * (window.innerWidth - 0), y: Math.random() * (window.innerHeight*2 - 0), radius:Math.random()*(8-1) };
      variableStar.push(newStar)  
    }
    setStars(variableStar)
  }
  
  useEffect(() => {
    
    putStar()
  }, []);

  return <div className="w-full h-full relative border-none">
    {stars.map((star,index)=>{
      return <Star key={index} x={star.x} y={star.y} radius={star.radius}/>
    })}
  </div>;
};

export default BgStars;
