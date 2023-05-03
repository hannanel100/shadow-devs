"use client";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
const getUser = async ({ userId }: { userId: string }) => {
  const response = await fetch("http://localhost:3000/api/user", {
    method: "POST",
    body: JSON.stringify({ userId }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  //   console.log("🚀 ~ file: Profile.tsx:13 ~ getUser ~ user:", user);
  const { user } = response;
  return user;
};
const Profile = ({ user }: { user: User | null }) => {
  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: () => getUser({ userId: user?.id || "" }),
    initialData: user,
  });
  //  show all the user's info, use tailwind to make it look nice
  return (
    <div className="mx-auto w-full overflow-hidden rounded-lg bg-white shadow-lg lg:w-1/2">
      <div className="px-6 py-4">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-xl font-bold">
            {userData.name || "Anonymous"}
          </div>
          <div className="flex items-center">
            <div className="mr-2">
              <svg
                className="h-6 w-6 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.7 19.3l-1.4-1.4c-1.2 1.2-2.9 1.8-4.7 1.8s-3.5-.6-4.7-1.8l-1.4 1.4c1.5 1.5 3.5 2.3 5.7 2.3s4.2-.8 5.7-2.3zM12 17c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
              </svg>
            </div>
            <div className="text-sm text-gray-600">
              {userData.rating || "No rating"}
            </div>
          </div>
        </div>
        <p className="text-base text-gray-700">
          {userData.bio || "No bio provided."}
        </p>
        <div className="mt-4">
          <ul>
            <li>
              <strong>Email:</strong> {userData.email || "N/A"}
            </li>
            <li>
              <strong>Location:</strong> {userData.location || "N/A"}
            </li>
            <li>
              <strong>Tags:</strong> {userData?.tags.join(", ") || "N/A"}
            </li>
            {userData.mentorId && (
              <li>
                <strong>Mentor:</strong> {userData.mentorId}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
