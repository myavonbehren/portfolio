"use client"
import Image from "next/image";

const Gallery = () => {
    return (
        <div>
            <h1>Gallery</h1>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-5">
                <div className="aspect-video">
                    <Image 
                        src="/LOCK-IT-DOWN-LACROSSE.gif" 
                        alt="LOCK IT DOWN GIF" 
                        width={700} 
                        height={394} 
                        className="w-full h-full object-cover"
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
                    width={700} 
                    height={394} 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/Smudge.gif" 
                    alt="Walking GIF" 
                    width={1920} 
                    height={1080} 
                    className="w-full h-full object-cover"
                    />
                </div>
                
                <div className="aspect-video">
                    <Image 
                    src="/CinematicLighting_03.jpg" 
                    alt="Cinematic Lighting Office 3" 
                    width={1920} 
                    height={1080} 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/CinematicLighting_02.jpg" 
                    alt="Cinematic Lighting Office 2" 
                    width={1920} 
                    height={1080} 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/CinematicLighting_01.jpg" 
                    alt="Cinematic Lighting Office 1" 
                    width={1920} 
                    height={1080} 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/Alarm_01.png" 
                    alt="Alarm  Clock Front" 
                    width={1920} 
                    height={1080} 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/Alarm_02.png" 
                    alt="Alarm  Clock Back" 
                    width={1920} 
                    height={1080} 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/Studio_Lighting.gif" 
                    alt="Studio Lighting GIF" 
                    width={1920} 
                    height={1080} 
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="aspect-video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hXSlsmjg_9E?si=s58NT1OVM7X6zPst" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="aspect-video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/STD8LQ2PaDw?si=HsXuo3q3C9VBJZ6F" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="aspect-video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1uG-30D3B2g?si=C4KXr145PHdlfxAI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>            
                </div>
                <div className="aspect-video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qWA0EkAWXlI?si=G6C5M2HDf_4BknFJ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Gallery;