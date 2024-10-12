import { projectsDescription } from "./ProjectsDescription";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="px-4 py-10 md:px-6 md:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <h1>Projects</h1>
        <div className="flex flex-wrap">
          {projectsDescription.map((ele, index) => (
            <ProjectCard
              key={index}
              title={ele.title}
              description={ele.description}
              github={ele.github}
              info={ele.info}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
