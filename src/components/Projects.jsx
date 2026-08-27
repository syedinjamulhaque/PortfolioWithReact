import useReveal from "../hooks/useReveal";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const headingRef = useReveal();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="section-heading reveal">
          <h2 className="section-title">
            <span className="gradient-text text-4xl ">PROJECTS :</span> I've <span className="gradient-text">built</span>
          </h2>
          <p className="section-tag">that showcase my skills in full-stack development.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
