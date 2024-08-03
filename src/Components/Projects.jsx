import React from 'react'
import pfp from '../assets/riscv.png'
import drone from '../assets/drone.jpg'
import {motion} from "framer-motion"
import portfolio from '../assets/portfolio.png'
import clock from '../assets/clock.png'
import robot from '../assets/robot.jpg'
import bcd from '../assets/bcd.png'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Projects</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full lg:w-1/4">
                <img className='mb-6 rounded' src={pfp} width={150} height={150} alt="1111" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ">
                <h6 className='mb-2 font-semibold'>RISCV32-IMAFB / As part of the Chip Design Teknofest Competition</h6>
                <p className='mb-4 text-neutral-400'>Designed and implemented a 5-stage-pipeline RISCV 32 bit processor with IMAFB extensions, with proper floor-planning and verification using synopsis IC compiler, the processor can be printed to a SoC (System on chip)</p>
                <a href='https://cdn.t3kys.com/media/upload/user_form_upload/2024/7/19/1gJvWbqsDsnZkfrIuptmIa2FlSxnzSYV.pdf'><span className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white-800'>Learn More</span></a>
                <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>RISC-V</motion.span>
                <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Computer Architecture</motion.span>
                <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Chip design</motion.span>
                <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Verilog</motion.span>
            </div>            
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full mt-3 lg:w-1/4">
                <img className='mb-6 rounded' src={drone} width={150} height={150} alt="1111" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ">
                <h6 className='mb-2 font-semibold'>Quadcopter Drone / As a graduation project and part of the Agricultural Technologies Teknofest Competition</h6>
                <p className='mb-4 text-neutral-400'>Designed and implemented a 5-stage-pipeline RISCV 32 bit processor with IMAFB extensions, with proper floor-planning and verification using synopsis IC compiler, the processor can be printed to a SoC (System on chip)</p>
                         
                 <div className='flex flex-row flex-wrap'>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 '><a href='https://cdn.t3kys.com/media/upload/user_form_upload/2024/6/25/JTQGCqSdTuK93nvNc4u7bRDMQPDlHwgL.pdf'><span className=' rounded bg-neutral-900 text-sm font-medium text-white-800'>Learn More</span></a>   </motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C++</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.9}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Embedded Systems</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.1}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>IoT</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.3}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Electronics</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Control Systems</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Communication protocols</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Team work / Management</motion.span></div>
                    
                    </div>
            </div>            
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full mt-3 lg:w-1/4">
                <img className='mb-6 rounded' src={robot} width={150} height={150} alt="1111" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ">
                <h6 className='mb-2 font-semibold'>Target Shooting Robot</h6>
                <p className='mb-4 text-neutral-400'>Building, configuring and coding a fully-functional Target shooting robot, where forward/inverse kinematics were calculated as to ensure precise action.</p>
                
                <div className='flex flex-row flex-wrap'>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 '><a href='https://github.com/OmarAlsrouji/robotics-project'><span className=' rounded bg-neutral-900 text-sm font-medium text-white-800'>Learn More</span></a>   </motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C++</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.9}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Embedded Systems</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.1}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C#/.NET</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.3}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Electronics</motion.span></div>
                    
                </div>
            </div>            
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full mt-3 lg:w-1/4">
                <img className='mb-6 rounded' src={bcd} width={150} height={150} alt="1111" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ">
                <h6 className='mb-2 font-semibold'>BCD-Up Counter</h6>
                <p className='mb-4 text-neutral-400'>Designing, configuring and testing an electronic circuit that uses Integrated circuits to perform digital counting.</p>
                
                <div className='flex flex-row flex-wrap'>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 '><a href='https://docs.google.com/document/d/1J5tab9VdjdRsdL63dD-iNdE-TuMqsmlgk4bWE9JQ8Zw/edit'><span className=' rounded bg-neutral-900 text-sm font-medium text-white-800'>Learn More</span></a>   </motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Electronics</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.9}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Analog circuits</motion.span></div>
                    
                </div>
            </div>
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full mt-3 lg:w-1/4">
                <img className='mb-6 rounded' src={portfolio} width={150} height={150} alt="1111" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ">
                <h6 className='mb-2 font-semibold'>Portfolio</h6>
                <p className='mb-4 text-neutral-400'>Designed, implemented and deployed a Portfolio with React and Tailwind. The website has animations and a dynamic background.</p>
                <div className='flex flex-row flex-wrap'>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 '><a href='#'><span className=' rounded bg-neutral-900 text-sm font-medium text-white-800'>Learn More</span></a>   </motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>ReactJS</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.9}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Tailwind</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.1}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Web development</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.3}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Frontend Development</motion.span></div>
                    
                </div>
                
            </div>            
        </motion.div>
        <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full mt-3 lg:w-1/4">
                <img className='mb-6 rounded' src={clock} width={150} height={150} alt="1111" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ">
                <h6 className='mb-2 font-semibold'>Business Website</h6>
                <p className='mb-4 text-neutral-400'>Designed, implemented and deployed a fully responsive website for a local business in Dubai using HTML, CSS, Javascript and Bootstrap. The website is user-friendly and consice, where the customer is able to conveniently reach the contact, location, services provided by the business and information about the business.</p>
                <div className='flex flex-row flex-wrap'>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 '><a href='https://clockandlockservices.com/'><span className=' rounded bg-neutral-900 text-sm font-medium text-white-800'>Learn More</span></a>   </motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>HTML</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.9}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>CSS</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.1}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Javascript</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.1}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Bootstrap</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.3}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Frontend Development</motion.span></div>
                    
                </div>
            </div>            
        </motion.div>
    </div>
  )
}

export default Projects
