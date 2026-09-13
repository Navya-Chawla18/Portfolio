import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="sticky top-0 z-50 bg-[#4A1822] text-[#F4EDE4] shadow-md">

      <div className="flex items-center justify-between px-5 md:px-8 py-5">

        <h1 className="text-xl md:text-2xl font-bold tracking-wide">
          Navya's Portfolio
          <span className="text-[#C5A46D]">.</span>
        </h1>

        <div className="hidden md:flex gap-8">

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

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

      </div>

      {isMenuOpen && (
        <div className="md:hidden px-5 pb-5">

          <div className="flex flex-col gap-4 bg-[#5E1C29] rounded-lg p-4">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setIsMenuOpen(false)}
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

        </div>
      )}

    </nav>
  );
}

export default Navbar;