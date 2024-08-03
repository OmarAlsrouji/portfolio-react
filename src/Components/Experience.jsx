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
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}className="w-full">
                        <p className="mb-2 text-sm text-neutral-400">July 2023 - August 2023</p>
                    </motion.div>
                    <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="mb-2 font-semibold">
                        Baykar Technologies - <span className='text-sm text-purple-100 '>Embedded Software Engineering Intern</span>
                    </motion.h6>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="mb-4 text-neutral-400">
                    - Developed embedded software applications with C#/.NET to interface with hardware test devices.<br/>
                    - Created header and source files for an Integrated Circuit by translating its datasheet into C code.<br/>
                    - Learned about Instruments, technologies, Communication protocols and Microcontrollers used in defense industries.<br/>
                    Had the opportunity to work in a professional and demanding environment.<br/>
                    <div className='font-bold pt-2'><a href='https://baykartech.com/en/about/'>Learn about Baykar</a></div> 
                    </motion.p>
                    <div className='flex flex-row flex-wrap'>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C++</motion.span></div>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Embedded C</motion.span></div>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>SPI</motion.span></div>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>I2C</motion.span></div>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>CAN bus</motion.span></div>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} 
                        className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C#</motion.span ></div>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>.NET</motion.span ></div>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>WPF</motion.span ></div>
                    </div>
                                                            
                    
                </div>

                
                <div className="w-full max-w-xl lg:w-3/4 my-5 mx-auto ">
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}className="w-full">
                        <p className="mb-2 text-sm text-neutral-400">June 2024 - July 2024</p>
                    </motion.div>
                    <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="mb-2 font-semibold">
                        BrainPark Uskudar University - <span className='text-sm text-purple-100 '>Embedded Software Engineering Intern</span>
                    </motion.h6>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="mb-4 text-neutral-400">Created a library and an application for interfacing HID USB devices using the CH375 chip.</motion.p>
                    


                    <div className='flex flex-row flex-wrap'>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C++</motion.span></div>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>USB Protocol</motion.span></div>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>UART</motion.span></div>
                        <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Arduino</motion.span></div>
                        
                    </div>
                </div>            

                
            </div>
        </div>
    </div>
  )
}

export default Experience
