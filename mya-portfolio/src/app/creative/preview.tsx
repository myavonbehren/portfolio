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
            </div>
            <Link href="/creative" className="cursor-pointer hover:underline" >
                <h2 className="fluid-m">Show More...</h2>
            </Link>
        </div>
    )
}

export default Preview;