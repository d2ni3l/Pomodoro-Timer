import React from 'react'

function Navbar({setTheme}) {
  return (
    <>
    <nav className="pb-3 pt-5  flex mx-3 sm:mx-6  lg:mx-32 justify-between" >
      <a href="#" aria-current="page" aria-label="Homepage" className="  flex-0 btn btn-ghost rounded-- px-2"><div className="font-bold rounded-- text-primary inline-flex  transition-all duration-200 md:text-3xl"><span className="capitalize text-[1.6rem]">Pomodoro</span> <span className="text-base-content capitalize text-[1.6rem] ">Timer</span></div></a>
      <div  className="dropdown dropdown-bottom dropdown-end">
      <div style={{borderRadius: '8px'}} tabIndex="0" className="btn gap-1 normal-case btn-ghost"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg> <span className="hidden md:inline">Theme</span> <svg width="12px" height="12px" className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg></div>
      <ul tabIndex={0}  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 gap-2">
      <li><button style={{borderRadius: '8px'}} onClick={() => {setTheme('night')}} className='btn bg-[#0f1729] hover:bg-[#0f1729]'><h1 className='text-[#3abff8] tracking-wider '>Night (default)</h1></button></li>
    <li><button style={{borderRadius: '8px'}} onClick={() => {setTheme('forest')}} className='btn round  bg-[#171212] hover:bg-[#171212]'><h1 className='text-[#1eb854] tracking-wider '>Forest</h1></button></li>
    <li><button style={{borderRadius: '8px'}} onClick={() => {setTheme('halloween')}} className='btn bg-[#212121] hover:bg-[#212121]'><h1 className='text-[#f28c18] tracking-wider '>Halloween</h1></button></li>
    <li><button style={{borderRadius: '8px'}} onClick={() => {setTheme('coffee')}} className='btn bg-[#211720] hover:bg-[#211720]'><h1 className='text-[#dc944c] tracking-wider '>Coffee</h1></button></li>
    <li><button style={{borderRadius: '8px'}} onClick={() => {setTheme('business')}} className='btn bg-[#212121] hover:bg-[#212121]'><h1 className='text-[#1c4f82] tracking-wider '>Business</h1></button></li>
    <li><button style={{borderRadius: '8px'}} onClick={() => {setTheme('winter')}} className='btn bg-[#fff] hover:bg-[#fff]'><h1 className='text-[#057aff] tracking-wider '>Light</h1></button></li>
    
  </ul>
</div>
     </nav>
     <div className="border-b border-base-content"></div>
     </>
  )
}

export default Navbar