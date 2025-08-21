export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center 
                 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white"
    >
      <h1 className="text-6xl font-extrabold animate-fade-in">
        Hi, I'm <span className="text-black">Nikhil Reddy Vanga</span>
      </h1>
      <p className="mt-4 text-xl max-w-xl animate-fade-in-delay">
        Full Stack Developer passionate about building scalable web apps with
        <span className="font-semibold"> Java, Spring Boot, React, and AWS</span>.
      </p>
      <a
        href="#projects"
        className="mt-8 px-6 py-3 bg-[var(--color-accent)] text-black rounded-xl font-semibold shadow-md hover:scale-110 transition"
      >
        View My Work
      </a>
    </section>
  );
}
