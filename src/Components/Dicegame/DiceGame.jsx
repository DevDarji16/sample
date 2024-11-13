
import React, { useState } from 'react'

const DiceGame = ({tscore,setTScore}) => {
    const [inputValue,setInputValue]=useState('')
    const [result,setResult]=useState(false)
    const [generated,setGenerated]=useState(0)
    const [score,setScore]=useState(0)
    const generateRandom=()=>{
        const randomNumber=Math.floor(Math.random()*6)+1
        return randomNumber
    }
    const handleClick=()=>{
        const random=generateRandom()
        const userNumber=parseInt(inputValue)
        if(random===userNumber){
            setResult(true)
            setScore(score+1)
            setTScore(tscore+1)
        }
        setGenerated(random)
        setInputValue('')
    }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10%'}}>
        <div style={{textAlign:'center'}}>
        <input type="text" value={inputValue} placeholder='Guess die number' onChange={e=>setInputValue(e.target.value)} min={1} max={6} style={{padding:'20px 35px',textDecoration:'none',border:'none',fontFamily:'monument',textAlign:'center'}} />
        <br />
        <button onClick={handleClick} style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'20px 30px',border:'none',marginLeft:'17vh',marginTop:'2vh',fontFamily:'monument'}}>Guess</button>
        {
         result ? <h1 >You won the winning number was indeed {generated}</h1>:<h1>The winning number was:{generated}</h1>
        }
        <h1>
        Score:{score}

        </h1>
    </div></div>
    
  )
}

export default DiceGame