import prisma from "@/app/lib/db"

const formatDate = (date?: Date | null) => {
    if (!date) {
        return "Present"
    }

    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
}   

const description = (description: string) => {
    return description.split('*').map((line, index) => (
        <p key={index}>• {line}</p>
    ))
}

const TextContainer = async () => {
    const works = await prisma.works.findMany({
        orderBy: {
            endDate: 'desc'
        }
    })

    return (
        <>
            {works.map((work) => (
                <div className="inline-flex flex-col pt-2.5 pb-2.5 px-6">
                    <div className="font-semibold">
                    <p className="fluid-s">{formatDate(work.startDate)} - {formatDate(work.endDate)}</p>
                    <p className="fluid-m">{work.title}</p>
                    <p className="fluid-s">{work.company}</p>
                    </div>
                    <p className="fluid-s">{description(work.description)}</p>
                </div>
            ))}
        </>
    )
}
export default TextContainer;