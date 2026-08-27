import { useEffect, useRef, useState } from "react";

export default function SkillCard({ group }) {
  const cardRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className="skill-group-card reveal active">
      <div className="flex items-center gap-3 mb-6">
        <div className="project-icon !mb-0">
          <i className={group.icon}></i>
        </div>
        <h3 className="text-xl font-bold">{group.title}</h3>
      </div>

      <div className="space-y-5">
        {group.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-300">
                {skill.name}
              </span>
              <span className="text-sm text-gray-500">{skill.value}%</span>
            </div>
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{ width: inView ? `${skill.value}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
