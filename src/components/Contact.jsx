export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 dark:bg-black text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="text-lg mb-6">Let’s work together! Feel free to reach out.</p>
      <a
        href="mailto:vanganikhil128@gmail.com"
        className="px-6 py-3 bg-[var(--color-accent)] text-black rounded-xl font-semibold shadow-md hover:scale-110 transition"
      >
        Email Me
      </a>
      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://github.com/vnreddy26?tab=repositories" className="hover:text-[var(--color-accent)]">GitHub</a>
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className="hover:text-[var(--color-accent)]">LinkedIn</a>
      </div>
    </section>
  );
}
