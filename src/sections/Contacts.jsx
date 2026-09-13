import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccess("Your message has been submitted successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    } else {
      setSuccess("");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-8 md:px-12 bg-[#4A1822] text-[#F4EDE4]"
    >
      <div className="w-full max-w-3xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mt-10 mb-10">
          Contact Me
        </h2>

        <form
          className="space-y-6"
          onSubmit={handleSubmit}
        >

          <div>
            <label className="block mb-2 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#F4EDE4] text-[#2B2020] outline-none"
              placeholder="Enter your name"
            />

            {errors.name && (
              <p className="text-red-300 mt-1 text-sm">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#F4EDE4] text-[#2B2020] outline-none"
              placeholder="Enter your email"
            />

            {errors.email && (
              <p className="text-red-300 mt-1 text-sm">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#F4EDE4] text-[#2B2020] outline-none"
              placeholder="Write your message"
            ></textarea>

            {errors.message && (
              <p className="text-red-300 mt-1 text-sm">
                {errors.message}
              </p>
            )}
          </div>

          {success && (
            <p className="text-green-300 font-medium">
              {success}
            </p>
          )}

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
