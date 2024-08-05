import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.jpg"
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full pt-4">
      <div className=" container grid grid-cols-3 items-center text-white text-sm text-center rounded-full">
        <nav className="w-fit bg-neutral-900 py-2 px-6 rounded-full">
          <ul className="flex gap-x-8  uppercase">
            <li>
              <Link href="/" className="hover:text-yellow-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-500 transition">
                Recipe Catalog
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-yellow-500 transition">
                Featured
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/" className="text-2xl font-semibold">
          <Image src={logo} alt="logo" className="size-28 mx-auto rounded-full"/>
        </Link>
        <div className="rounded-full space-x-4 uppercase">
          <Button asChild className="bg-yellow-500"><Link href="/">Sign up</Link></Button>
          <Button asChild className=""><Link href="/">Sign in</Link></Button>
        </div>
      </div>
    </header>
  );
}
