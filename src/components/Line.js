import React from 'react'
import LeftDesign from '../designs/LeftDesign'
import RightDesign from '../designs/RightDesign'
import MidDesign from '../designs/MidDesign'
export default function Line() {
  return (
    <div className='text-white h-28 max-[742px]:hidden flex justify-around'>
        <LeftDesign></LeftDesign>
        <MidDesign></MidDesign>
        <RightDesign></RightDesign>
    </div>
  )
}
