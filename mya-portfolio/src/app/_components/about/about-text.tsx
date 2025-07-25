import { fetchAbout } from "@/app/lib/data";

const AboutText = async () => {
    const about = await fetchAbout();
    console.log(about);
    
    return (
        <div>
            <h1 className="fluid-l font-bold">Hello, I'm Mya 👋🏽</h1>
            
            {about.map((details: any) => (
                <p key={details.id} className="fluid-m"> {details.description}</p>
            ))}
        </div>
    )
}

export default AboutText;