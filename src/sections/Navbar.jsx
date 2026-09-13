import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-[#4A1822] text-[#F4EDE4] shadow-md">

      <h1 className="text-2xl font-bold tracking-wide">
        Navya's Portfolio
        <span className="text-[#C5A46D]">.</span>
      </h1>

      <div className="flex gap-8">

        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`transition duration-300 ${
              activeSection === link.id
                ? "text-[#C5A46D] font-semibold"
                : "hover:text-[#C5A46D]"
            }`}
          >
            {link.name}
          </a>
        ))}

      </div>

    </nav>
  );
}

export default Navbar;