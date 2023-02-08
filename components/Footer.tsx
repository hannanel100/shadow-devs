"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Button from "./Button";
import { Form } from "@/types/forms";
import NewsLetterForm from "./NewsLetterForm";
import Link from "next/link";
// the footer component, with a logo on the left side, social media icons on the right side, and a link to the privacy policy
// under this should be a form to subscribe to the newsletter
const Footer = () => {
  return (
    <footer className="mt-8 border-t-2 border-solid border-dark-slate-gray">
      <div className="flex flex-col items-center justify-between py-8 px-4 md:flex-row">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </Link>
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
      <NewsLetterForm />
    </footer>
  );
};

export default Footer;
