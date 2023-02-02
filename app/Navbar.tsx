"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav
      role="navbar"
      className="mt-4 flex items-center justify-between border-b border-solid border-slate-300 pb-4 font-navbar font-bold"
    >
      <div className="ml-4">
        <Image width={80} height={80} src="/next.svg" alt="logo" />
      </div>
      <div className="mr-4 flex items-center gap-8">
        {/* links should have hover state where a underline animates in */}
        <Link href="mentors" className="group">
          Mentors
          <span className="block h-0.5 max-w-0 bg-red-600 transition-all duration-500 group-hover:max-w-full"></span>
        </Link>
        <Link href="resources" className="group">
          Resources
          <span className="block h-0.5 max-w-0 bg-red-600 transition-all duration-500 group-hover:max-w-full"></span>
        </Link>
        <Button
          text="login with github"
          type="button"
          icon="github"
          onClick={() => console.log("clicked")}
        />
      </div>
    </nav>
  );
};

export default Navbar;
