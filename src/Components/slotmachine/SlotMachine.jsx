    import React, { useState } from 'react'

    const SlotMachine = () => {
        const style={fontSize:'40px'}
        const slot=['🍒','🍉','🤑','🍀']
        const [slot1,setSlot1]=useState('')
        const [slot2,setSlot2]=useState('')
        const [slot3,setSlot3]=useState('')
        const [result,setResult]=useState('')
        const [score,setScore]=useState(0)
        const handleClick=()=>{
            const slota=slot[Math.floor(Math.random()*4)]
            const slotb=slot[Math.floor(Math.random()*4)]
            const slotc=slot[Math.floor(Math.random()*4)]
            setSlot1(slota)
            setSlot2(slotb)
            setSlot3(slotc)
            if((slota===slotb) &&(slotb===slotc)){
                setResult('win')
                setScore(score+1)
            }
            else{
                setResult('lose')
            }
        }
    return (
        
            <div className='nothing' style={{fontFamily:'monument'}}><h1>SlotMachine 🎰</h1>
        <span style={style}>{slot1 ||'❓'}</span>
        <span style={style}>{slot2 ||'❓'}</span>
        <span style={style}>{slot3||'❓'}</span> <br /> <br />
        <button style={{fontFamily:'henny penny',padding:'5px 30px',fontSize:'20px',textDecoration:'none'}} onClick={handleClick}>Pull</button>
        {result && <div>
            <h2>{result==='win '?'You win':'Try again'}</h2>
            </div>}
        <h2 >Score:{score}</h2>
        </div>
        
    )
    }

    export default SlotMachine