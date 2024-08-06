import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.jpg";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full pt-4">
      <div className=" container grid grid-cols-3 items-start text-white text-sm text-center rounded-full">
        <nav className="w-fit bg-neutral-900 py-2 px-6 rounded-full">
          <ul className="flex gap-x-8 uppercase">
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
          <Image
            src={logo}
            alt="logo"
            className="size-28 mx-auto rounded-full"
          />
        </Link>
        <div className="w-fit ml-auto rounded-full uppercase">
          <Link
            href="/"
            className="bg-neutral-900 hover:bg-yellow-500 py-2 pl-6 pr-3 text-yellow-500 hover:text-white rounded-l-full transition"
          >
            Sign up
          </Link>
          <Link
            href="/"
            className="bg-neutral-900 hover:bg-lime-600 py-2 pr-6 pl-3 text-lime-600 hover:text-white rounded-r-full transition"
          >
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
