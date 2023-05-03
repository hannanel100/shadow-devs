import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/AuthOptions";
import { User } from "@prisma/client";
import Profile from "./Profile";
import prisma from "@/lib/prisma";

const getUser = async ({ userId }: { userId: string }) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });
  return user;
};
const ProfilePage = async () => {
  // get session
  const session = await getServerSession(authOptions);
  console.log("🚀 ~ file: page.tsx:12 ~ ProfilePage ~ session:", session);
  let user: User | null = null;
  if (!!session?.user) {
    user = await getUser({ userId: session?.user?.userId });
    console.log("🚀 ~ file: page.tsx:9 ~ ProfilePage ~ user:", user);
  } else {
    return <div>Not logged in</div>;
  }
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};

export default ProfilePage;
