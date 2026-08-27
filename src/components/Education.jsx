import useReveal from "../hooks/useReveal";

export default function Education() {
  const headingRef = useReveal();
  const cardRef = useReveal();

  return (
    <section id="education" className="section-padding bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="section-heading reveal">
          <h2 className="section-title">
            <span className="gradient-text text-5xl">EDUCATION</span>
          </h2>
          <p className="after:content-[''] after:block after:w-[185px] after:h-1 after:bg-cyan-600 after:rounded-full after:mx-auto after:mt-4">
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-14">
          <div ref={cardRef} className="education-card reveal">
            <div className="education-icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="education-badge">Undergraduate</span>
                <p className="text-primary font-semibold text-sm">
                  2023 — 2027
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-3">
                Bachelor of Technology
              </h3>

              <p className="text-gray-400 mt-2">Computer Science</p>

              <p className="text-gray-500 mt-1">
                Assam Down Town University
              </p>

              <div className="gpa-box">
                <i className="fa-solid fa-star text-cyan-400"></i>
                <span className="text-sm text-gray-300">
                  GPA:{" "}
                  <span className="text-white font-bold">
                    8.0 (aggregate)
                  </span>
                </span>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-gray-300 mb-4">
                  Relevant Coursework:
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="coursework-tag">Data Structures</span>
                  <span className="coursework-tag">Algorithms</span>
                  <span className="coursework-tag">Database Management</span>
                  <span className="coursework-tag">Web Development</span>
                  <span className="coursework-tag">Object-Oriented Programming</span>
                  <span className="coursework-tag">Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
