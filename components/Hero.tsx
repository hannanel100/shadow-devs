"use client";
{
  /* Hero section with title, description text and call to action button */
}
import Image from "next/image";
import { motion } from "framer-motion";
import { SignIn } from "@/app/actions";
import { useSession } from "next-auth/react";
const Hero = () => {
  const { status } = useSession();
  return (
    <section className="bg-primary text-black">
      <div className="container mx-auto flex flex-col items-end gap-8 px-4 py-20 md:flex-row">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full ">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Find your{" "}
              <span className="relative z-0">
                mentor
                <motion.span
                  className="absolute bottom-0 left-0 border-b-4 border-dashed border-dark-slate-gray"
                  whileInView={{
                    width: "100%",
                    transition: {
                      type: "spring",
                      bounce: 0.5,
                      duration: 2,
                    },
                  }}
                  initial={{ width: 0 }}
                  viewport={{ once: true }}
                ></motion.span>
              </span>
            </h1>
            <p className="mb-8 text-2xl" data-testid="description">
              Look up mentors in your area and get in touch with them. Shadow
              them for the day to better understand their work and get advice on
              how to improve your skills.
            </p>
            {status === "unauthenticated" && <SignIn />}
          </div>
        </div>
        <div className="hidden flex-grow-0 md:block">
          <Image
            src={"/devs.png"}
            alt="devs"
            width={1750}
            height={1750}
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
