"use client"
import Link from "next/link";
import MediaLoader from "../_components/media-loader";

const Gallery = () => {
    return (
        <div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pt-30 pb-5">
                <MediaLoader 
                    src="/LOCK-IT-DOWN-LACROSSE.gif" 
                    alt="LOCK IT DOWN GIF" 
                    width={200} 
                    height={113}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                />
                <MediaLoader 
                    src="/Rotoscoping.gif" 
                    alt="Rotoscoping GIF" 
                    width={1280} 
                    height={720}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                />
                <MediaLoader 
                    src="/GET-LOUD.gif" 
                    alt="GET LOUD GIF" 
                    width={200} 
                    height={113}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                />
                <MediaLoader 
                    src="/Smudge.gif" 
                    alt="Walking GIF" 
                    width={1920} 
                    height={1080}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                />
                <MediaLoader 
                    src="/CinematicLighting_03.jpg" 
                    alt="Cinematic Lighting Office 3" 
                    width={1920} 
                    height={1080}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                />
                <MediaLoader 
                    src="/CinematicLighting_01.jpg" 
                    alt="Cinematic Lighting Office 1" 
                    width={1920} 
                    height={1080}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                />
                <MediaLoader 
                    src="/Alarm_01.png" 
                    alt="Alarm Clock Front" 
                    width={1920} 
                    height={1080}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                />
                <MediaLoader 
                    src="/Alarm_02.png" 
                    alt="Alarm Clock Back" 
                    width={1920} 
                    height={1080}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                />
                <MediaLoader 
                    src="/Studio_Lighting.gif" 
                    alt="Studio Lighting GIF" 
                    width={300} 
                    height={169}
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                />
                <Link href="https://github.com/myavonbehren/GoStem-Employee-Website/tree/main?tab=readme-ov-file#ux-personas"
                target="_blank">
                    <MediaLoader 
                        src="/GoStemPersona1.png" 
                        alt="UX Persona Student" 
                        width={960} 
                        height={540}
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                    />
                </Link>
                <Link href="https://github.com/myavonbehren/GoStem-Employee-Website/tree/main?tab=readme-ov-file#ux-personas"
                target="_blank">
                    <MediaLoader
                        src="/GoStemPersona2.png" 
                        alt="UX Persona Manager" 
                        width={960} 
                        height={540}
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BK5xjvvjvviOuuBWASdDAVrMnCCC1y9LUAQaWBCtm/wDHmV15x9WW/wBD+OvATMR3Vd0zfPVLEHmFwwFO0g4fE2b4VrNxVVVTSABGQ1jPUbxlFHXPgMkY7jO/pntndKM7xtNNnNbJi54k4FeB0QYB0K7xbOAu3sDOxdA8eSXsrN9yN1Y"
                    />
                </Link>

                <MediaLoader
                    src="https://www.youtube.com/embed/EdGKkGMZYmg?si=4YKTHU1IKeGIhWYH" 
                    alt="YouTube video player" 
                    isVideo={true}
                    videoTitle="YouTube video player"
                />
                <MediaLoader
                    src="https://www.youtube.com/embed/4rv9ZGl1a-I?si=mMyJysl72Eq9MMtG"
                    alt="YouTube video player"
                    isVideo={true}
                    videoTitle="YouTube video player"
                />
                <MediaLoader 
                    src="https://www.youtube.com/embed/sPYP7TiBTU8?si=S2nVB6_xsNTEw9JR"
                    alt="YouTube video player"
                    isVideo={true}
                    videoTitle="YouTube video player"
                />
                <MediaLoader 
                    src="https://www.youtube.com/embed/hXSlsmjg_9E?si=s58NT1OVM7X6zPst"
                    alt="YouTube video player"
                    isVideo={true}
                    videoTitle="YouTube video player"
                />
                <MediaLoader 
                    src="https://www.youtube.com/embed/STD8LQ2PaDw?si=HsXuo3q3C9VBJZ6F"
                    alt="YouTube video player"
                    isVideo={true}
                    videoTitle="YouTube video player"
                />
                <MediaLoader 
                    src="https://www.youtube.com/embed/UfALShQCbUg?si=fMZQvOE24mhjLJut"
                    alt="YouTube video player"
                    isVideo={true}
                    videoTitle="YouTube video player"
                />
                <MediaLoader 
                    src="https://www.youtube.com/embed/1uG-30D3B2g?si=C4KXr145PHdlfxAI"
                    alt="YouTube video player"
                    isVideo={true}
                    videoTitle="YouTube video player"
                />
            </div>
        </div>
    )
}

export default Gallery;