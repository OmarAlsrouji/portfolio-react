import {RiBootstrapFill, RiReactjsLine} from "react-icons/ri"
import {animate, motion} from "framer-motion"
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import { TbBrandCoinbase } from "react-icons/tb";
import { SiRiscv } from "react-icons/si";
import { GiProcessor } from "react-icons/gi";
import { RiFileExcel2Line } from "react-icons/ri";
import { SiStmicroelectronics } from "react-icons/si";
import { SiArduino } from "react-icons/si";


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
      <motion.div variants={icon_variants(2.4)} title="HTML5" initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-400"/>
        </motion.div>
        <motion.div variants={icon_variants(2.4)} title="CSS" initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl text-cyan-700"/>
        </motion.div>
        <motion.div variants={icon_variants(2.4)} title="JavaScript" initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-200"/>
        </motion.div>
        <motion.div variants={icon_variants(2.4)} title="React JS" initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={icon_variants(3)} title="Tailwind" initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className="text-7xl text-cyan-200"/>
        </motion.div>
        <motion.div title="Bootstrap" variants={icon_variants(3.4)} initial="initial" animate="animate"  className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaBootstrap className="text-7xl text-purple-700"/>
        </motion.div>
        <motion.div title="Python" variants={icon_variants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-yellow-400"/>
        </motion.div>
        <motion.div title="C++ language" variants={icon_variants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandCpp className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div title="C# language" variants={icon_variants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandCSharp className="text-7xl text-purple-400"/>
        </motion.div>
        <motion.div title="C language" variants={icon_variants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandCoinbase className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div title="RISCV" variants={icon_variants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiRiscv className="text-7xl"/>
        </motion.div>
        <motion.div title="Verilog hardware description language" variants={icon_variants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <GiProcessor className="text-7xl"/>
        </motion.div>
        
        <motion.div title="STM32" variants={icon_variants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiStmicroelectronics className="text-7xl text-blue-900"/>
        </motion.div>
        <motion.div title="Arduino" variants={icon_variants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiArduino className="text-7xl text-cyan-300"/>
        </motion.div>

        <motion.div title="Excel" variants={icon_variants(3.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiFileExcel2Line className="text-7xl text-green-700"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
