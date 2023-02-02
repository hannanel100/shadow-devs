import { Hero } from "../components";
import HowItWorks from "./HowItWorks";

export default function Home() {
  return (
    <main className="font-primary">
      <Hero />
      {/* cool section separator */}
      <HowItWorks />
    </main>
  );
}
