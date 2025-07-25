import prisma from "@/app/lib/db"
import Dpulogo from "../svg/dpulogo"
import Nulogo from "../svg/nulogo"
import { useState, useEffect } from "react"

const formatDate = (date?: Date | null) => {
    if (!date) {
        return "Present"
    }

    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}   

const description = (description: string) => {
    return description.split('*').map((line, index) => (
        <p key={index} className="fluid-s pl-2">• {line}</p>
    ))
}

interface Type {
    string: string;
}

const TextContainer = () => {
    const [work, setWork] = useState([])

    useEffect(() => {
        fetch("/api/info")
        .then((res) => res.json())
        .then((data) => setWork(data))
        .catch((err) => console.error(err))
    }, [])

    return (
        <>
        {console.log(work)}
        {/*}
        {type.string == "work" ? (
        <div className="px-11 py-12">
            {work.map((job: any) => (
                <div className="inline-flex flex-row items-center justify-center gap-4 pb-5" key={job.id}>
                    <div className="inline-flex flex-row items-center justify-center btn-base p-5">
                        {job.icon == "dpulogo" ? <Dpulogo className="w-6 h-6"></Dpulogo> : <Nulogo className="w-6 h-6"></Nulogo>}
                    </div>
                    <div className="inline-flex flex-col pb-1">
                        <div className="font-semibold">
                        {formatDate(job.startDate)} - {formatDate(job.endDate)}
                        <p className="fluid-m">{job.title}</p>
                        <p className="fluid-s">{job.company}</p>
                        </div>
                        {description(job.description)}
                    </div>
                </div>
            ))}
        </div>
        ) : (
            <div>
                <h1>Education</h1>
            </div>
        )}
        */}
        </>
    )
}
export default TextContainer;