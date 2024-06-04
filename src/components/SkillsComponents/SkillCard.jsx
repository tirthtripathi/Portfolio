import React from 'react'

const SkillCard = ({card}) => {
  return (
    <div className=' border-2' style={{ fontSize:'6rem' }}>
      {<card />}
    </div>
  )
}

export default SkillCard