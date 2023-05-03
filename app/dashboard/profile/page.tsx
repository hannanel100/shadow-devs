"use client";
// this should display the user's profile page, name, email, image (if they have one)
// also, allow the user to edit their profile, add a bio, add a profile picture

// Path: app/dashboard/profile/page.tsx

// Compare this snippet from app/dashboard/layout.tsx:
import Image from "next/image";
import { useSession } from "next-auth/react";
const ProfilePage = () => {
  const { data: session } = useSession();
  
  console.log("🚀 ~ file: page.tsx:12 ~ ProfilePage ~ session:", session);
  return (
    <div>
      <h2 className="text-2xl">{session?.user?.name}</h2>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.bio}</p>
      <p>{session?.user?.location}</p>
      <div>
        {session?.user?.tags?.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>

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
