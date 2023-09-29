import React from 'react'

const ProfileImage = ({image}) => {
  return (
    <div className='w-[130px] h-[130px] relative rounded-full overflow-hidden flex justify-center items-center bg-gray-700'>
        <div className='absolute w-full h-[60px] bg-gradient-to-r  from-secundary to-purple-700 z-0 animate-spin-slow'></div>
        <div className='w-[90%] h-[90%] bg-dark z-10 rounded-full flex items-center justify-center overflow-hidden'>
          <img src={`/images/${image}`} alt="hola" />
        </div>
        
    </div>
  )
}

export default ProfileImage