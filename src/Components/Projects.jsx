import React from 'react'
import pfp from '../assets/kevinRushProfile.png'
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Projects</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full lg:w-1/4">
                <img className='mb-6 rounded' src={pfp} width={150} height={150} alt="1111" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 my-3">
                <h6 className='mb-2 font-semibold'>title</h6>
                <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam obcaecati blanditiis quam. Aperiam, non cum. Sit sint totam ipsum ullam.</p>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>C++</span>
            </div>            
        </motion.div>

        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full lg:w-1/4">
                <img className='mb-6 rounded' src={pfp} width={150} height={150} alt="1111" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 my-3">
                <h6 className='mb-2 font-semibold'>title</h6>
                <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam obcaecati blanditiis quam. Aperiam, non cum. Sit sint totam ipsum ullam.</p>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>C++</span>
            </div>            
        </motion.div>

        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.9}} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full lg:w-1/4">
                <img className='mb-6 rounded' src={pfp} width={150} height={150} alt="1111" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 my-3">
                <h6 className='mb-2 font-semibold'>title</h6>
                <p className='mb-4 text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam obcaecati blanditiis quam. Aperiam, non cum. Sit sint totam ipsum ullam.</p>
                <span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>C++</span>
            </div>            
        </motion.div>

              
    </div>
  )
}

export default Projects
