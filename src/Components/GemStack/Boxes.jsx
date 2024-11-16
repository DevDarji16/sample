import React from 'react'
import './Gemstack.css'
import aud1 from '../aud/mousehover.mp3'
const Boxes = () => {
    const handleaud=()=>{
        const sound=new Audio(aud1)
        sound.play()
    }
  return (
    <div className='boxes'   onMouseEnter={handleaud}></div>
  )
}

export default Boxes