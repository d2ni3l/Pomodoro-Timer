import React from 'react'
import { useState, useEffect } from 'react';

function Timer() {
  // const [minutes, setMinutes] = useState(0)
  // const [seconds, setSeconds] = useState(0)


  //   var timer;
  // useEffect(() => {
  //   timer = setInterval(() => {
  //     setSeconds(seconds - 1)

  //     if(seconds === 0){
  //       setMinutes(minutes - 1)
  //       setSeconds(59)
  //     }
  //     if(seconds === 0 && minutes === 0){
  //       setMinutes(0)
  //       setSeconds(0)
        
  //     }

      
      
  //   }, 1000);


  // return() => clearInterval(timer);
  // })

  // useEffect(() => {
  //   if(seconds === 0 && minutes === 0){
  //     setSeconds(0)
  //     alert('timer is done')
  //   }
  //   return() => clearInterval(timer);


  // }, [seconds])


  
  return (
    <div><h1>Timer</h1>
       <h2>{minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}</h2>
       <button onClick={() => {setMinutes(0); setSeconds(0)}}>Restart</button>
       <button onClick={() => {clearInterval(timer)}}>Stop</button>
       <button onClick={() => {setMinutes (5)}}>5 min</button> 
    </div>

  )
}

export default Timer