"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const About = () => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `hover:underline text-lg ${
      pathname === href ? "font-bold" : "font-normal"
    }`;

  return (
    <main className="flex justify-center items-start min-h-[80vh] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <section className="w-full max-w-2xl bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800">
        <div className="flex flex-col items-center mb-6">
          <Image
            src="/new_pic.jpg"
            alt="Photo of Gabriel Muñumel"
            width={256}
            height={1024}
            className="w-32 h-32 rounded-full mb-4 shadow-lg border-4 border-blue-200 dark:border-blue-900"
            priority
          />
          <h1 className="text-4xl font-extrabold mb-1 text-blue-800 dark:text-blue-200 text-center">
            Gabriel Muñumel
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-2">
            Fullstack Developer & Software Architect
          </p>
        </div>
        <p className="mb-6 text-center text-gray-700 dark:text-gray-200 leading-relaxed">
          👋 Hi, I’m a fullstack developer and software architect with over a
          decade of experience building scalable, maintainable systems. My
          toolkit includes Python (Flask, FastAPI), Java, C#, and JavaScript
          frameworks like React, Redux, and Next.js. I’ve worked extensively
          with relational databases (MySQL, PostgreSQL), backend technologies
          (SQLAlchemy, AWS Lambda, S3, SQS), infrastructure tools (Kubernetes,
          Terraform, Ansible), and best practices like Clean Architecture,
          Microservices, and Agile methodologies. When I’m not coding, you’ll
          probably find me out with my lion-like chow chow,{" "}
          <Link href="/lolo" className={linkClass("/lolo")}>
            Lolo 🦁
          </Link>
          , who’s always up for a long walk or sniffing out his next snack,
          buried in a good book, or pushing my limits at CrossFit.
        </p>
        <div className="mb-6 w-full">
          <h2 className="text-2xl font-semibold mb-3 text-blue-700 dark:text-blue-300">
            Experience
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
            <li>
              <span className="font-bold">
                Senior Software Engineer and Architect
              </span>{" "}
              @ Telenet{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                [2020 - Present]
              </span>
            </li>
            <li>
              <span className="font-bold">Senior Programmer Analyst</span> @
              OTIS EMEA{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                [2018-2020]
              </span>
            </li>
            <li>
              <span className="font-bold">Senior Programmer Analyst</span> @
              Willis Towers Watson{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                [2018]
              </span>
            </li>
            <li>
              <span className="font-bold">Software Engineer</span> @ Everis{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                [2018]
              </span>
            </li>
            <li>
              <span className="font-bold">Full-Stack Developer</span> @ Direct
              Seguros (AXA Group){" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                [2016-2018]
              </span>
            </li>
            <li>
              <span className="font-bold">Full-Stack Developer</span> @
              BookingBug{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                [2016]
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default About;
