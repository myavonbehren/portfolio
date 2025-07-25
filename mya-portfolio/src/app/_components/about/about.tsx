import AboutItem from "./about-item";

const About = () => {
    return (
    <div className="flex flex-col justify-start py-20" id="about">
        <h1 className="fluid-xxl font-bold">About</h1>
        <div className="w-full justify-center items-center">
            <AboutItem />   
        </div>
    </div>
    )
}

export default About;