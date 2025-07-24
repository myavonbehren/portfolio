import prisma from "@/app/lib/db"
import Dpulogo from "../svg/dpulogo"
import Nulogo from "../svg/nulogo"

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

const TextContainer = async (type: Type) => {
    const works = await prisma.works.findMany({
        orderBy: {
            endDate: 'desc'
        }
    })

    return (
        <>
        {type.string == "work" ? (
        <div className="px-11 py-12">
            {works.map((work) => (
                <div className="inline-flex flex-row items-center justify-center gap-4 pb-5" key={work.id}>
                    <div className="inline-flex flex-row items-center justify-center btn-base p-5">
                        {work.icon == "dpulogo" ? <Dpulogo className="w-6 h-6"></Dpulogo> : <Nulogo className="w-6 h-6"></Nulogo>}
                    </div>
                    <div className="inline-flex flex-col pb-1">
                        <div className="font-semibold">
                        {formatDate(work.startDate)} - {formatDate(work.endDate)}
                        <p className="fluid-m">{work.title}</p>
                        <p className="fluid-s">{work.company}</p>
                        </div>
                        {description(work.description)}
                    </div>
                </div>
            ))}
        </div>
        ) : (
            <div>
                <h1>Education</h1>
            </div>
        )}
        </>
    )
}
export default TextContainer;