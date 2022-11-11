import { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar';
import TimerEnd from './assets/TimerEnd.wav'
import logo from './assets/react.svg'
import Explanation from './Explanation';


const STATUS = {
  STARTED: 'Started',
  STOPPED: 'Stopped',
}
function App() {
  const [play, setPlay] = useState(true)
  const [setting, setSetting] = useState(false)
  const [initialCount, setInitialCount] = useState(1500)
  const [secondsRemaining, setSecondsRemaining] = useState(initialCount)
  const [status, setStatus] = useState(STATUS.STOPPED)
  const secondsToDisplay = secondsRemaining % 60
  const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
  const minutesToDisplay = minutesRemaining % 60
  const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60
  const [percentage, setPercentage] = useState(1)
  const [rotate, setRotate] = useState('')
  const [theme, setTheme] = useState('night')

  const handleStart = () => {
    setStatus(STATUS.STARTED)
  }
  const handleStop = () => {
    setStatus(STATUS.STOPPED)
  }
  const handleReset = () => {
    setStatus(STATUS.STOPPED)
    setSecondsRemaining(1500)
  }


  useInterval(
    () => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1)
        
      } else {
        setStatus(STATUS.STOPPED)
      }
    },
    status === STATUS.STARTED ? 1000 : null,
    // passing null stops the interval
  )
  const audio = new Audio;
  audio.src = TimerEnd

  useEffect(() => {
    if(secondsRemaining === 0){
      console.log('timer done')
      audio.play()
      setTimeout(document.title = "Time's up", 300000)
    }
  },[secondsRemaining])


  
  useEffect(() => {
   
    if(initialCount === 1500){
      setInterval(() => {
      setPercentage((curr) => {
        curr+5
      })
      }, 100)
    }
    
    console.log(percentage)
  }, [secondsRemaining])

  return (
    <div className="App">

      <div className="App min-h-[100vh] pb-10" data-theme={theme} >
     <Navbar setTheme={setTheme}/>

     <main className='flex flex-col items-center justify-center  pt-24'>
      <div className='pt-12'>

       <div className='w-full flex justify-center mb-12'>
        {/* <img src={logo} className={`${rotate} w-24 md:w-32`} alt="" /> */}
        <svg className={`${rotate} w-24 md:w-32 fill-primary`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>
       </div>

      <span style={{fontWeight:500}} className="countdown font-mono text-5xl  md:text-8xl">
        <span style={{"--value":twoDigits(minutesToDisplay)}}></span>:
        <span style={{"--value":twoDigits(secondsToDisplay)}}></span>
      </span>
      </div>
       <div className=' mt-32 flex gap-6' >        
        {
          play ?
          <button onClick={() => {setPlay(false); handleStart(); setRotate('rotate') }} className='p-5 btn w-16 h-16 cursor-pointer rounded-full tooltip  tooltip-left bg-primary-content grid place-items-center focus:brightness-[1.2]' data-tip='play'>
          <svg className='w-6  h-6 fill-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
          </button> 
          : 
          <button onClick={() => { setPlay(true); handleStop(); setRotate('boh')  }} className='tooltip btn w-16 h-16 p-5 cursor-pointer rounded-full tooltip-left  bg-primary-content flex justify-center items-center focus:brightness-[1.2]' data-tip='pause'>
          <svg className='w-6 h-6 fill-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>
        </button> 
        }
         <div className='relative'>
          {
            setting && <ul className='absolute bottom-20 -right-3 sm:right-0 gap-3 flex'>
            <li> <button onClick={() => {setSetting(!setting); setSecondsRemaining(900)}} className='w-[4.4rem] h-[4.4rem] btn cursor-pointer rounded-full bg-primary-content grid place-items-center focus:brightness-[1.2]'><h3 className='text-lg px-1 font-semibold flex flex-col'><span className="pt-2">15</span> <span className='text-[.7rem] -mt-2 tracking-wider'>mins</span></h3></button></li>
            <li> <button onClick={() => {setSetting(!setting); setSecondsRemaining(1800)}} className='w-[4.4rem] h-[4.4rem] btn cursor-pointer rounded-full bg-primary-content grid place-items-center focus:brightness-[1.2]'><h3 className='text-lg px-1 font-semibold flex flex-col'><span className="pt-2">30</span> <span className='text-[.7rem] -mt-2 tracking-wider'>mins</span></h3></button></li>
            <li> <button onClick={() => {setSetting(!setting); setSecondsRemaining(2700)}} className='w-[4.4rem] h-[4.4rem] btn cursor-pointer rounded-full bg-primary-content grid place-items-center focus:brightness-[1.2]'><h3 className='text-lg px-1 font-semibold flex flex-col'><span className="pt-2">45</span> <span className='text-[.7rem] -mt-2 tracking-wider'>mins</span></h3></button></li>
          </ul>
          }
        <button onClick={() => {setSetting(!setting)}} data-tip='Settings' className='tooltip h-16 w-16 btn tooltip-right  p-5 cursor-pointer rounded-full bg-primary-content grid place-items-center focus:brightness-[2] '>
        <svg className='w-6  h-6 fill-primary' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 416c0-17.7 14.3-32 32-32l54.7 0c12.3-28.3 40.5-48 73.3-48s61 19.7 73.3 48L480 384c17.7 0 32 14.3 32 32s-14.3 32-32 32l-246.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 448c-17.7 0-32-14.3-32-32zm192 0c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm-32-80c32.8 0 61 19.7 73.3 48l54.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-54.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l246.7 0c12.3-28.3 40.5-48 73.3-48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32s-14.3-32-32-32zm73.3 0L480 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-214.7 0c-12.3 28.3-40.5 48-73.3 48s-61-19.7-73.3-48L32 128C14.3 128 0 113.7 0 96S14.3 64 32 64l86.7 0C131 35.7 159.2 16 192 16s61 19.7 73.3 48z"/></svg>
        </button>
        </div>
       </div>

       <Explanation/>
     </main>
    </div> 
    </div> 
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

// https://stackoverflow.com/a/2998874/1673761
const twoDigits = (num) => String(num).padStart(2, '0')

export default App;



