function Home() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center px-8 md:px-12 bg-[#F4EDE4] text-[#2B2020]"
    >
      <div className="w-full max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="w-full md:w-1/2">

            <p className="mt-4 mb-0 text-[#8B2635] text-lg font-medium">
              Hello, I'm
            </p>

            <h2 className="text-5xl md:text-6xl font-bold text-[#4A1822] leading-tight">
              Navya Chawla
            </h2>

            <h3 className="text-2xl md:text-3xl text-[#8B2635] mt-6 mb-6 font-semibold">
              A Computer Science Student
              <br />
              & Aspiring Software Developer
            </h3>

            <p className="text-[#5F5050] text-lg leading-8 max-w-xl">
              I'm a B.Tech Computer Science student interested in
              software development, web technologies and building
              useful projects with code.
            </p>

            <div className="mt-8">

              <a
                href="#projects"
                className="inline-block bg-[#7A2635] px-7 py-3 rounded-lg
                           font-semibold text-[#F9F1E7]
                           hover:bg-[#5E1C29]
                           transition duration-300 shadow-md"
              >
                View My Projects
              </a>

            </div>

          </div>

          <div className="w-full md:w-1/2 flex justify-center">

            <div className="relative">

              <img
                src="/portfolio image.jpeg"
                alt="Navya Chawla"
                className="relative w-85 h-93 md:w-80 md:h-96
                           object-cover object-center
                           rounded-3xl
                           border-4 border-[#F4EDE4]
                           shadow-xl"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;