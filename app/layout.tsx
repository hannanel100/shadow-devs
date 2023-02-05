"use client";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { Heebo, Barlow } from "@next/font/google";
import { Navbar, Footer } from "../components";

// async function getSession(cookie: string): Promise<Session> {
//   const response = await fetch(
//     `${process.env.LOCAL_AUTH_URL}/api/auth/session`,
//     {
//       headers: {
//         cookie,
//       },
//     }
//   );

//   const session = await response.json();

//   return Object.keys(session).length > 0 ? session : null;
// }

const heebo = Heebo({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--body-font",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["italic"],
  variable: "--navbar-font",
});
export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en" className={`${heebo.className} ${barlow.className}`}>
      <body>
        <SessionProvider session={session}>
          <Navbar />
          <div className="mx-auto flex flex-col items-center justify-center">
            {children}
          </div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
