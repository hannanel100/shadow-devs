"use client";
{
  /* Hero section with title, description text and call to action button */
}
import { Button } from "./";

const Hero = () => {
  return (
    <section className="bg-primary text-black">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full lg:w-1/2">
            <h1 className="mb-4 text-5xl font-bold">Find your mentor</h1>
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
      </div>
    </section>
  );
};

export default Hero;
