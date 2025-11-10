import AboutItem from "./about-item";
import Container from "../container";

const About = () => {
    return (
    <div className="bg-hero-gradient">
    <Container>
    <div className="flex flex-col justify-start py-20" id="about">
        <h1 className="fluid-xxl font-bold">About</h1>
        <div className="w-full justify-center items-center">
            <AboutItem />   
        </div>
    </div>
    </Container>
    </div>
    )
}

export default About;