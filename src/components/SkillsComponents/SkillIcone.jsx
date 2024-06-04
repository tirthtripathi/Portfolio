import React from 'react'
import {
    DiJavascript1,
    DiReact,
    DiMongodb,
    DiJava,
} from 'react-icons/di';

import { FaNode, FaBootstrap } from "react-icons/fa";
import { SiExpress, SiChakraui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const SkillIcone = () => {
    return (
        <div className=' flex flex-wrap mt-10 gap-4 justify-center'>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <DiJavascript1/>
            </div>
            <div className=' border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <DiReact/>
            </div>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <FaNode/>
            </div>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <DiMongodb/>
            </div>
            <div className=' border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <DiJava/>
            </div>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <SiExpress />
            </div>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <RiTailwindCssFill />
            </div>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <FaBootstrap />
            </div>
            <div className='border-2' style={{ fontSize:'6rem', padding:'5px' }}>
                <SiChakraui />
            </div>
        </div>
    )
}

export default SkillIcone