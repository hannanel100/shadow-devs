import React from "react";
import prisma from "@/lib/prismadb";
import { User } from "@prisma/client";
import { Button } from "@/components";
import Link from "next/link";
const Mentors = async () => {
  const mentors: User[] = await prisma.user.findMany({
    where: {
      role: "MENTOR",
    },
  });
  console.log("🚀 ~ file: page.tsx:10 ~ Mentors ~ mentors:", mentors);
  return (
    <div className="flex flex-col gap-8">
      Mentors Page
      <div className="flex justify-between gap-4">
        <h3>Name</h3> <p>Location</p> <p>View Profile</p>
      </div>
      {/* {mentors?.map((mentor: User) => (
        <div key={mentor.id} className="flex justify-between gap-4">
          <h3 className="text-xl font-bold ">{mentor.name}</h3>
          <p>{mentor.location}</p>
          <Link href={`/mentors/${mentor.id}`}> View Profile</Link>
        </div>
      ))} */}
      WIP
    </div>
  );
};

export default Mentors;
