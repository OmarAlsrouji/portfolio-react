import React from 'react'
import pfp from '../assets/kevinRushProfile.png'
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
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col item-center lg:items-start">
            <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Omar Alsrouji</motion.h1>
            <motion.span variants={container(0.3)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-light text-transparent">Computer Engineer</motion.span>
            <motion.p variants={container(0.5)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-lighter">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero molestiae at repellat maiores excepturi animi debitis, eius cum tempore sapiente odio id consequuntur deleniti inventore optio, sint praesentium omnis cupiditate ducimus veniam enim provident iusto. Eos non placeat quas iusto!</motion.p>
        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img initial={{x:100,opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1,delay:0.8}} src={pfp} alt="profilepic"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
