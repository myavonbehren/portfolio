import prisma from "@/app/lib/db"

const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
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
                    <p>{work.description}</p>
                </div>
            ))}
        </>
    )
}
export default TextContainer;