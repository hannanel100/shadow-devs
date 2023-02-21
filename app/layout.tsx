import "./globals.css";
import { Heebo, Barlow } from "@next/font/google";
import { Navbar, Footer } from "../components";
import AuthContext from "./AuthContext";
import { Session } from "next-auth";

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
      <body>
        <AuthContext>
          <div className="flex flex-col">
            <Navbar />
            <div className="mx-auto mt-28 flex flex-col items-center justify-center">
              {children}
            </div>
            <Footer />
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
