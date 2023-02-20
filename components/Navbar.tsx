"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { SignOut, SignIn } from "@/app/actions";
import { useSession } from "next-auth/react";
import { Transition } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = () => {
  // const session = await getServerSession(authOptions);
  // console.log("🚀 ~ file: Navbar.tsx:9 ~ Navbar ~ session", session);
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Mentors",
      link: "/mentors",
    },
    {
      name: "Resources",
      link: "/resources",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
  ];
  return (
    <nav
      role="navbar"
      className="fixed top-0 left-0 z-20 w-full border-b border-solid border-slate-300 bg-white font-navbar font-bold"
    >
      <div className="items-center justify-between py-4 px-7 md:flex md:px-10">
        <div className="ml-4 flex gap-4">
          <Link href="/">
            <Image width={60} height={60} src="/logo.png" alt="logo" />
          </Link>
        </div>
        <div className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} />
          )}
        </div>
        <div className="mr-4 flex items-center gap-8">
          <ul
            className={`absolute left-0 z-20 w-full gap-4 bg-white pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
              isOpen ? "top-20 " : "top-[-490px]"
            }`}
          >
            {Links.map((link, index) => {
              if (
                link.name === "Dashboard" &&
                (status === "unauthenticated" ||
                  session?.user.role === "MENTEE")
              )
                return null;
              if (link.name === "Mentors" && session?.user.role === "MENTOR")
                return null;
              return (
                <li key={link.name} className="my-7 text-xl md:my-0 md:ml-8">
                  <Link href={link.link} className="group text-gray-800 ">
                    {link.name}
                    <span className="block h-0.5 max-w-0 bg-red-600 transition-all duration-500 md:group-hover:max-w-full"></span>
                  </Link>
                </li>
              );
            })}
            {session?.user ? <NavbarDropdown /> : <SignIn />}
          </ul>
          {/* links should have hover state where a underline animates in */}
          {/* {session?.user.role === "MENTEE" && (
            <Link href="mentors" className="group">
              Mentors
              <span className="block h-0.5 max-w-0 bg-red-600 transition-all duration-500 group-hover:max-w-full"></span>
            </Link>
          )}
          <Link href="resources" className="group">
            Resources
            <span className="block h-0.5 max-w-0 bg-red-600 transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
          {session?.user && (
            <Link href="dashboard" className="group">
              Dashboard
              <span className="block h-0.5 max-w-0 bg-red-600 transition-all duration-500 group-hover:max-w-full"></span>
            </Link>
          )} */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
