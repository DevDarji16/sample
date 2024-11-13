import React, { useState ,useEffect} from 'react'

const RockPaper = ({tscore,setTScore}) => {
  const rps=['✊','✌️','✋']
  const [score,setScore]=useState(0)
  const [compare,setCompare]=useState(null)
  const [random,setRandom]=useState(null)
  const [result,setResult]=useState(null)
  const randomGenerator=()=>{
    const random=Math.floor(Math.random()*3)
    return random
  }
  const handleClick=(a)=>{
   setRandom(randomGenerator())
   setCompare(a)
  
  }
  useEffect(() => {
    if (compare !== null && random !== null) {
      handleResult();
    }
  }, [compare, random]);
  const handleResult=()=>{
    if((compare==='rock' && random===0)||(compare==='scissor' && random===1)||(compare==='paper' && random===2)){
      setResult('Draw')
    }
    else if((compare==='rock'&&random===1)||(compare==='scissor'&&random===2)||(compare==='paper'&&random===0)){
      setScore(score+1)
      setTScore(tscore+1)
      setResult('You win')
    }
    else{
      setResult('You lose')
    }
  }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:''}}>
        <div style={{textAlign:'center'}}>

    <h1 style={{fontFamily:'monument',fontSize:'100px'}}>{random!==null?rps[random]:''}</h1>
      
    <h1 style={{fontFamily:'monument'}}>{result}</h1>

      <h1 style={{fontFamily:'monument'}}>Press on any of the three</h1>
      <div style={{display:'flex',gap:'20px'}}>
      <div onClick={()=>handleClick('rock')} className='rock' style={{borderRadius:'20px',backgroundColor:'#313131',width:'200px',fontSize:'100px',height:'200px',display:'flex',justifyContent:'center',alignItems:'center',userSelect:'none'}}>✊</div>
      <div onClick={()=>handleClick('scissor')} className='scissor' style={{borderRadius:'20px',backgroundColor:'#313131',width:'200px',fontSize:'100px',height:'200px',display:'flex',justifyContent:'center',alignItems:'center',userSelect:'none'}}>✌️</div>
      <div onClick={()=>handleClick('paper')} className='paper' style={{borderRadius:'20px',backgroundColor:'#313131',width:'200px',fontSize:'100px',height:'200px',display:'flex',justifyContent:'center',alignItems:'center',userSelect:'none'}}>✋</div>
      </div>
      
      <h1 style={{fontFamily:'monument'}}>Score:{score}</h1>
      
    </div></div>
  )
}

export default RockPaper