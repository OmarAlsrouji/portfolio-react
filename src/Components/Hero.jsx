import React from 'react'
import pfp from '../assets/omar-pfp.jpg'
import { motion } from  "framer-motion"

const container = (delay) => ({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay},
    },
});

const Hero = () => {
  return (
    <div className='border-b pl-5 pr-5 pb-20 border-neutral-900 lg:mb-35'>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col item-center lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Omar Alsrouji</motion.h1>
            <motion.span variants={container(0.3)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-light text-transparent text-4xl">Computer Engineer</motion.span>
            <motion.p variants={container(0.5)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-lighter">I am a highly motivated Computer Engineer with expertise in embedded system software, digital hardware design, and software development. Graduated with high honors and a CGPA of 3.86. Proficient in C/C++, C#/.NET, C#/WPF, Python, and web technologies (HTML, CSS, JS, React, Bootstrap, Tailwind). Strong skills in Verilog and RISC-V architecture, with a proven track record in managing projects and meeting deadlines. Excellent communicator and team player, seeking to contribute to innovative projects within a dynamic organization.</motion.p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img width={500} className='rounded' initial={{x:100,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1,delay:0.8}} src={pfp} alt="profilepic"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
