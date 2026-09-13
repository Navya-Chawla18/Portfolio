import { useEffect, useRef, useState } from "react";

function Skills() {
  const skills = [
    { name: "HTML", emoji: "🌐" },
    { name: "CSS", emoji: "🎨" },
    { name: "JavaScript", emoji: "⚡" },
    { name: "React.js", emoji: "⚛️" },
    { name: "Tailwind CSS", emoji: "💨" },
    { name: "Git & GitHub", emoji: "🔗" },
  ];

  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="min-h-screen flex items-center px-8 md:px-12 bg-[#4A1822] text-[#F4EDE4]"
    >
      <div className="w-full max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-[#F4EDE4] mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`p-6 rounded-xl bg-[#F4EDE4] text-[#4A1822] text-center font-semibold ${
                isVisible ? "skill-reveal" : "skill-hidden"
              } hover:-translate-y-3 hover:shadow-xl transition-all duration-300`}
              style={{ animationDelay: `${index * 0.6}s` }}
            >
              <div className="text-3xl mb-3">
                {skill.emoji}
              </div>

              {skill.name}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;
