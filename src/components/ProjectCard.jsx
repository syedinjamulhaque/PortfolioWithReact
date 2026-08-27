export default function ProjectCard({ project }) {
  return (
    <article className="project-card reveal active">
      <div className="project-icon">
        <i className={project.icon}></i>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h3>{project.title}</h3>

        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
            aria-label={`Open ${project.title}`}
          >
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        )}
      </div>

      <p>{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
