import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-yellow-100 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Get Your First Drink for Free!
        </h2>
        <p className="text-lg mb-6">
          Healthy, tasty drink. Start your day with a shot of coffee to make
          your day better than yesterday.
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300"
            placeholder="Email"
            required
          />
          <select
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300"
            required
          >
            <option value="">Where did you hear from us?</option>
            <option value="friends">Friends and family</option>
            <option value="youtube">YouTube video</option>
            <option value="podcast">Podcast</option>
            <option value="ad">Facebook ad</option>
            <option value="others">Others</option>
          </select>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition"
          >
            Sign Up Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignupForm;
