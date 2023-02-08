import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { SignOut, SignIn } from "@/app/actions";
import { useSession } from "next-auth/react";

const Navbar = () => {
  // const session = await getServerSession(authOptions);
  // console.log("🚀 ~ file: Navbar.tsx:9 ~ Navbar ~ session", session);
  const { data: session, status } = useSession();
  console.log("🚀 ~ file: Navbar.tsx:12 ~ Navbar ~ status", status);
  console.log("🚀 ~ file: Navbar.tsx:12 ~ Navbar ~ session", session);
  return (
    <nav
      role="navbar"
      className="mt-4 flex items-center justify-between border-b border-solid border-slate-300 pb-4 font-navbar font-bold"
    >
      <div className="ml-4 flex gap-4">
        <Link href="/">
          <Image width={60} height={60} src="/logo.png" alt="logo" />
        </Link>
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
        {session?.user && (
          <Link href="profile" className="group">
            Profile
            <span className="block h-0.5 max-w-0 bg-red-600 transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
        )}

        {session?.user ? <SignOut /> : <SignIn />}
      </div>
    </nav>
  );
};

export default Navbar;
