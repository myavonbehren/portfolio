import { fetchWork } from "@/app/lib/data";
import LogoDisplay from "./logodisplay";

const formatDate = (date?: Date | null) => {
  if (!date) return "Present";
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
};

const description = (description: string) => {
  return description.split('*').map((line, index) => (
    <p key={index} className="fluid-s pl-2">• {line}</p>
  ));
};

const WorkText = async () => {
  const work = await fetchWork();
  return (
    <div className="px-11 pt-11 pb-6">
      {work.map((job: any) => (
        <div className="inline-flex flex-row items-center justify-center gap-4 pb-5 " key={job.id}>
            <LogoDisplay icon={job.icon} />
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
  );
};

export default WorkText;