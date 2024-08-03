import React from 'react'
// import {EducationS} from "../Components/constants"
import {motion} from "framer-motion"
const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className='my-20 text-center text-4xl'>Education & Courses</motion.h2>    
        <div>
            <div className="mb-8 flex flex-wrap lg:justify-center flex-col ">
                
                <div className="w-full max-w-xl lg:w-3/4 my-5 mx-auto ">
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}className="w-full">
                        <p className="mb-2 text-sm text-neutral-400">2020 - 2024</p>
                    </motion.div>
                    <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="mb-2 font-semibold">
                    Üsküdar University  - <span className='text-sm text-purple-100 '>Bachelor of Science & Engineering in Computer Engineering</span>
                    </motion.h6>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="mb-4 text-neutral-400">
                        
                    <span className='font-bold'>Graduated with high honours as a top student in my class with a CGPA of 3.86</span><br/>
                    During my Bachelor’s program, I gained a comprehensive foundation in both theoretical and practical aspects of computer engineering. Key skills and knowledge acquired include:<br/><br/>
                    <span className='font-bold'>Programming Proficiency</span>: Mastery of multiple programming languages, including C/C++, C#/.NET and Python.<br/>
                    - <span className='font-bold'>Embedded Systems & Microprocessors</span>: Design and development of embedded systems and real-time applications, I applied my knowledge in Embedded Systems and IoT to develop a <span className='font-bold'>Quadcopter</span>, in addition to in-depth understanding of microprocessor architectures, including RISC-V and x86, and assembly language programming.<br/>                
                    - <span className='font-bold'>Software Development</span>: Strong grasp of software development life cycles, software engineering principles, and methodologies such as Agile and Scrum.<br/>
                    - <span className='font-bold'>Electronics</span>: Knowledge of electronic circuit design, analysis, and troubleshooting, including working with analog and digital components.<br/>
                    - <span className='font-bold'>Computer Networks</span>: Understanding of network protocols, design, and security principles.<br/>
                    - <span className='font-bold'>Research</span>: Experience in conducting research, analyzing data, and applying findings to practical engineering problems, where I wrote research papers for Optimization Techniques, a RISCV processor and an IoT Underwater system<br/>
                    - <span className='font-bold'>Project Management</span>: Skills in project planning, execution, and management, with a focus on meeting deadlines and delivering high-quality work, where I led my graduation project team and several other compulsory courses.<br/>
                    - <span className='font-bold'>Team Collaboration</span>: Experience in collaborative team projects, fostering strong communication and teamwork abilities.                                        
                    </motion.p>
                    <div className='flex flex-row flex-wrap'>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C++/C</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.9}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Python</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.1}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>DBMS</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.3}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Electronics</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.5}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Python - AI</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Python - Data science</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.9}} 
                    className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>C#/.NET</motion.span ></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:2}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Networks</motion.span ></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:2}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800 '>Software Development</motion.span ></div>

                    </div>
                    
                </div>

                
                <div className="w-full max-w-xl lg:w-3/4 my-5 mx-auto ">
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}className="w-full">
                        <p className="mb-2 text-sm text-neutral-400">March 2023</p>
                    </motion.div>
                    <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="mb-2 font-semibold">
                    HTML, CSS, and Javascript for Web Developers  - <span className='text-sm text-purple-100 '>Coursera</span>
                    </motion.h6>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="mb-4 text-neutral-400">coursera.org/verify/DLWZNCALZE38.                    
                    </motion.p>
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>HTML5</motion.span >
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>CSS</motion.span >
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Javascript</motion.span >
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Bootstrap</motion.span >
                </div>

                <div className="w-full max-w-xl lg:w-3/4 my-5 mx-auto ">
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}className="w-full">
                        <p className="mb-2 text-sm text-neutral-400">May 2023</p>
                    </motion.div>
                    <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="mb-2 font-semibold">
                    Digital design & Computer Architecture Course  - <span className='text-sm text-purple-100 '>ETH Zürich University by Dr.Onur Mutlu</span>
                    </motion.h6>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="mb-4 text-neutral-400">Finished the online course with labs.
                    </motion.p>
                    

                    <div className='flex flex-row flex-wrap'>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Computer Architecture</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.9}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Digital Design</motion.span></div>
                    <div className="mb-2"><motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1.1}} className='mr-2  mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Verilog</motion.span></div>
                    

                    </div>
                </div>
                <div className="w-full max-w-xl lg:w-3/4 my-5 mx-auto ">
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}className="w-full">
                        <p className="mb-2 text-sm text-neutral-400">July 2023</p>
                    </motion.div>
                    <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="mb-2 font-semibold">
                    Mastering Microcontroller and Embedded Driver Development  - <span className='text-sm text-purple-100 '>Udemy</span>
                    </motion.h6>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="mb-4 text-neutral-400">Acquired experience in driver development with STM32.
                    </motion.p>
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Embedded C</motion.span >
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>STM32</motion.span >
                    
                </div>
                <div className="w-full max-w-xl lg:w-3/4 my-5 mx-auto ">
                    <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}className="w-full">
                        <p className="mb-2 text-sm text-neutral-400">June 2023</p>
                    </motion.div>
                    <motion.h6 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}}  className="mb-2 font-semibold">
                    Hardware Modeling using Verilog  - <span className='text-sm text-purple-100 '> NPTEL Online academy</span>
                    </motion.h6>
                    <motion.p whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="mb-4 text-neutral-400">Acquired great experience in Verilog coding.
                    </motion.p>
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Digital Design</motion.span >
                    <motion.span whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800'>Verilog</motion.span >
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Education
