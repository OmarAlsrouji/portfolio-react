import logo from "../assets/omar-logo.png";
import {FaInstagram} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import {FaGithub} from "react-icons/fa"
import {motion} from "framer-motion"
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6"> 
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2" width={150} src={logo} alt="logo" />
        </div>
        <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0,x:100}} transition={{duration:0.5}} className="m-8 items-center justify-center gap-4 flex">
        <a href="https://www.instagram.com/alsrouji.o/?hl=en"><FaInstagram size={35}/></a>
        <a href="https://wa.me/+971566429744"><FaWhatsapp size={35}/></a>
        <a href="https://www.linkedin.com/in/omar-alsrouji-ba7a29253/"><CiLinkedin size={40}/></a>
        <a href="https://github.com/OmarAlsrouji?tab=repositories"><FaGithub size={35}/></a>        
        </motion.div>
    </nav>
  )
}

export default Navbar
