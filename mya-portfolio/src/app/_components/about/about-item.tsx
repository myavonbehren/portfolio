import { fetchAbout } from "@/app/lib/data";
import { About } from "@/app/lib/types";
import Image from "next/image";

const AboutItem = async () => {
    const about = await fetchAbout();
    
    return (
        <div className="flex flex-col mt-5">
            <h1 className="fluid-l font-bold">Hello, I&apos;m Mya 👋🏽</h1>
            {about.map((details: About) => (
                <div key={details.id} className="flex flex-row gap-2 mt-2">
                    {/* Portrait image container */}
                    <div className="hidden md:block transition delay-10 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                        <Image 
                            src="/portrait-dark.png" 
                            alt="Mya" 
                            width={2000} 
                            height={2571} 
                            className="portrait-image-dark" 
                        />
                        <Image 
                            src="/portrait-light.png" 
                            alt="Mya" 
                            width={2000} 
                            height={2571} 
                            className="portrait-image-light" 
                        />
                    </div>
                    <p className="fluid-m mt-1 md:mt-6"> {details.description}</p>
                </div>
            ))}
        </div>
    )
}

export default AboutItem;