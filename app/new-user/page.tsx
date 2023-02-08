"use client";
import { ChangeEvent, useState } from "react";
import { Button, Input } from "@/components";
import { useSession } from "next-auth/react";
const NewUser = () => {
  const [tags, setTags] = useState<string>("");
  const [tagsArray, setTagsArray] = useState<string[]>([]);
  const { data: session } = useSession();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    const tempTagsArray = tags.split(",");
    tempTagsArray.map((tag) => tag.trim());
    setTagsArray(tempTagsArray);
  };
  const handleTags = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    console.log("🚀 ~ file: page.tsx:15 ~ handleTags ~ value", value);
    setTags(value);
  };
  return (
    <div className="mt-8 flex flex-col items-center gap-12">
      <h1 className="text-3xl">
        Welcome, {session?.user?.name?.split(" ")[0]}!
      </h1>
      <h3 className="text-xl">Lets get you set up</h3>

      {/* <Form /> */}
      {/* a form with fields:  location, bio, tags and a role switch - mentor or mentee*/}

      <form onSubmit={handleSubmit} className="flex flex-col gap-8">
        <div className="flex justify-between gap-4">
          <label htmlFor="location">Location</label>
          <Input type="text" name="location" />
        </div>
        <div className="flex justify-between gap-4">
          <label htmlFor="bio">Bio</label>
          <Input type="text" name="bio" />
        </div>
        <div className="flex justify-between gap-4">
          <label htmlFor="tags">Tags</label>
          <Input type="text" name="tags" value={tags} onChange={handleTags} />
        </div>
        <div className="flex justify-between gap-4">
          <label htmlFor="role">Role</label>
          <Input type="text" name="role" />
        </div>
        <Button type="submit" text="Submit" />
      </form>
    </div>
  );
};

export default NewUser;
