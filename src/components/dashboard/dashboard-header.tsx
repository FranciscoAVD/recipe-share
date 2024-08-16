import Link from 'next/link'
import React from 'react'
import logo from "../../../public/logo.jpg";
import { Input } from "@/components/ui/input";
import { filters } from "@/lib/constants";
import { FilterLi } from "@/components/ui/filter-li";
import Image from 'next/image';
import SearchForm from './search-form';

export default function DashboardHeader() {
  return (
    <section className="sticky top-0 py-6 bg-white shadow-lg z-50">
        <div className="container space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4">
              <Link href="/">
                <Image src={logo} alt="logo" className="size-20 rounded-full" />
              </Link>
              <nav className="bg-neutral-950 text-white px-4 py-1 rounded-full shadow">
                <ul className="flex gap-x-4">
                  <li className="hover:text-yellow-500">
                    <Link href="/dashboard">Your Recipes</Link>
                  </li>
                  <li className="hover:text-yellow-500">
                    <Link href="/dashboard">Add Recipe</Link>
                  </li>
                  <li className="hover:text-yellow-500">
                    <Link href="/dashboard"></Link>
                  </li>
                </ul>
              </nav>
            </div>

            <SearchForm />
          </div>
          <ul className="flex gap-x-4">
            {filters.map((f) => (
              <FilterLi key={f.label} filter={f} />
            ))}
          </ul>
        </div>
      </section>
  )
}
