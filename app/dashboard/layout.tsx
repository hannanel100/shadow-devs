"use client";

import Link from "next/link";
import AuthContext from "../AuthContext";
import Providers from "../providers";

// The navigation bar is a sidebar that contains a logo, a list of links, and a button to toggle the sidebar.

// The content area is a div that contains the content of the page.

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    //   a navbar at the top, with the following links: profile, requests, messages
    // underneath will be the content of the page, children
    <Providers>
      <div className="mt-20 flex flex-col">
        <div className="flex h-1/6 flex-col bg-gray-200">
          <nav className="flex ">
            <Link
              href="/dashboard/profile"
              className="flex flex-row justify-center"
            >
              Profile
            </Link>
            <Link
              href="/dashboard/requests"
              className="flex flex-row justify-center"
            >
              Requests
            </Link>
            <Link
              href="/dashboard/messages"
              className="flex flex-row justify-center"
            >
              Messages
            </Link>
          </nav>
        </div>
        <div className="flex h-5/6 flex-col">{children}</div>
      </div>
    </Providers>
  );
}
