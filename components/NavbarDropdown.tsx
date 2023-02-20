"use client";
// a component with a dropdown menu, when clicking on avatar image, the dropdown is based on headless-ui menu

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

import { getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { SignOut } from "@/app/actions";
import { useSession } from "next-auth/react";
import { FaChevronDown, FaChevronUp, FaHome } from "react-icons/fa";
import { BsPerson, BsPersonFill, BsGear, BsGearFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Menu, Transition } from "@headlessui/react";

const NavbarDropdown = () => {
  const { data: session, status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              className={`inline-flex w-full items-center justify-center gap-4`}
            >
              <Image
                src={session ? session?.user?.image : ""}
                width={40}
                height={40}
                alt="profile image"
                className="cursor-pointer rounded-full ring-2 ring-purple-mountain-majesty"
              />
              <FaChevronDown className="inline-block" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/"
                      className={`${
                        active
                          ? "bg-dark-slate-gray text-white"
                          : "  text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <FaHome
                          className="mr-2 h-5 w-5 text-goldenrod"
                          aria-hidden="true"
                        />
                      ) : (
                        <FaHome className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      Home
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/dashboard"
                      className={`${
                        active
                          ? "bg-dark-slate-gray text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <BsPersonFill
                          className="mr-2 h-5 w-5 text-goldenrod"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsPerson className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      Profile
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/settings"
                      className={`${
                        active
                          ? "bg-dark-slate-gray text-white"
                          : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <BsGearFill
                          className="mr-2 h-5 w-5 text-goldenrod"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsGear className="mr-2 h-5 w-5" aria-hidden="true" />
                      )}
                      Settings
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() =>
                        signOut({ callbackUrl: "http://localhost:3000" })
                      }
                      className={`${
                        active
                          ? "bg-dark-slate-gray text-white"
                          : "text-red-500"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <FiLogOut
                          className="mr-2 h-5 w-5 text-goldenrod"
                          aria-hidden="true"
                        />
                      ) : (
                        <FiLogOut
                          className="mr-2 h-5 w-5 text-red-500"
                          aria-hidden="true"
                        />
                      )}
                      Sign-Out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : status === "loading" ? (
        <div>loading...</div>
      ) : (
        <div>not authenticated</div>
      )}
    </div>
  );
};

export default NavbarDropdown;
