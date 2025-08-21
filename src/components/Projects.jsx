const projects = [
  // {
  //   title: "E-Commerce Platform",
  //   desc: "Built with React, Spring Boot, and MySQL.",
  //   link: "https://github.com/your-username/ecommerce-platform",
  // },
  {
    title: "Library Management System",
    desc: "Frontend",
    link: "https://github.com/vnreddy26/Library-Management-Frontend",
  },
    {
    title: "Library Management System",
    desc: "Backend",
    link: "https://github.com/vnreddy26/Library-Management-Backend",
  },
  {
    title: "Certificates",
    desc: "Java and Spring Security.",
    link: "https://github.com/vnreddy26/Certifications-and-Achievements",
  },
    {
    title: "AI Resume Analyzer",
    desc: "AI-powered tool using OpenAI API.(In Progress)",
    link: "https://github.com/your-username/ai-resume-analyzer",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-[var(--color-bg-dark)] text-center"
    >
      <h2 className="text-4xl font-bold mb-10 text-gray-900 dark:text-gray-100">
        Projects & Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-2xl shadow-lg p-6 bg-gray-100 dark:bg-gray-800 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl text-black font-bold mb-2">
                {p.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{p.desc}</p>
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[var(--color-accent)] text-black rounded-lg font-semibold hover:scale-105 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
