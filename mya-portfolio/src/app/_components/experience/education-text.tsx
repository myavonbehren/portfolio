import { fetchEducation } from "@/app/lib/data";
import { Education } from "@/app/lib/types";
import LogoDisplay from "./logodisplay";

const formatDate = (date?: Date | null) => {
    if (!date) return "Present";
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
  };


const EducationText = async () => {
    const education = await fetchEducation();
    return (
    <div className="px-11 py-8">
      {education.map((bs: Education) => (
        <div className="inline-flex flex-row items-center justify-center gap-4" key={bs.id}>
          {bs.icon && <LogoDisplay icon={bs.icon} />}
          <div className="inline-flex flex-col pb-1">
            <div className="font-semibold">
              {formatDate(bs.startDate)} - {formatDate(bs.endDate)}
              <p className="fluid-m">{bs.title}</p>
              <p className="fluid-s">{bs.company}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
    )
}

export default EducationText;