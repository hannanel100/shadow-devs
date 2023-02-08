import { Mentor } from "@/types/mentor";
import React from "react";
import MentorCard from "./MentorCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const LeadingMentors = () => {
  // mock data for the 6 leading mentors, avatar, name, bio, tags, location and rating
  const leadingMentors: Mentor[] = [
    {
      image: "https://avatars.githubusercontent.com/u/1223799?v=4",
      name: "Sara Vieira",
      bio: "Sara is a full stack developer, speaker and teacher. She's worked on a lot of cool projects like react-easy-state, react-spring, react-kawaii, react-particles-js, react-joyride and many more. She's currently working at Formidable, a consultancy specializing in React and React Native.",
      tags: ["react", "javascript", "typescript", "nodejs"],
      location: "Berlin, Germany",
      rating: 4.9,
    },
    {
      image: "https://avatars.githubusercontent.com/u/1863771?v=4",
      name: "Kent C. Dodds",
      bio: "Kent is a full stack developer, speaker and teacher. He's worked on a lot of cool projects like react-easy-state, react-spring, react-kawaii, react-particles-js, react-joyride and many more. He's currently working at Formidable, a consultancy specializing in React and React Native.",
      tags: ["react", "javascript", "typescript", "nodejs"],
      location: "Berlin, Germany",
      rating: 4.9,
    },
    {
      image: "https://avatars.githubusercontent.com/u/1500684?v=4",
      name: "Michael Jackson",
      bio: "Michael is a full stack developer, speaker and teacher. He's worked on a lot of cool projects like react-easy-state, react-spring, react-kawaii, react-particles-js, react-joyride and many more. He's currently working at Formidable, a consultancy specializing in React and React Native.",
      tags: ["angular", "javascript", "typescript", "nodejs", "python"],
      location: "Berlin, Germany",
      rating: 4.9,
    },
    {
      image: "https://avatars.githubusercontent.com/u/263385?v=4",
      name: "Kent C. Dodds",
      bio: "Kent is a full stack developer, speaker and teacher. He's worked on a lot of cool projects like react-easy-state, react-spring, react-kawaii, react-particles-js, react-joyride and many more. He's currently working at Formidable, a consultancy specializing in React and React Native.",
      tags: ["react", "javascript", "typescript", "nodejs"],
      location: "Berlin, Germany",
      rating: 4.9,
    },
    {
      image: "https://avatars.githubusercontent.com/u/1500684?v=4",
      name: "Michael Jackson",
      bio: "Michael is a full stack developer, speaker and teacher. He's worked on a lot of cool projects like react-easy-state, react-spring, react-kawaii, react-particles-js, react-joyride and many more. He's currently working at Formidable, a consultancy specializing in React and React Native.",
      tags: ["react", "javascript", "typescript", "nodejs"],
      location: "Berlin, Germany",
      rating: 4.9,
    },
    {
      image: "https://avatars.githubusercontent.com/u/263385?v=4",
      name: "Kent C. Dodds",
      bio: "Kent is a full stack developer, speaker and teacher. He's worked on a lot of cool projects like react-easy-state, react-spring, react-kawaii, react-particles-js, react-joyride and many more. He's currently working at Formidable, a consultancy specializing in React and React Native.",
      tags: ["react", "javascript", "nodejs", "testing"],
      location: "Berlin, Germany",
      rating: 4.9,
    },
  ];
  // const leadingMentors = await prisma.mentor.findMany();
  return (
    <div className="mx-4 flex flex-col items-center justify-center gap-8 rounded-lg bg-dark-slate-gray py-8">
      <h2 className="text-4xl font-bold text-white">Our Leading Mentors</h2>
      <div className="flex flex-wrap items-center justify-center gap-4  py-4 px-6">
        {leadingMentors.map((mentor, index) => {
          return <MentorCard key={index} {...mentor} />;
        })}
      </div>
    </div>
  );
};

export default LeadingMentors;
