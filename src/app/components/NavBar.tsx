"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/app/components/ThemeToggle";
import { useState } from "react";

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (href: string) =>
    `hover:underline text-lg ${
      pathname === href ? "font-bold" : "font-normal"
    }`;

  return (
    <nav className="w-full px-4 py-4 h-16 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between relative">
      {/* Left section: Logo + Desktop Nav Links */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/favicon-192x192.png"
            alt="StackEdge Logo"
            width={32}
            height={32}
            className="rounded"
            priority
          />
          <span className={linkClass("/")}>Home</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-4 items-center">
          <Link href="/posts" className={linkClass("/posts/")}>
            Posts
          </Link>
          <Link href="/portfolio" className={linkClass("/portfolio/")}>
            Portfolio
          </Link>
          <Link href="/about" className={linkClass("/about/")}>
            About Me
          </Link>
          <div className="flex items-center gap-x-1">
            <Link href="/lolo" className={linkClass("/lolo/")}>
              Lolo
            </Link>
            <span aria-label="lion" role="img" className="align-middle">
              🦁
            </span>
          </div>
        </div>
      </div>

      {/* Right section: ThemeToggle + Hamburger */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        {/* Hamburger icon - only visible on mobile */}
        <button
          className="lg:hidden flex items-center px-2 py-1 border border-gray-300 dark:border-gray-600 rounded focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu - only when menuOpen */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 w-full text-white 
        border border-blue-200 dark:border-blue-900 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 
        shadow-md flex flex-col items-start gap-3 px-4 py-3 md:hidden z-10"
        >
          <Link
            href="/posts"
            className={linkClass("/posts/")}
            onClick={() => setMenuOpen(false)}
          >
            Posts
          </Link>
          <Link
            href="/portfolio"
            className={linkClass("/portfolio/")}
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className={linkClass("/about/")}
            onClick={() => setMenuOpen(false)}
          >
            About Me
          </Link>
          <Link
            href="/lolo"
            className={linkClass("/lolo/")}
            onClick={() => setMenuOpen(false)}
          >
            Lolo 🦁
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
