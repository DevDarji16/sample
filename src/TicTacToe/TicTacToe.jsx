import React, { useState } from 'react';

import './TicTacToe.css';

const TicTacToe = ({ tscore, setTScore }) => {
    const [data,setData]=useState(['','','','','','','','',''])
   const [count,setCount]=useState(0)
   const [lock,setLock]=useState(true)

    const handleClick=(e,num)=>{
        if(data[num]!==' ') return 0
        if(count%2===0){
            e.target.innerHTML='❌'
            data[num]='x'
        }
        else{
            e.target.innerHTML='⭕'
             data[num]='o'
        }
        setCount(count+1)
        
    }
    return(
        <>
        <div id='title'><h1 style={{fontFamily:'monument',textAlign:'center'}}>Tic Tac Toe</h1></div>
        <div id='container'>

            <div id='row1'>
            <div id='boxes' onClick={(e)=>handleClick(e,0)}></div>
            <div id='boxes' onClick={(e)=>handleClick(e,1)}></div>
            <div id='boxes' onClick={(e)=>handleClick(e,2)}></div>
           
        </div>
        <div id='row2'>
            <div id='boxes' onClick={(e)=>handleClick(e,3)}></div>
            <div id='boxes' onClick={(e)=>handleClick(e,4)}></div>
            <div id='boxes' onClick={(e)=>handleClick(e,5)}></div>
        </div>
        <div id='row3'>
            <div id='boxes' onClick={(e)=>handleClick(e,6)}></div>
            <div id='boxes' onClick={(e)=>handleClick(e,7)}></div>
            <div id='boxes' onClick={(e)=>handleClick(e,8)}></div>
        </div> 
        </div>
        
        </>
    )
};

export default TicTacToe;
