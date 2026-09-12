function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-8 md:px-12 bg-[#4A1822] text-[#F4EDE4]"
    >
      <div className="w-full max-w-3xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mt-10 mb-10">
          Contact Me
        </h2>

        <form className="space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-[#F4EDE4] text-[#2B2020] outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-[#F4EDE4] text-[#2B2020] outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-[#F4EDE4] text-[#2B2020] outline-none"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#7A2635] px-7 py-3 mb-10 rounded-lg font-semibold text-[#F9F1E7]"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;
