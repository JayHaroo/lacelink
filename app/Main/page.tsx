import Link from "next/link";
import { GoPlusCircle } from "react-icons/go";

export default function Main() {
  return (
    <>
      <div className="bg-white w-full h-[100vh] text-black">
        <div className="w-full h-[70px] bg-[#b9b9b9] flex justify-center items-center">
          <ul className="flex justify-between w-full p-5">
            <li>
              <Link legacyBehavior href="/">
                <div className="font-pencerio text-xl font-bold cursor-pointer" title="go back to landing">Lace Link</div>
              </Link>
            </li>
            <li className="flex items-center cursor-pointer">
              <div className="p-1">Create a Post</div>
              <GoPlusCircle size={25} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
