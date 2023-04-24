// api endpoint to get a mentor's data by id

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("🚀 ~ file: get.ts:12 ~ req:", req);

  const { id } = req.query;
  const user = await prisma.user.findUnique({
    where: {
      id: id as string,
    },
  });
  if (!user) {
    res.status(400).json({ message: "Bad request" });
    return;
  }
  res.status(200).json(user);
}
