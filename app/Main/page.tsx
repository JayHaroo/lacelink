import { promises as fs } from "fs";
import Link from "next/link";
import { GoPlusCircle } from "react-icons/go";

export default async function Main() {
  // Read and parse the JSON file
  const file = await fs.readFile(
    process.cwd() + "/public/data/shoes.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <>
      <div className="bg-white w-full h-full text-black">
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
              <div className="p-1">Create a Post</div>
              <GoPlusCircle size={25} />
            </li>
          </ul>
        </div>

        {/* Shoe Cards Grid */}
        <div className="grid grid-cols-4 gap-4 p-5">
          {data.shoes.map((shoe: any, index:any) => (
            <div key={index} className="bg-[#d8d8d8] p-4 rounded-lg shadow-lg object-center">
              <img
                src={shoe.image}
                alt={shoe.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-bold mt-2">{shoe.name}</h2>
              <p className="text-sm text-gray-600">{shoe.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
