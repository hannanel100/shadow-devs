"use client";
import { useSession } from "next-auth/react";

import Form from "./Form";

// create list of tags based on the tags ENUM

const NewUser = () => {
  const { data: session } = useSession();

  return (
    <div className="mt-8 flex flex-col items-center gap-12">
      <h1 className="text-3xl">
        Welcome, {session?.user?.name?.split(" ")[0]}!
      </h1>
      <h3 className="text-xl">Lets get you set up</h3>
      {/* a form with fields:  location, bio, tags and a role switch - mentor or mentee*/}
      <Form />
    </div>
  );
};

export default NewUser;
