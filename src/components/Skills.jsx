import useReveal from "../hooks/useReveal";
import SkillCard from "./SkillCard";
import { skillGroups, additionalTech } from "../data/skills";

export default function Skills() {
  const headingRef = useReveal();
  const pillsRef = useReveal();

  return (
    <section id="skills" className="section-padding bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="section-heading reveal">
          <h2 className="section-title">
            <span className="gradient-text text-4xl">SKILLS & TECHNOLOGIES</span>
          </h2>
          <p className="section-tag after:content-[''] after:block after:w-[245px] after:h-1 after:bg-cyan-600 after:rounded-full after:mx-auto after:mt-4">
          </p>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            I've worked with a wide range of technologies throughout my journey as a developer. Here are the tools and languages I'm most proficient in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>

        <div ref={pillsRef} className="mt-14 reveal">
          <h3 className="text-xl font-bold mb-5 text-center">
            Additional technologies I work with
          </h3>

          <div className="flex flex-wrap gap-3 justify-center">
            {additionalTech.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
