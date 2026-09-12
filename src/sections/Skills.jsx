function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Git & GitHub"
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-8 md:px-12 bg-[#4A1822] text-[#F4EDE4]"
    >
      <div className="w-full max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-[#F4EDE4] mb-12">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 rounded-xl bg-[#F4EDE4] text-[#4A1822] text-center font-semibold"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;