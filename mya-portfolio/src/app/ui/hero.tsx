import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";


const Hero = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-2 bg-gradient">
        <h2 className="font-bold fluid-xl">Hello, I'm Mya 👋🏽</h2>
        <h1 className="font-bold uppercase fluid-xxxl text-center">Full Stack <br /> Developer</h1>
        <h3 className="font-bold fluid-l">Based near Asheville, NC</h3>
        <div className="flex items-center gap-3 pt-3">
            <button className="rounded-full pt-2.5 pb-2.5 px-5 shadow-lg bg-white/10 backdrop-blur-sm text-fluid-s font-bold transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                Resume
            </button>
            <a
            href="https://www.linkedin.com/in/myavonbehren"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 shadow-lg bg-white/10 backdrop-blur-sm inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FiLinkedin className="w-6 h-6" />
            </a>
            <a
            href="https://github.com/myavonbehren"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 shadow-lg bg-white/10 backdrop-blur-sm inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">                
                <FiGithub className="w-6 h-6"/>
            </a>
            <a href="mailto:myakvb@gmail.com"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 shadow-lg bg-white/10 backdrop-blur-sm inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FiMail className="w-6 h-6"/>
            </a>                
        </div>
    </div>
  )
}

export default Hero;