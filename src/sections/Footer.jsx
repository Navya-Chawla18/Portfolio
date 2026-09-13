function Footer() {
  return (
    <footer className="bg-[#F4EDE4] text-[#4A1822] px-8 py-6">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <div>
          <h2 className="text-xl font-bold">
            Navya's Portfolio
            <span className="text-[#C5A46D]">.</span>
          </h2>

          <p className="text-[#5F5050] text-sm mt-1">
            Building, learning and creating with code.
          </p>
        </div>

        <div className="flex gap-5 text-[#7A2635] font-medium text-sm">

          <a
            target="_blank"
            href="https://github.com/Navya-Chawla18"
            className="hover:text-[#C5A46D] transition duration-300"
          >
            GitHub
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/navya-chawla-7825253b2"
            className="hover:text-[#C5A46D] transition duration-300"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <p className="text-center text-xs text-[#5F5050] mt-5">
        © 2026 Navya Chawla. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;
