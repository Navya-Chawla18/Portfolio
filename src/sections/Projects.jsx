function Projects() {
  const projects = [
    {
      name: "CityCare Hospital Website",
      description:
        "A responsive hospital website designed with multiple pages, including a home page, about section, services page, book appointment page, and footer. The website provides a clean and user-friendly interface for exploring hospital services and booking appointments.",
      technologies: "Technologies used: HTML, CSS",
      link: "https://city-care-hospital-two.vercel.app/",
    },
    {
      name: "WanderList | Jaipur Trip Planner",
      description:
        "An interactive Jaipur trip planner featuring a carousel of popular places, monuments, and experiences along with an itinerary-based to-do list. Users can add activities from the carousel or manually, mark tasks as completed, delete tasks, and track total, completed, and remaining tasks.",
      technologies: "Technologies used: HTML, CSS, JavaScript",
      link: "https://wander-list-pink.vercel.app/",
    },
    {
      name: "SkyCast | Weather Website",
      description:
        "A weather application with user sign-up and login functionality, API integration, and an interactive weather dashboard. Users can search for any city to view current weather details such as temperature, humidity, precipitation, and wind speed, along with a three-day forecast. The website also features an animated cloud background.",
      technologies: "Technologies used: HTML, CSS, JavaScript, API Integration",
      link: "https://sky-cast-kappa-taupe.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center px-8 md:px-12 bg-[#F4EDE4] text-[#2B2020]"
    >
      <div className="w-full max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-[#4A1822] mt-10 mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 mb-10 gap-8">

          {projects.map((project) => (
            <div
              key={project.name}
              className="p-6 rounded-2xl bg-white shadow-md
                         hover:-translate-y-3
                         hover:shadow-xl
                         transition-all duration-300"
            >

              <h3 className="text-2xl font-bold text-[#4A1822]">
                {project.name}
              </h3>

              <p className="mt-4 text-[#5F5050] leading-7">
                {project.description}
              </p>

              <p className="mt-4 text-[#8B2635] font-medium">
                {project.technologies}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-[#7A2635] px-6 py-3 rounded-lg
                           font-semibold text-[#F9F1E7]
                           hover:bg-[#5E1C29]
                           hover:-translate-y-1
                           transition duration-300 shadow-md"
              >
                View Project →
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;