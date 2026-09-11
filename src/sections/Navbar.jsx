function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-[#4A1822] text-[#F4EDE4]">

      <h1 className="text-2xl font-bold tracking-wide">
        Navya's Portfolio<span className="text-[#C5A46D]">.</span>
      </h1>

      <div className="flex gap-8">

        <a
          href="#home"
          className="hover:text-[#C5A46D] transition duration-300"
        >
          Home
        </a>

        <a
          href="#about"
          className="hover:text-[#C5A46D] transition duration-300"
        >
          About
        </a>

        <a
          href="#skills"
          className="hover:text-[#C5A46D] transition duration-300"
        >
          Skills
        </a>

        <a
          href="#projects"
          className="hover:text-[#C5A46D] transition duration-300"
        >
          Projects
        </a>

        <a
          href="#contact"
          className="hover:text-[#C5A46D] transition duration-300"
        >
          Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;