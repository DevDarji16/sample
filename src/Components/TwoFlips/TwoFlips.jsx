import React, { useEffect, useState } from 'react'
import './TwoFlips.css'
const TwoFlips = () => {
    const [cardActive,setCardActive]=useState(false)
    const cardItem=['🍇','🍉','🍏','🪙']
    const [renderItems,setRenderItems]=useState([])
    const handleClick=()=>{
        setCardActive(!cardActive)
    }
    // useEffect(
    //     setRenderItems([cardItem[Math.floor(Math.random()*4)]]),[]
    // )
  return (
    <div>
       <h1 style={{fontFamily:'Monument',textAlign:'center'}}>Two Flips</h1> 
       
        <div className="container">
            <div id='cardA' onClick={handleClick} style={{fontSize:'60px'}}>{cardActive?cardItem[Math.floor(Math.random()*4)]:''}</div>
            <div id='cardA' onClick={handleClick} style={{fontSize:'60px'}}>{cardActive?cardItem[Math.floor(Math.random()*4)]:''}</div>
            <div id='cardA' onClick={handleClick} style={{fontSize:'60px'}}>{cardActive?cardItem[Math.floor(Math.random()*4)]:''}</div>
            <div id='cardA' onClick={handleClick} style={{fontSize:'60px'}}>{cardActive?cardItem[Math.floor(Math.random()*4)]:''}</div>
            <div id='cardA' onClick={handleClick} style={{fontSize:'60px'}}>{cardActive?cardItem[Math.floor(Math.random()*4)]:''}</div>
            <div id='cardA' onClick={handleClick} style={{fontSize:'60px'}}>{cardActive?cardItem[Math.floor(Math.random()*4)]:''}</div>
            <div id='cardA' onClick={handleClick} style={{fontSize:'60px'}}>{cardActive?cardItem[Math.floor(Math.random()*4)]:''}</div>
           
            
          
        </div>
    </div>
  )
}

export default TwoFlips