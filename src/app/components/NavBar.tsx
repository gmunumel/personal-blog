"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/app/components/ThemeToggle";

const NavBar = () => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `hover:underline text-lg ${
      pathname === href ? "font-bold" : "font-normal"
    }`;

  return (
    <nav className="w-full px-4 py-4 border-b border-gray-200 dark:border-gray-700 flex flex-wrap gap-4 gap-y-2 items-center">
      <Link href="/" className="flex items-center gap-2">
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
      <Link href="/posts" className={linkClass("/posts")}>
        Posts
      </Link>
      <Link href="/portfolio" className={linkClass("/portfolio")}>
        Portfolio
      </Link>
      <Link href="/about" className={linkClass("/about")}>
        About Me
      </Link>
      <div className="flex items-center gap-x-1">
        <Link href="/lolo" className={linkClass("/lolo")}>
          Lolo
        </Link>
        <span aria-label="lion" role="img" className="align-middle">
          🦁
        </span>
      </div>
      <ThemeToggle />
    </nav>
  );
};

export default NavBar;
