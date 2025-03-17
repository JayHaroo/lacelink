"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { GoPlusCircle } from "react-icons/go";

export default function Main() {
  interface Shoe {
    _id: string;
    name: string;
    brand: string;
    description: string;
    image: string;
  }

  const [shoes, setShoes] = useState<Shoe[]>([]);

  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const response = await fetch("/api/getAllData"); // Adjust URL if necessary
        const data = await response.json();
        setShoes(data);
        console.log(shoes);
      } catch (error) {
        console.error("Error fetching shoes:", error);
      }
    };

    fetchShoes();
  }, []);

  return (
    <>
      <div className="bg-white w-full min-h-screen text-black">
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
            <li className="flex cursor-pointer">
              <Link href="/Create" className="flex items-center">
                <div className="p-1">Create a Post</div>
                <GoPlusCircle size={25} />
              </Link>
            </li>
          </ul>
        </div>

        {/* Shoe Cards Grid */}
        <div className="p-5">
          <div className="grid grid-cols-4 gap-7">
            {shoes.map((shoe) => (
              <div
                key={shoe._id}
                className="bg-[#cacaca] p-4 rounded-xl shadow-lg text-center"
              >
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-40 object-cover rounded-md"
                />
                <p className="font-medium text-2xl mt-2">{shoe.name}</p>
                <p>By: {shoe.brand}</p>
                <p className="text-sm mt-1">{shoe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
