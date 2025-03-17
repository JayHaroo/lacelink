"use client";
import { useState } from "react";
import Link from "next/link";

export default function Create() {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    brand: "",
    description: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    const response = await fetch("/api/saveData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    setMessage(data.message);

    if (response.ok) {
      setFormData({ image: "", name: "", brand: "", description: "" });
    }
  };

  return (
    <>
      <div className="bg-white min-h-screen flex flex-col items-center text-black">
        {/* Navbar */}
        <div className="w-full h-[70px] bg-[#b9b9b9] flex justify-center items-center">
          <ul className="flex justify-between w-full p-5">
            <li>
              <Link legacyBehavior href="/">
                <div
                  className="font-pencerio text-xl font-bold cursor-pointer"
                  title="Go back to landing"
                >
                  Lace Link
                </div>
              </Link>
            </li>
            <li className="flex items-center cursor-pointer">
              <Link href="/Main">
                <div className="p-1">Go Back</div>
              </Link>
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div className="w-full max-w-md bg-gray-100 p-5 rounded-lg shadow-lg mt-5">
          <h2 className="text-xl font-bold text-center mb-4">Add New Shoe</h2>
          {message && <p className="text-center text-green-500">{message}</p>}
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="Image Link"
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="Shoe Name"
            />
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="Shoe Brand"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              placeholder="Shoe Description"
              rows="3"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
