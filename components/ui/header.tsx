"use client";

import Link from "next/link";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <Link href="/">
            <span className="text-xl font-bold">LocaFlow</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="#" className="flex items-center gap-1 hover:text-indigo-400">
              🧑‍💼 <span>Propriétaires</span>
            </Link>
            <Link href="#" className="flex items-center gap-1 hover:text-indigo-400">
              👥 <span>Locataires</span>
            </Link>
            <Link href="#" className="flex items-center gap-1 hover:text-indigo-400">
              ❓ <span>FAQ</span>
            </Link>
            <Link href="#" className="flex items-center gap-1 hover:text-indigo-400">
              ✉️ <span>Contact</span>
            </Link>
            <Link href="#" className="ml-4 px-4 py-1 rounded bg-gray-800 hover:bg-gray-700">
              Connexion
            </Link>
            <Link href="#" className="ml-2 px-4 py-1 rounded bg-indigo-600 hover:bg-indigo-500">
              Créer un compte
            </Link>
          </nav>

          {/* Burger icon for mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
            <Link href="#" className="block py-1 flex items-center gap-2 hover:text-indigo-400">
              🧑‍💼 Propriétaires
            </Link>
            <Link href="#" className="block py-1 flex items-center gap-2 hover:text-indigo-400">
              👥 Locataires
            </Link>
            <Link href="#" className="block py-1 flex items-center gap-2 hover:text-indigo-400">
              ❓ FAQ
            </Link>
            <Link href="#" className="block py-1 flex items-center gap-2 hover:text-indigo-400">
              ✉️ Contact
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Link href="#" className="px-4 py-2 rounded bg-gray-700 hover:bg-gray-600 text-center">
                Connexion
              </Link>
              <Link href="#" className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-center">
                Créer un compte
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="pt-24">{children}</main>
    </div>
  );
}
