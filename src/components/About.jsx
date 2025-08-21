import myPhoto from "../NikhilPhoto.jpg";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 md:px-0 flex flex-col md:flex-row items-center md:gap-12">
        
        <img
          src={myPhoto}
          alt="Nikhil Reddy"
          className="w-72 h-72 rounded-full shadow-lg mb-6 md:mb-0"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">About Me</h2>
          <p className="text-lg mb-4">
            I am a software engineer with 2 years of experience building robust backend systems using Java, Spring Boot, and RESTful APIs. I also create responsive and interactive frontends using React. Passionate about learning new technologies and building solutions that matter.
          </p>
          <p className="text-lg">
            I enjoy collaborating with teams and creating high-quality, scalable web applications that deliver value to users.
          </p>
        </div>
      </div>
    </section>
  );
}
