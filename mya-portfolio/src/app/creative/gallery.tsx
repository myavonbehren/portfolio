"use client"
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
    return (
        <div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pt-30 pb-5">
                <div className="aspect-video">
                    <Image 
                        src="/LOCK-IT-DOWN-LACROSSE.gif" 
                        alt="LOCK IT DOWN GIF" 
                        width={200} 
                        height={113} 
                        className="w-full h-full object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                        />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/Rotoscoping.gif" 
                    alt="Rotoscoping GIF" 
                    width={1280} 
                    height={720} 
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"

                    />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/GET-LOUD.gif" 
                    alt="GET LOUD GIF" 
                    width={200} 
                    height={113} 
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                    />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/Smudge.gif" 
                    alt="Walking GIF" 
                    width={1920} 
                    height={1080} 
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
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
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
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
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                    />
                </div>
                <div className="aspect-video">
                    <Image 
                    src="/Studio_Lighting.gif" 
                    alt="Studio Lighting GIF" 
                    width={300} 
                    height={169} 
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                    />
                </div>
                <div className="aspect-video">
                    <Link href="https://github.com/myavonbehren/GoStem-Employee-Website/tree/main?tab=readme-ov-file#ux-personas"
                    target="_blank">
                        <Image 
                    src="/GoStemPersona1.png" 
                    alt="UX Persona Student" 
                    width={960} 
                    height={540} 
                    className="w-full h-full object-cover"
                    />
                    </Link>
                    
                </div>
                <div className="aspect-video">
                    <Link href="https://github.com/myavonbehren/GoStem-Employee-Website/tree/main?tab=readme-ov-file#ux-personas"
                    target="_blank">
                    <Image
                    src="/GoStemPersona2.png" 
                    alt="UX Persona Manager" 
                    width={960} 
                    height={540} 
                    className="w-full h-full object-cover"
                    />
                    </Link>
                </div>
                <div className="aspect-video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/sPYP7TiBTU8?si=S2nVB6_xsNTEw9JR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="aspect-video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hXSlsmjg_9E?si=s58NT1OVM7X6zPst" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="aspect-video">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/STD8LQ2PaDw?si=HsXuo3q3C9VBJZ6F" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className="aspect-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UfALShQCbUg?si=fMZQvOE24mhjLJut" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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