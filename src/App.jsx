import React, { useState } from 'react'


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
const App = () => {

  const carddetails=[
    {name:'Slot Game', component:'slotmachine',image:'https://i.postimg.cc/7Z50rsqj/Slotmachine.jpg'},
    {name:'Slot Game 2', component:'slotmachine2',image:'https://i.postimg.cc/7Z50rsqj/Slotmachine.jpg'},
    {name:'Dice Game', component:'dicegame',image:'https://i.postimg.cc/0Qhrv6wp/Dice.jpg'},
    {name:'Rock Paper', component:'rockpaper',image:'https://i.postimg.cc/PJx2t2s3/rockpaper.jpg'},
    {name:'Roulette', component:'roulette',image:'https://i.postimg.cc/sXBFJ80F/roulette.jpg'},
    {name:'Two Flips', component:'twoflips',image:'https://i.postimg.cc/4xpxkJws/two-flips.jpg'},
    {name:'Tic Tac Toe', component:'tictactoe',image:'https://i.postimg.cc/fyBzf0Zj/tic-tac-toe.jpg'},
  ]
    const [inputValue,setInputValue]=useState('')
    const [textColor,setTextColor]=useState('white')
    const [backgroundColor,setBackgroundColor]=useState('black')
    const[game,setGame]=useState(null)
    const [filtered,setFiltered]=useState(carddetails)
    const [tscore,setTScore]=useState(0)
    const handleClick=(a)=>{
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
      <div style={{display: 'flex',
  justifyContent: 'center', // Centers horizontally
  alignItems: 'center', // Centers vertically if needed
  margin: '25px 0'}}><input type="text" placeholder='Search' style={{ height: '40px',
      width: '80%', // Adjust width to be percentage-based for responsiveness
      maxWidth: '400px', // Add a maximum width for larger screens
      textAlign: 'center'}} value={inputValue} onChange={e=>handleSearch(e)}/> 
      {/* <button onClick={handleSearch}>Search</button> */}
      </div>
      
      {!game &&(
        <div >
          <div className='Cards' style={{display:'flex',flexWrap:'wrap'}}>
          {filtered.map((a,index)=>(
            <div key={index} className={a.component} id='card' onClick={()=>handleClick(a.component)} style={{height:'320px',backgroundColor:'gray' ,margin:'10px',userSelect:'none' ,width:'300px' }}>
                <img src={a.image} alt="" style={{height:'200px',width:'300px',objectFit:'cover'}}/>
                <h1 style={{display:'flex',justifyContent:'center',fontFamily:'monument'}}>{a.name}</h1>
                <p style={{display:'flex',justifyContent:'center',fontFamily:'monument',color:'pink'}}>Click to play</p>
            </div>
          ))}
          
             
            
          </div>


         
            
            
        </div>
        
      )}
      {game &&(
        <div >
          {game==='slotmachine'?<SlotMachine tscore={tscore} setTScore={setTScore}/>:game==='dicegame'?<DiceGame tscore={tscore} setTScore={setTScore}/>:game==='rockpaper'?<RockPaper tscore={tscore} setTScore={setTScore}/>:game==='roulette'?<Roulette/>:game==='twoflips'?<TwoFlips/>:game==='slotmachine2'?<SlotMachine2/>:game==='tictactoe'?<TicTacToe tscore={tscore} setTScore={setTScore}/>:none}
         
         <button onClick={handleBack} style={{marginLeft:'20vh',width:'80%',fontFamily:'monument',border:'none',padding:'20px 30px',fontSize:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>Go back</button>

         
        </div>
      )}

      
     
      
    </div>
  )
}

export default App