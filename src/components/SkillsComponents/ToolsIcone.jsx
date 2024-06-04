import React from 'react'

import { SiCloudinary } from "react-icons/si";

import { FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
const ToolsIcone = () => {
  return (
<div className=' flex flex-wrap mt-10 gap-4 justify-center'>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <FaGitAlt />
            </div>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <FaGithub />
            </div>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <FaFigma />
            </div>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <SiCloudinary />
            </div>
    </div>
  )
}

export default ToolsIcone