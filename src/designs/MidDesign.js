import React from 'react'

const MidDesign = () => {

    const halfCircleStyle = {
        clipPath: 'inset(0 0 50% 0)',
    };

  return (
    <div className='relative w-60 h-[100%] flex justify-center'>
        <div
         className=' h-[350px] w-[350px] absolute top-[-15%] border-2 bg-transparent rounded-full flex justify-between'
         style={halfCircleStyle}>
         <div
         className=' h-[50px] w-[45px] absolute left-[55%] top-6 border-2 bg-white rounded-full'
         ></div>
        <div
         className=' h-[50px] w-[45px] absolute left-[30%] top-6  border-2 bg-white rounded-full'
         ></div>
        </div>
    </div>
  )
}

export default MidDesign