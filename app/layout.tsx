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
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en" className={`${heebo.className} ${barlow.className}`}>
      <body>
        <AuthContext session={session}>
          <Navbar />
          <div className="mx-auto flex flex-col items-center justify-center">
            {children}
          </div>
          <Footer />
        </AuthContext>
      </body>
    </html>
  );
}
