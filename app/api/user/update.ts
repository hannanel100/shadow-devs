// api endpoint to update user data

import { getServerSession } from "next-auth/next";
import { PrismaClient, Tags } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]/route";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  console.log("🚀 ~ file: update.ts:14 ~ session", session);
  if (!session) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  const { bio, tags, location, role, name } = req.body;
  const tempRole = role.toUpperCase();
  //   tags should be from enum, according to prisma schema
  const tempTags = tags.map((tag: string) => tag.toUpperCase()) as Tags[];
  const user = await prisma.user.update({
    where: {
      name: session?.user?.name,
    },
    data: {
      bio,
      tags: tempTags,
      location,
      role: tempRole,
    },
  });
  if (!user) {
    res.status(400).json({ message: "Bad request" });
    return;
  }
  res.status(200).json(user);
}
