import "./globals.css";
import { Heebo, Barlow } from "@next/font/google";
import { Navbar, Footer } from "../components";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heebo.className} ${barlow.className}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <div className="mx-auto flex flex-col items-center justify-center">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
