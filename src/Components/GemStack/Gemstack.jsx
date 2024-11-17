import React, { useEffect, useState } from 'react'
import { FaDove } from 'react-icons/fa'
import Boxes from './Boxes'
import './GemStack.css'
import aud1 from '../aud/clickbutton.mp3'

const Gemstack = () => {
  const [mine,setMine]=useState(false)
  const [inputMines,setInputMines]=useState(3)
  const [items,setItems]=useState([])
  const [random,setRandom]=useState([])
  const [gameOver,setGameOver]=useState(false)
  const [inputValue,setInputValues]=useState(1)
  const handleaud=()=>{
    const sound=new Audio(aud1)
    sound.play()
}
const handleRandomArray = () => {
  const newRandom = []; 
  while (newRandom.length < inputMines) {
    const randomnum = Math.floor(Math.random() * 25);
    if (!newRandom.includes(randomnum)) {
      newRandom.push(randomnum);
    }
  }
  setRandom(newRandom); 
};

 
 useEffect(() => {
  handleRandomArray();
}, [inputMines]);

useEffect(() => {
  handleItems();
}, [random, gameOver]);

  const handleItems=()=>{
    const item=[]
    
  for(let i=0;i<25;i++){
    
    if(random.includes(i)){
      item.push(<Boxes id={i} gameOver={gameOver} setGameOver={setGameOver} key={i} mine={true}/>)
    }
    else{
      item.push(<Boxes key={i} gameOver={gameOver} setGameOver={setGameOver} mine={false}/>)
    }
    
    
  }
  setItems(item)}

  const handleMines=()=>{
    setInputMines(inputValue)
  }
  return (
    <div>
      <div id='main-part'>
        <div id='left-part' >
        <input type="text" onChange={e=>setInputValues(e.target.value)}value={inputValue}placeholder='Enter the number of mines' min={1} max={24} style={{margin:'10px',padding:'20px',fontFamily:'monument'}}/> 
        <button onClick={handleMines} >Add</button>
          <div id='button'>
          <button onClick={()=>setInputMines(3)} onMouseEnter={handleaud}>Easy</button>
          <button onClick={()=>setInputMines(7)} onMouseEnter={handleaud}>Medium</button>
          <button onClick={()=>setInputMines(12)} onMouseEnter={handleaud}>Hard</button>
          </div>
          
          <button id='checkout'  onMouseEnter={handleaud}>CheckOut</button>

        </div>
        <div> 
          <div id='right-part' >
        {items} </div>
     
      </div>
     
      </div>
      {/* {handleRandomArray()}  */}
      {console.log(random)}
    </div>
    )
}

export default Gemstack