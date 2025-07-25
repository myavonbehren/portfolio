import { fetchSkills } from "@/app/lib/data";

const Languages = ( languages: any ) => {
    return languages.map((language: any, index: number) => (
        <button className="fluid-m btn-base-small px-3 py-2" key={index}>{language}</button>
    ))
}

const FrameworksAndLibraries = ( frameworksAndLibraries: any ) => {
    return frameworksAndLibraries.map((frameworkAndLibrary: any, index: number) => (
        <button className="fluid-m btn-base-small px-3 py-2" key={index}>{frameworkAndLibrary}</button>
    ))
}

const DeveloperToolsAndPlatforms = ( developerToolsAndPlatforms: any ) => {
    return developerToolsAndPlatforms.map((developerToolAndPlatform: any, index: number) => (
        <button className="fluid-m btn-base-small px-3 py-2" key={index}>{developerToolAndPlatform}</button>
    ))
}

const Design = ( design: any ) => {
    return design.map((software: any, index: number) => (
        <button className="fluid-m btn-base-small px-3 py-2" key={index}>{software}</button>
    ))
}


const Skills = async () => {
    const skills = await fetchSkills();

    return (
        <div className="flex flex-col justify-start pt-15">
            <div className="w-full justify-center items-center">
                <h2 className="fluid-l font-bold mb-2">Skills</h2>

                <div className="flex flex-col gap-2 mb-2">
                <h3 className="fluid-m font-bold">Languages</h3>
                <div className="flex flex-wrap gap-1 w-full md:flex-wrap">
                    {skills.map((skill: any) => (
                       Languages(skill.languages)
                    ))}
                </div>
                </div>

                <div className="flex flex-col gap-2 mb-2 mt-3">
                <h3 className="fluid-m font-bold">Frameworks and Libraries</h3>
                <div className="flex flex-wrap gap-1 w-full md:flex-wrap">
                    {skills.map((skill: any) => (
                       FrameworksAndLibraries(skill.frameworksAndLibraries)
                    ))}
                </div>
                </div>

                <div className="flex flex-col gap-2 mb-2 mt-3">
                <h3 className="fluid-m font-bold">Developer Tools and Platforms</h3>   
                <div className="flex flex-wrap gap-1 w-full md:flex-wrap">
                    {skills.map((skill: any) => (
                        DeveloperToolsAndPlatforms(skill.developerToolsAndPlatforms)
                    ))}
                </div>
                </div>

                <div className="flex flex-col gap-2 mb-2 mt-3">
                <h3 className="fluid-m font-bold">Design</h3>
                <div className="flex flex-wrap gap-1 w-full md:flex-wrap">
                    {skills.map((skill: any) => (
                        Design(skill.design)
                    ))}
                </div>
                </div>

            </div>
        </div>
    )
}

export default Skills;