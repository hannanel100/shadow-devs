import React from "react";
import prisma from "@/lib/prismadb";
import { Mentor, User } from "@prisma/client";
const Mentors = async () => {
  const mentors: User[] = await prisma.user.findMany({
    where: {
      role: "MENTOR",
    },
  });
  return (
    <div>
      Mentors Page
      {mentors?.map((mentor: User) => (
        <div key={mentor.id}>{mentor.name}</div>
      ))}
    </div>
  );
};

export default Mentors;
