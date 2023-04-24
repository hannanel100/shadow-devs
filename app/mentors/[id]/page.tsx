// page for individual mentor

import axios from "axios";
import React from "react";
import prisma from "@/lib/prismadb";

interface MentorProps {
  params: {
    id: string;
  };
}
const Mentor = async ({ params }: MentorProps) => {
  try {
    const mentor = await prisma.user.findUnique({
      where: {
        id: params.id,
      },
    });
    console.log("🚀 ~ file: [id].tsx:10 ~ Mentor ~ mentor", mentor);
  } catch (e) {
    console.error("error: ", e);
  }
  return <div>{params.id}</div>;
};

export default Mentor;
