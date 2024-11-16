import React from 'react'
import { FaDove } from 'react-icons/fa'
import Boxes from './Boxes'
import './GemStack.css'
const Gemstack = () => {
  const items=[]
  for(let i=0;i<25;i++){
    items.push(<Boxes/>)
  }
  return (
    <div>
      <div id='main-part'>
        <div id='left-part'></div>
        <div> <div id='right-part' >
        {items}
      </div></div>
     
      </div>
      
    </div>
    )
}

export default Gemstack