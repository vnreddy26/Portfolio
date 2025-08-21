import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md shadow-xs z-50 transition">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-black">Nikhil Reddy</h1>
        <div className="flex space-x-6 items-center">
          {["home", "about", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`capitalize transition ${
                active === id
                  ? "text-[var(--color-accent)] font-semibold"
                  : "text-black hover:text-[var(--color-accent)]"
              }`}
            >
              {id}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
