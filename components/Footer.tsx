"use client";
import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Button from "./Button";
// the footer component, with a logo on the left side, social media icons on the right side, and a link to the privacy policy
// under this should be a form to subscribe to the newsletter
const Footer = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <footer className="mt-8 border-t-2 border-solid border-dark-slate-gray">
      <div className="flex flex-col items-center justify-between py-8 px-4 md:flex-row">
        <div className="flex items-center gap-4">
          <Image src="/devs.png" alt="logo" width={50} height={50} />
          <h3 className="text-xl font-bold">Shadow Devs</h3>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/hannanel-gershinsky/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/hannanel100"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://twitter.com/hannanel100"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between py-8 px-4 md:flex-row">
        <div className="flex items-center gap-4">
          <a href="/privacy-policy" className="text-sm">
            Privacy Policy
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/terms-of-service" className="text-sm">
            Terms of Service
          </a>
        </div>
      </div>
      {/* newsletter form */}
      <div className="flex flex-col gap-8 py-8 px-4 ">
        <div className="flex items-center gap-4">
          <h3 className="text-xl font-bold">Subscribe to our newsletter</h3>
        </div>
        <div className="flex items-center gap-4">
          <form onSubmit={(e) => handleSubmit(e)} className="flex gap-2">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-60 rounded-lg border-2
               border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-mountain-majesty"
            />
            <Button
              text="Subscribe"
              type="submit"
              onClick={() => console.log("clicked")}
            />
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
