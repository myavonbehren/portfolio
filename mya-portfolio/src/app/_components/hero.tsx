import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";


const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 bg-gradient-hero h-screen" id="home">
        <h2 className="font-bold fluid-xl text-center">Hello, I&apos;m Mya 👋🏽</h2>
        <h1 className="font-bold uppercase fluid-xxxl text-center">Full Stack <br /> Developer</h1>
        <h3 className="font-bold fluid-l text-center">Based near Asheville, NC</h3>
        <div className="flex items-center gap-3 pt-3 justify-center">
            <a 
            href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:2915f675-d318-4d77-887d-c2099d368b29"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base px-5 py-2.5 font-bold transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <div className="flex items-center gap-2">
                    Resume
                    <FiArrowRight className="w-4 h-4"/>
                </div>
            </a>
            <a
            href="https://www.linkedin.com/in/myavonbehren"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base p-2.5 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FiLinkedin className="w-6 h-6" />
            </a>
            <a
            href="https://github.com/myavonbehren"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base p-2.5 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">                
                <FiGithub className="w-6 h-6"/>
            </a>
            <a
            href="https://www.youtube.com/@myavonbehren"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base p-2.5 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FiYoutube className="w-6 h-6"/>
            </a>
            <a href="mailto:myakvb@gmail.com"
            rel="noopener noreferrer"
            className="btn-base p-2.5 inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                <FiMail className="w-6 h-6"/>
            </a>                
        </div>
    </section>
  )
}

export default Hero;