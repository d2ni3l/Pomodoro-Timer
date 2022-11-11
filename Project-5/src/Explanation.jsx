import React from 'react'
import Footer from './Footer'

function Explanation() {
  return (
    <div>
        <div className='border-t-[1.3px] border-base-content mt-[12<.1rem]'></div>
        <section className='mx-7 mt-[5rem] max-w-[630px]'>
            <h2 className='font-extrabold leading-6 text-secondary text-2xl tracking-wider md:text-center md:text-3xl'>An Online Pomodoro Timer to boost your productivity</h2>
            <h3 className='pt-16 text-secondary font-semibold text-xl md:text-2xl tracking-wide afterh3 after:border-b-[.4rem] after:border-primary'>What is PomoTimer?</h3>
            <p className='pt-6 text-lg  pb-16 '>
            pomodoro timer is a timer that works on desktop & mobile browser. The aim of this app is to help you focus on any task you are working on, such as study, writing, or coding. This app is inspired by Pomodoro Technique which is a time management method developed by Francesco Cirillo.
            </p>
            <div></div>
            <h3 className='text-secondary font-semibold text-xl md:text-2xl tracking-wide afterh3 after:border-b-[.4rem] after:border-primary'>What is Pomodoro Technique</h3>
            <p className='pt-6 text-lg  pb-16'>The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work and study. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as a university student. - <span className='text-primary'><a target="_blank" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Wikipedia</a></span></p>
            <div></div>
            <h3 className='text-secondary font-semibold text-xl md:text-2xl tracking-wide afterh3 after:border-b-[.4rem] after:border-primary pb-6'>How to use Pomodoro Timer?</h3>
            <ol>
                   
                    <li className='flex gap-1 text-lg  tracking-[.3px]'><p> <span className='font-bold '>Select a task</span> to work on today</p></li>
                    <li className='flex gap-1 text-lg  tracking-[.3px]'> <p> <span className='font-bold '>Set estimate pomodoros</span> (1 = 25min of work) for each tasks</p></li>
                    <li className='flex gap-1 text-lg  tracking-[.3px]'><p> <span className='font-bold '>Start timer</span> and focus on the task for 25 minutes</p></li>
                    <li className='flex gap-1 text-lg  tracking-[.3px]'><p> <span className='font-bold '>Take a break</span>  for 5 minutes when the alarm ring</p></li>
                    <li className='flex gap-1 text-lg  tracking-[.3px]'><p> <span className='font-bold '>Iterate</span>  3-5 until you finish the tasks</p></li>
                
            </ol>
        </section>
        <Footer/>
    </div>
  )
}

export default Explanation