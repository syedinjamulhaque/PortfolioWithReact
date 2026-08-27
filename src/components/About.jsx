import useReveal from "../hooks/useReveal";

const stats = [
  { label: "Full Stack Development" },
  { label: "Database Management" },
  { label: "REST APIs" },
  { label: "Responsive UI" },
];

export default function About() {
  const headingRef = useReveal();
  const textRef = useReveal();
  const statsRef = useReveal();

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="section-heading reveal">
          <h2 className="section-title">
            <div className="gradient-text text-2xl">
              ABOUT ME
            </div>
            Building things that <span className="gradient-text">actually work.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-14">
          <div ref={textRef} className="reveal">
            <p className="text-gray-400 text-lg leading-8">
              I'm a Computer Science undergraduate at Assam Down Town
              University, passionate about building modern and practical web
              solutions. I focus on full-stack web development and enjoy
              turning ideas into responsive, user-friendly applications using
              technologies such as the MERN stack and Next.js.
            </p>

            <p className="text-gray-400 text-lg leading-8 mt-5">
              I'm always curious about how things work under the hood and
              enjoy learning new technologies, experimenting with different
              tools, and improving my development skills through hands-on
              projects.
            </p>

            <p className="text-gray-400 text-lg leading-8 mt-5">
              My goal is simple: build reliable applications that solve real
              problems while continuously growing as a{" "}
              <span className="text-white font-semibold">developer.</span>
            </p>
          </div>

          <div
            ref={statsRef}
            className="grid grid-cols-2 gap-4 sm:gap-5 reveal w-full min-w-0"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="stat-card min-w-0 w-full overflow-hidden"
              >
                <div className="stat-number min-w-0 max-w-full break-words text-center leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
