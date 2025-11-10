import Container from "../_components/container";
const CreativeSection = () => {
    return (
        <div className="bg-projects">
            <Container>
                <div className="flex flex-col justify-start py-20 gap-5" id="about">
                    <h1 className="fluid-xxl font-bold">Creative</h1>
                    <div className="w-full justify-center items-center">
                        <p className="fluid-m">When I'm not building applications, I'm creating motion graphics and visual effects that combine technical precision with creative storytelling.</p>
                    </div>
                    <a
            href="https://creative.myavonbehren.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base p-2.5 px-5 justify-center lg:w-1/6 w-full inline-flex items-center transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                
                <p className="fluid-m">View Creative Work</p>
            </a>
                </div>
            </Container>
        </div>
    )
}

export default CreativeSection;