import Container from "../_components/container";
import CreativeContent from "./creative-content";

const CreativeSection = () => {
    return (
        <div className="bg-projects">
            <Container>
                <div className="flex flex-col justify-start py-20 gap-5" id="about">
                    <CreativeContent>
                        <p className="fluid-m">When I&apos;m not building applications, I&apos;m creating motion graphics and visual effects that combine technical precision with creative storytelling.</p>
                        <a
                            href="https://creative.myavonbehren.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-base p-2.5 px-5 justify-center md:w-fit w-full inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        >
                            <p className="fluid-m">View Creative Work</p>
                        </a>
                    </CreativeContent>
                </div>
            </Container>
        </div>
    )
}

export default CreativeSection;