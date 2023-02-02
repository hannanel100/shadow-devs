import { Hero } from "../components";
import HowItWorks from "./HowItWorks";
import LeadingMentors from "./LeadingMentors";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 font-primary">
      <Hero />
      {/* cool section separator */}
      <HowItWorks />
      <LeadingMentors />
    </main>
  );
}
