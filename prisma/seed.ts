import { PrismaClient, User } from "@prisma/client";
import { Mentor } from "@/types/mentor";
import { createId as cuid } from "@paralleldrive/cuid2";
const prisma = new PrismaClient();

const leadingMentors = [
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

async function main() {
  // seed mentors with leadingMentors array, according to schema
  // for (const mentor of leadingMentors) {
  //   await prisma.mentor.create({
  //     data: mentor,
  //   });
  // }
  // add user
  const users: User[] = [];
  for (let i = 1; i <= 10; i++) {
    users.push({
      name: `User ${i}`,
      email: `user${i}@example.com`,
      role: "MENTOR",
      id: cuid(),
      emailVerified: null,
      image: null,
      rating: null,
      location: null,
      bio: null,
      tags: [],
    });
  }
  await prisma.user.createMany({
    data: users,
  });
}

main()
  .then(async () => {
    console.log("seeded");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
