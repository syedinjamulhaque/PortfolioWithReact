import { useState } from "react";
import useReveal from "../hooks/useReveal";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbgjrqdz";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const infoRef = useReveal();
  const formRef = useReveal();

  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (event) => {
    const { id, value } = event.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(event.target),
      });

      if (response.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-heading reveal active">
          <h2 className="section-title">
            <div className="gradient-text text-3xl ">Get In Touch</div>
            Let's talk <span className="gradient-text">code.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mt-14">
          {/* Contact Info */}
          <div ref={infoRef} className="reveal">
            <p className="text-gray-400 text-lg leading-8">
              Have a project in mind, want to collaborate, or simply want to
              connect? Feel free to reach out.
            </p>

            <div className="space-y-6 mt-8">
              <a
                href="mailto:inja.cse@gmail.com"
                className="contact-item border border-white/10 bg-white/5 backdrop-blur-md rounded-xl p-4"
              >
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p className="font-semibold">inja.cse@gmail.com</p>
                </div>
              </a>

              <div className="contact-item border border-white/10 bg-white/5 backdrop-blur-md rounded-xl p-4">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p className="font-semibold">Assam, Guwahati, India</p>
                </div>
              </div>

              <div className="gradient-text font-bold text-xl ml-2">Let's Connect</div>
              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/syedinjamulhaque"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-20 h-20 border border-white/10 bg-white/5 backdrop-blur-lg rounded-xl hover:bg-white/10 transition"
                >
                  <i className="fa-brands fa-github text-3xl text-blue-400 hover:text-blue-300 hover:scale-110 transition"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/syedinjamulhaque/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center w-20 h-20 border border-white/10 bg-white/5 backdrop-blur-lg rounded-xl hover:bg-white/10 transition"
                >
                  <i className="fa-brands fa-linkedin text-3xl text-blue-400 hover:text-blue-300 hover:scale-110 transition"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass p-7 rounded-3xl reveal"
          >
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
                disabled={status === "submitting"}
                value={form.name}
                onChange={handleChange}
                className="input"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                disabled={status === "submitting"}
                value={form.email}
                onChange={handleChange}
                className="input"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your message..."
                required
                disabled={status === "submitting"}
                value={form.message}
                onChange={handleChange}
                className="input resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full gradient-bg py-3.5 rounded-xl font-semibold hover:scale-[1.02] transition disabled:opacity-60 disabled:hover:scale-100"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
              {status !== "submitting" && (
                <i className="fa-solid fa-paper-plane ml-2"></i>
              )}
            </button>

            {status === "success" && (
              <p className="text-center text-sm mt-4 text-green-400">
                Thanks! Your message has been sent.
              </p>
            )}

            {status === "error" && (
              <p className="text-center text-sm mt-4 text-red-400">
                Something went wrong. Please fill all fields and try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
