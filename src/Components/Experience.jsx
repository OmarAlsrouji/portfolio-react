import React from 'react'
// import {EXPERIENCES} from "../Components/constants"
import {motion} from "framer-motion"
const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Experience</motion.h2>    
        <div>
            <div className="mb-8 flex flex-wrap lg:justify-center flex-col ">
                
                <div className="w-full max-w-xl lg:w-3/4 my-5 mx-auto ">
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">2023</p>
                    </motion.div>
                    <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="mb-2 font-semibold">
                        digital design - <span className='text-sm text-purple-100 '>riscv</span>
                    </motion.h6>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="mb-4 text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod odio, inventore non tempora sed architecto accusantium. Quasi, ex possimus?</motion.p>
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C++</motion.span >
                </div>

                
                <div className="w-full max-w-xl lg:w-3/4 my-5 mx-auto ">
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">2023</p>
                    </motion.div>
                    <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="mb-2 font-semibold">
                        digital design - <span className='text-sm text-purple-100 '>riscv</span>
                    </motion.h6>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="mb-4 text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod odio, inventore non tempora sed architecto accusantium. Quasi, ex possimus?</motion.p>
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C++</motion.span >
                </div>

                
                <div className="w-full max-w-xl lg:w-3/4 my-5 mx-auto ">
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">2023</p>
                    </motion.div>
                    <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="mb-2 font-semibold">
                        digital design - <span className='text-sm text-purple-100 '>riscv</span>
                    </motion.h6>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="mb-4 text-neutral-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quod odio, inventore non tempora sed architecto accusantium. Quasi, ex possimus?</motion.p>
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C++</motion.span >
                </div>


                
            </div>
        </div>
    </div>
  )
}

export default Experience
