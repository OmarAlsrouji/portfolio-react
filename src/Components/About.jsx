import aboutImg from "../assets/about.jpg"
import {motion} from "framer-motion"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg">
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.5}} className="flex items-center justify-center">
                <img className="rounded-2xl" src={aboutImg} alt="abotutimg" />
            </motion.div>            
        </div>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-center">
                    <p className="mt-20 max-w-xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus rerum nulla nesciunt numquam, eos nihil quam vero assumenda earum molestias nisi eligendi impedit tempora repudiandae nobis harum alias id libero asperiores velit. Enim ducimus debitis dolorum quod totam facilis vero, cupiditate exercitationem ullam, iusto laboriosam magnam. Iure vel ea nesciunt temporibus a illo accusamus autem amet repudiandae quis laboriosam nisi ipsa tenetur, aut ad suscipit eveniet quas? In iste soluta dolorum magni, vitae minima explicabo expedita itaque magnam. Unde numquam corporis eligendi ad labore incidunt fuga odio praesentium, culpa, magni rerum consectetur soluta necessitatibus ea cum? Voluptates modi natus eos reiciendis! Eaque, sapiente nihil maxime itaque illum motion.iusto blanditiis voluptatibus. Illum exercitationem</p>
                </div>
            </motion.div>
      </div>
    </div>
  )
}

export default About
