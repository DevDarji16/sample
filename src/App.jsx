import React, { useState } from 'react'


import './index.css'
import Nav from './Components/Nav/Nav'
import SlotMachine from './Components/slotmachine/SlotMachine'
import Cards from './Components/Cards/Cards'
import DiceGame from './Components/Dicegame/DiceGame'
import RockPaper from './rockpaper/RockPaper'
const App = () => {
    const [textColor,setTextColor]=useState('white')
    const [backgroundColor,setBackgroundColor]=useState('black')
    const[game,setGame]=useState(null)
    const [tscore,setTScore]=useState(0)
    const handleClick=(a)=>{
      setGame(a)
      
    }
    const handleBack=()=>{
      setGame(null)
    }
    
  return (
    <div className='maindiv' >
      <Nav tscore={tscore} setTScore={setTScore} setGame={setGame}/>
      {!game &&(
        <div className='Cards' style={{display:'flex'}}>
            <div className='slotmachine' onClick={()=>handleClick('slotmachine')} style={{height:'320px',backgroundColor:'gray' ,margin:'10px',userSelect:'none'  }}>
                <img src="https://i.postimg.cc/7Z50rsqj/Slotmachine.jpg" alt="" style={{height:'200px'}}/>
                <h1 style={{display:'flex',justifyContent:'center',fontFamily:'monument'}}>Slot Game</h1>
                <p style={{display:'flex',justifyContent:'center',fontFamily:'monument',color:'pink'}}>Click to play</p>
            </div>
            {/* Dice game */}
            <div className='dicegame' onClick={()=>handleClick('dicegame')} style={{height:'320px',backgroundColor:'gray' ,margin:'10px',userSelect:'none'  }}>
                <img src="https://i.postimg.cc/0Qhrv6wp/Dice.jpg" alt="" style={{height:'200px ',width:'300px',objectFit:'cover'}}/>
                <h1 style={{display:'flex',justifyContent:'center',fontFamily:'monument'}}>Dice Game</h1>
                <p style={{display:'flex',justifyContent:'center',fontFamily:'monument',color:'pink'}}>Click to play</p>
            </div>
            <div className='rockpaper' onClick={()=>handleClick('rockpaper')} style={{height:'320px',backgroundColor:'gray' ,margin:'10px',userSelect:'none'  }}>
                <img src="https://i.postimg.cc/PJx2t2s3/rockpaper.jpg" alt="" style={{height:'200px ',width:'300px',objectFit:'cover'}}/>
                <h1 style={{display:'flex',justifyContent:'center',fontFamily:'monument'}}>Rock Paper</h1>
                <p style={{display:'flex',justifyContent:'center',fontFamily:'monument'}}>Click to play</p>
            </div>
        </div>
        
      )}
      {game &&(
        <div >
          {game==='slotmachine'?<SlotMachine tscore={tscore} setTScore={setTScore}/>:game==='dicegame'?<DiceGame tscore={tscore} setTScore={setTScore}/>:game==='rockpaper'?<RockPaper tscore={tscore} setTScore={setTScore}/>:null}
         
         <button onClick={handleBack} style={{marginLeft:'20vh',width:'80%',fontFamily:'monument',border:'none',padding:'20px 30px',fontSize:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>Go back</button>

         
        </div>
      )}

      
     
      
    </div>
  )
}

export default App