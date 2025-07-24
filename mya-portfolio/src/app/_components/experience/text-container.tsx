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
    const works = await prisma.works.findMany()

    return (
        <>
            {works.map((work) => (
                <div className="inline-flex flex-col gap-2">
                    <p>{formatDate(work.startDate)} - {formatDate(work.endDate)}</p>
                    <p>{work.title}</p>
                    <p>{work.company}</p>
                    {description(work.description)}
                </div>
            ))}
        </>
    )
}
export default TextContainer;