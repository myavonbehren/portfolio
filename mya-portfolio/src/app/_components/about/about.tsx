import AboutText from "./about-text";

const About = () => {
    return (
    <div className="flex flex-col justify-start pt-20" id="about">
        <h1 className="fluid-xxl font-bold">About</h1>
        <div className="w-full justify-center items-center">
            <AboutText />   
        </div>
    </div>
    )
}

export default About;