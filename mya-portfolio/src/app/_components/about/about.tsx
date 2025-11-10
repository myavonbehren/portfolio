import AboutItem from "./about-item";
import Container from "../container";
import AboutContent from "./about-content";

const About = () => {
    return (
    <div className="bg-hero-gradient">
    <Container>
    <div className="flex flex-col justify-start py-20" id="about">
      <AboutContent>
        <AboutItem />   
      </AboutContent>
    </div>
    </Container>
    </div>
    )
}

export default About;