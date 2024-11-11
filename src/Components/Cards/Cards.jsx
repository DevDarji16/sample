import React from 'react'

const Cards = () => {
  return (
    <div>
        <div className='Cards' style={{display:'flex'}}>
            <div className='slotmachine' style={{height:'320px',backgroundColor:'gray' ,margin:'10px'  }}>
                <img src="https://i.postimg.cc/7Z50rsqj/Slotmachine.jpg" alt="" style={{height:'200px'}}/>
                <h1 style={{display:'flex',justifyContent:'center',fontFamily:'monument'}}>Slot Game</h1>
                <p style={{display:'flex',justifyContent:'center',fontFamily:'monument',color:'pink'}}>Click to play</p>
            </div>
            <div className='DiceGame'>
                <img src="https://i.postimg.cc/7Z50rsqj/Slotmachine.jpg" alt="" style={{height:'200px',margin:'10px'}}/>
                </div>
        </div>
    </div>
  )
}

export default Cards