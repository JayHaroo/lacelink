import Link from "next/link";

export default function Landing() {
  return (
    <div className="w-[100%] h-[100vh] bg-white flex justify-center items-center text-black">
      <div className="flex-col justify-items-center">
        <div className="font-pencerio font-bold text-5xl">
          Lace Link
        </div>
        <Link legacyBehavior href="/Main">
          <div className="border border-black p-3 w-[20vh] m-5 text-center cursor-pointer ease-in duration-300 rounded-3xl hover:bg-black hover:text-white">
            Proceed
          </div>
        </Link>
      </div>
    </div>
  );
}
