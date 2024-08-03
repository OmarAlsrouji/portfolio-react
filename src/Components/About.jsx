import aboutImg from "../assets/omar-about.jpg"
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg">
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className="flex items-center justify-center">
                <img className="rounded-2xl" width={350} src={aboutImg} alt="abotutimg" />
            </motion.div>            
        </div>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-center">
                    <p className="max-w-xl py-10">I am a Computer Engineer who is committed to delivering high-impact solutions through expertise in several fields in tech, including embedded systems, digital hardware design, and software development. With a strong foundation in modern programming languages and technologies, I thrive in fast-paced environments and excel in problem-solving and project management, my participation in many group projects enabled me to succeed in team environments, and my research works equipped me with the ability to learn new skills and adapt to new frameworks faster.
                        <br/>
                        <br/>
                    <ul className="list-disc">
                    <li className="indent-1"><span className="font-bold">Innovation:</span> Bringing fresh perspectives and creative problem-solving to every project.</li>
                    <li className="indent-1"><span className="font-bold">Technical Expertise:</span> Proficient in C/C++, C#/.NET, C#/WPF, Python, and web technologies like React, Bootstrap, and Tailwind. </li>
                    <li className="indent-1"><span className="font-bold">Collaboration:</span>A team player with excellent communication skills, fostering collaboration and driving project success.</li>
                    <li className="indent-1"><span className="font-bold">Reliability:</span> Proven track record of managing projects efficiently and meeting deadlines consistently.</li>
                    <li className="indent-1"><span className="font-bold">Continuous Learning:</span> Passionate about staying updated with the latest industry trends and technologies.</li>  
                    </ul>
                    </p>
                </div>
            </motion.div>
      </div>
    </div>
  )
}

export default About
