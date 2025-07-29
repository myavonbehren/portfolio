import Image from "next/image";
import Link from "next/link";

const Preview = () => {
    return (
        <div className="pt-15">
            <h1 className="fluid-l font-semibold">Creative Projects</h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-5 pb-3">
                <div className="aspect-video">
                    <Image 
                        src="/LOCK-IT-DOWN-LACROSSE.gif" 
                        alt="LOCK IT DOWN GIF" 
                        width={200} 
                        height={113} 
                        className="w-full h-full object-cover"
                        priority
                        />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/Rotoscoping.gif" 
                    alt="Rotoscoping GIF" 
                    width={1280} 
                    height={720} 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/GET-LOUD.gif" 
                    alt="GET LOUD GIF" 
                    width={200} 
                    height={113} 
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <Link href="/creative" className="cursor-pointer hover:underline" >
                <h2 className="fluid-m">Show More...</h2>
            </Link>
        </div>
    )
}

export default Preview;