import { useEffect, useRef } from "react";

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const section = aboutRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("about-visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      ref={aboutRef}
      id="about"
      className="min-h-screen px-8 md:px-12 bg-[#F4EDE4] text-[#2B2020] py-20"
    >
      <div className="w-full max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-[#4A1822] mb-16">
          About Me
        </h2>

        <div className="space-y-0">

          <div
            className="about-strip about-left w-full md:w-3/4 border-l-4 border-[#8B2635] pl-6 py-3
                       hover:translate-x-2 transition duration-300"
          >
            <p className="text-[#C5A46D] font-semibold tracking-widest text-sm">
              01
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-[#4A1822] mt-2">
              Interests
            </h3>

            <p className="text-lg text-[#5F5050] leading-8 mt-4">
              I'm passionate about learning, creating, and experimenting
              with web technologies. I enjoy building interactive and unique
              websites while continuously exploring new tools and technologies.
            </p>
          </div>


          <div
            className="about-strip about-right w-full md:w-3/4 md:ml-auto border-r-4 border-[#8B2635] pr-6 py-3
                       text-right
                       hover:-translate-x-2 transition duration-300"
          >
            <p className="text-[#C5A46D] font-semibold tracking-widest text-sm">
              02
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-[#4A1822] mt-2">
              My Journey
            </h3>

            <p className="text-lg text-[#5F5050] leading-8 mt-4">
              I am a second-year B.Tech Computer Science student at Ajay Kumar
              Garg Engineering College, Ghaziabad. Through projects such as a
              hospital website, a Jaipur trip planner, and a weather application
              with API integration, I have developed a strong interest in
              creating websites that are interactive, user-friendly, and
              visually engaging.
            </p>
          </div>


          <div
            className="about-strip about-left w-full md:w-3/4 border-l-4 border-[#8B2635] pl-6 py-3
                       hover:translate-x-2 transition duration-300"
          >
            <p className="text-[#C5A46D] font-semibold tracking-widest text-sm">
              03
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-[#4A1822] mt-2">
              Currently Learning
            </h3>

            <p className="text-lg text-[#5F5050] leading-8 mt-4">
              I have worked with HTML, CSS, and JavaScript, and I am currently
              learning React.js and Tailwind CSS while continuing to strengthen
              my JavaScript skills. As I am still at the beginning of my journey
              in software development, I am focused on learning, experimenting,
              and improving with every project. I aspire to become a developer
              who can build innovative and unique web experiences using modern
              technologies and AI tools effectively.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
