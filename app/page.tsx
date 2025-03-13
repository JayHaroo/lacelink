import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-white flex align-middle justify-center items-center">
        <div className="flex-col justify-items-center">
          <div className="text-black font-pencerio font-bold text-5xl">
            Lace Link
          </div>
          <div className="text-black border-1 border-black p-3 w-[20vh] m-5 text-center cursor-pointer ease-in duration-300 rounded-3xl hover:bg-black hover:text-white">
            Proceed
          </div>
        </div>
      </div>
    </>
  );
}
