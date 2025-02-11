import React from 'react'
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className="my-10 text-center text-4xl">Get in Touch</motion.h2>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="text-center tracking-tighter">
        <p className="my-4">Dubai, UAE</p>
        <a href='tel:+971566429744'><p className="my-4">+971566429744</p></a>
        <a href="mailto:Omarmounther20@gmail.com" className="border-b">Omarmounther20@gmail.com</a>
      </motion.div>
    </div>
  )
}

export default Contact
