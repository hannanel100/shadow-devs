"use client";
{
  /* Hero section with title, description text and call to action button */
}
import Image from "next/image";
import { Button } from "./";

const Hero = () => {
  return (
    <section className="bg-primary text-black">
      <div className="container mx-auto flex items-end gap-8 px-4 py-20">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full ">
            <h1 className="mb-4 text-5xl font-bold">
              Find your{" "}
              <span className="border-b-4 border-solid border-purple-mountain-majesty">
                mentor
              </span>
            </h1>
            <p className="mb-8 text-2xl" data-testid="description">
              Look up mentors in your area and get in touch with them. Shadow
              them for the day to better understand their work and get advice on
              how to improve your skills.
            </p>
            <Button
              text="login with github"
              onClick={() => console.log("clicked")}
              icon="github"
            />
          </div>
        </div>
        <div className="flex-grow-0">
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
