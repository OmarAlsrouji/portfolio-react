import {RiReactjsLine} from "react-icons/ri"
import {animate, motion} from "framer-motion"

const icon_variants = (duration) => ({
    initial: {y:-10},
    animate: {
        y:[10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className="text-center text-4xl my-10">
        Technologies
      </motion.h1>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.8}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={icon_variants(2.4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={icon_variants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={icon_variants(3.4)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={icon_variants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
