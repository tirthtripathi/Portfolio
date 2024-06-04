import React from 'react'
import SkillIcone from '../components/SkillsComponents/SkillIcone'
import ToolsIcone from '../components/SkillsComponents/ToolsIcone'


export default function Skills() {
  return (
    <div id='skills' className='px-[20%] max-[1300px]:px-[5%] py-20 max-[800px]:py-10 bg-black'>
        <div className="text-center font-bold max-[1300px]:text-6xl max-[992px]:text-5xl max-[800px]:text-4xl max-[455px]:text-3xl text-white text-7xl font-dmSans">My Skills</div>
        <div className=' border-dashed border-2 mt-10 w-[90%] mx-auto border-white grid grid-cols-2'>
        </div>
        <div className=' mt-9 flex flex-wrap text-white justify-between '>
            <div className=' w-1/2'> 
             <div className='flex justify-center text-center ' >Skills</div>
             <SkillIcone></SkillIcone>
            </div>
            <div className='w-1/2'>
            <div className=' flex justify-center text-center' >Tools</div>
            <ToolsIcone></ToolsIcone>
            </div>
        </div>
    </div>
  )
}
