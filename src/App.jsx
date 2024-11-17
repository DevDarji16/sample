import React, { useState } from 'react'

import aud2 from './Components/aud/clickbutton.mp3'
import './index.css'
import Nav from './Components/Nav/Nav'
import SlotMachine from './Components/slotmachine/SlotMachine'
import Cards from './Components/Cards/Cards'
import DiceGame from './Components/Dicegame/DiceGame'
import RockPaper from './rockpaper/RockPaper'
import Roulette from './Components/Roulette/Roulette'
import TwoFlips from './Components/TwoFlips/TwoFlips'
import SlotMachine2 from './Components/slotmachine/SlotMachine2'
import TicTacToe from './TicTacToe/TicTacToe'
import Gemstack from './Components/GemStack/Gemstack'
const App = () => {
  const handleaud=()=>{
    const sound=new Audio(aud2)
    sound.play()
}

  const carddetails=[
    {name:'Slot Game', component:'slotmachine',image:'https://i.postimg.cc/7Z50rsqj/Slotmachine.jpg'},
    {name:'Slot Game 2', component:'slotmachine2',image:'https://i.postimg.cc/7Z50rsqj/Slotmachine.jpg'},
    {name:'Dice Game', component:'dicegame',image:'https://i.postimg.cc/0Qhrv6wp/Dice.jpg'},
    {name:'Rock Paper', component:'rockpaper',image:'https://i.postimg.cc/PJx2t2s3/rockpaper.jpg'},
    {name:'Roulette', component:'roulette',image:'https://i.postimg.cc/sXBFJ80F/roulette.jpg'},
    {name:'Two Flips', component:'twoflips',image:'https://i.postimg.cc/4xpxkJws/two-flips.jpg'},
    {name:'Tic Tac Toe', component:'tictactoe',image:'https://i.postimg.cc/fyBzf0Zj/tic-tac-toe.jpg'},
    {name:'GemStack', component:'gemstack',image:'https://i.postimg.cc/d0Jjp0cW/diamond.jpg'},

  ]
    const [inputValue,setInputValue]=useState('')
    const [textColor,setTextColor]=useState('white')
    const [backgroundColor,setBackgroundColor]=useState('black')
    const[game,setGame]=useState(null)
    const [filtered,setFiltered]=useState(carddetails)
    const [tscore,setTScore]=useState(0)
    const handleClick2=(a)=>{
      setGame(a)
      
    }
    const handleBack=()=>{
      setGame(null)
    }
    const handleSearch=(e)=>{
      const value=e.target.value
      setInputValue(value)
      const result=carddetails.filter((card)=> card.name.toLowerCase().includes(inputValue.toLowerCase())
      )
      setFiltered(value === '' ? carddetails : result);

    }
  return (
    <div className='maindiv' >
      <Nav tscore={tscore} setTScore={setTScore} setGame={setGame}/>
      
      
      {!game &&(
        <div >
          <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center',margin: '25px 0'}}><input type="text" placeholder='Search' style={{ fontFamily:'monument' ,height: '40px',width: '80%', maxWidth: '400px', textAlign: 'center'
      }} value={inputValue} onChange={e=>handleSearch(e)}/> 
     
      </div>
          <div className='Cards' style={{display:'flex',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
          {filtered.map((a,index)=>(
            <div  onMouseEnter={handleaud} key={index} className={a.component} id='card' onClick={()=>handleClick2(a.component)} style={{height:'320px',backgroundColor:'gray' ,margin:'10px',userSelect:'none' ,width:'300px' ,borderRadius:'10px'}}>
                <img src={a.image} alt="" style={{height:'200px',width:'300px',objectFit:'cover',borderTopRightRadius:'10px',borderTopLeftRadius:'10px'}}/>
                <h1 style={{display:'flex',justifyContent:'center',fontFamily:'monument'}}>{a.name}</h1>
                <p style={{display:'flex',justifyContent:'center',fontFamily:'monument',color:'pink'}}>Click to play</p>
            </div>
          ))}
          
             
            
          </div>


         
            
            
        </div>
        
      )}
      {game &&(
        <div >
          {game==='slotmachine'?<SlotMachine tscore={tscore} setTScore={setTScore}/>:game==='dicegame'?<DiceGame tscore={tscore} setTScore={setTScore}/>:game==='rockpaper'?<RockPaper tscore={tscore} setTScore={setTScore}/>:game==='roulette'?<Roulette/>:game==='twoflips'?<TwoFlips/>:game==='slotmachine2'?<SlotMachine2/>:game==='tictactoe'?<TicTacToe tscore={tscore} setTScore={setTScore}/>:game==='gemstack'?<Gemstack/>:none}
         <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <button onClick={handleBack} style={{width:'80%',fontFamily:'monument',border:'none',padding:'20px 30px',fontSize:'20px',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'200px'}}>Go back</button>
 
         </div>
         
         
        </div>
      )}

      
     
      
    </div>
  )
}

export default App