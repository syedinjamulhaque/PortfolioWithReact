import useReveal from "../hooks/useReveal";
import { useEffect, useState } from "react";

export default function Hero() {
  const leftRef = useReveal();
  const rightRef = useReveal();
  const terminalLines = [
    { text: "$ npm run dev", color: "text-green-400" },
    { text: "Starting server...", color: "text-gray-400" },
    { text: "✓ Ready in 842ms", color: "text-cyan-400" },
    { text: "$ git status", color: "text-purple-400" },
    { text: "✓ Working tree clean", color: "text-gray-400" },
    { text: "$ git push", color: "text-blue-400" },
  ];
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % terminalLines.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div ref={leftRef} className="reveal">
            <p className="text-primary font-semibold mb-4 tracking-wide">
              HELLO, I'M
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
              Syed Injamul Haque
              <span className="gradient-text">.</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-300 mt-4">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mt-6 max-w-xl">
              Computer Science undergraduate skilled in JavaScript, React.js,
              Next.js, Node.js, and MongoDB with experience building
              full-stack applications and REST APIs.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#projects"
                className="gradient-bg px-7 py-3.5 rounded-full font-semibold hover:scale-105 transition shadow-lg shadow-purple-500/20"
              >
                View My Work
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </a>

              <a
                href="#contact"
                className="border border-white/20 px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-5 mt-8 text-xl text-gray-400 ml-4">
              <a
                href="https://github.com/syedinjamulhaque"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/syedinjamulhaque/"
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className="flex justify-center md:justify-end reveal">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 animate-float">
              <div className="absolute inset-0 rounded-full border border-purple-500/30"></div>
              <div className="absolute inset-5 rounded-full border border-cyan-500/20"></div>

              <div className="absolute inset-10 rounded-full glass flex flex-col items-center justify-center">

                <div className="relative h-32 w-full flex items-center justify-center overflow-hidden font-mono">

                  <div className="flex flex-col items-center gap-2">


                    <p className="text-xs text-gray-600 opacity-50 transition-all duration-700">
                      {terminalLines[
                        (activeLine - 1 + terminalLines.length) % terminalLines.length
                      ].text}
                    </p>

                    <p
                      className={`text-sm font-semibold ${terminalLines[activeLine].color}
      transition-all duration-700 scale-110`}
                    >
                      {terminalLines[activeLine].text}
                    </p>

                    {/* Next */}
                    <p className="text-xs text-gray-600 opacity-50 transition-all duration-700">
                      {terminalLines[(activeLine + 1) % terminalLines.length].text}
                    </p>

                  </div>

                </div>
              </div>

              <div className="floating-card absolute -top-1 -right-1">
                <i className="fa-brands fa-react text-purple-400"></i>
                Frontend
              </div>

              <div className="floating-card absolute bottom-5 -left-8">
                <i className="fa-brands fa-node-js text-green-400"></i>
                Backend
              </div>

              <div className="floating-card absolute top-1/2 -right-12">
                <i className="fa-solid fa-database text-cyan-400"></i>
                Database
              </div>

              <div className="floating-card absolute bottom-1 right-28">
                <i className="fa-solid fa-plug text-yellow-400"></i>
                API
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <a href="#about" className="text-gray-500 animate-pulse-slow">
            <i className="fa-solid fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
