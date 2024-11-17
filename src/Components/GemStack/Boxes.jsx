import React, { useEffect, useState } from 'react'
import './Gemstack.css'
import aud1 from '../aud/mousehover.mp3'
const Boxes = ({mine,gameOver,setGameOver,id}) => {
    
    const [emoji,setEmoji]=useState('')
    const activated=[]
    const handleaud=()=>{
        const sound=new Audio(aud1)
        sound.play()
    }
    useEffect(()=>{
      if(gameOver){
        setEmoji(mine?'💣':'💎')
      }
    },[gameOver,mine])

    const handleEmoji=()=>{
      if(!gameOver){if(mine){
        setEmoji('💣')
        setGameOver(true)
        alert('Game over')
      }
      else{
        setEmoji('💎')
      }}
    }
  return (
    <div style={{fontSize:'68px',textAlign:'center',userSelect:'none'}} className='boxes' onClick={handleEmoji}   onMouseEnter={handleaud}>{emoji}</div>
  )
}

export default Boxes