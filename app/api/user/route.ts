import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Tags } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/AuthOptions";
export async function POST(request: NextRequest) {
  // get user data from db
  const { userId } = await request.json();
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return NextResponse.json({ message: "Hello, world!", user });
}

export async function PATCH(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    NextResponse.json({ message: "Unauthorized", status: 401 });
  }
  const { userId, bio, tags, location, role, name } = await request.json();
  const tempRole = role.toUpperCase();
  //   tags should be from enum, according to prisma schema
  const tempTags = tags.map((tag: string) => tag.toUpperCase()) as Tags[];
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      bio,
      tags: tempTags,
      location,
      role: tempRole,
    },
  });
  if (!user) {
    NextResponse.json({ message: "Bad request", status: 400 });
  }
  NextResponse.json(user);
}
// api endpoint to update user data

// import { getServerSession } from "next-auth/next";
// import { PrismaClient, Tags } from "@prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";
// import { authOptions } from "../auth/[...nextauth]/route";
// const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const session = await getServerSession(req, res, authOptions);
//   console.log("🚀 ~ file: update.ts:14 ~ session", session);
//   if (!session) {
//     res.status(401).json({ message: "Unauthorized" });
//     return;
//   }

//   const { bio, tags, location, role, name } = req.body;
//   const tempRole = role.toUpperCase();
//   //   tags should be from enum, according to prisma schema
//   const tempTags = tags.map((tag: string) => tag.toUpperCase()) as Tags[];
//   const user = await prisma.user.update({
//     where: {
//       name: session?.user?.name,
//     },
//     data: {
//       bio,
//       tags: tempTags,
//       location,
//       role: tempRole,
//     },
//   });
//   if (!user) {
//     res.status(400).json({ message: "Bad request" });
//     return;
//   }
//   res.status(200).json(user);
// }
