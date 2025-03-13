import Image from "next/image";
import Link from "next/link";

import Landing from "./Landing/page";

export default function Home() {
  return (
    <>
      <Link href="/">
        <Landing />
      </Link>
    </>
  );
}
