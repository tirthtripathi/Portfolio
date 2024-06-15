import React from 'react'

export default function Header() {

  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className=' bg-gray-900 rounded-xl relative mx-auto flex flex-row px-10 py-6 justify-between max-[455px]:justify-center'>
        <div className='text-xl flex gap-2 font-mono text-white w-[35%] max-[743px]:hidden'>
        <span className='text-purple-500'>The</span>Engineer
        </div>
        <div className='flex flex-row gap-10 max-[743px]:gap-5 max-[455px]:gap-2'>
            <div  className='text-white text-sm cursor-pointer border-b-2 max-[634px]:text-xs'>HOME</div>
            <div onClick={handleClickScroll.bind(this,'skills')} className='text-white  text-sm max-[634px]:text-xs cursor-pointer'>SKILLS</div>
            <div onClick={handleClickScroll.bind(this,'projects')} className='text-white  text-sm max-[634px]:text-xs cursor-pointer '>PROJECTS</div>
            <div onClick={handleClickScroll.bind(this,'contacts')} className='text-white  text-sm max-[634px]:text-xs cursor-pointer'>CONTACTS</div>
        </div>
    </div>
  )
}