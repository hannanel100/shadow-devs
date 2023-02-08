"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

const ProfilePage = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user?.name}
      <Image
        src={session?.user?.image ? session?.user?.image : "/devs.png"}
        alt="profile"
        width={100}
        height={100}
      />
    
    </div>
  );
};

export default ProfilePage;
