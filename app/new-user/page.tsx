"use client";
import { ChangeEvent, Fragment, useState } from "react";
import { Button, Input } from "@/components";
import { useSession } from "next-auth/react";
import { Combobox, Listbox, Switch } from "@headlessui/react";
import { BsCheck } from "react-icons/bs";
import { Tags } from "@prisma/client";

// create list of tags based on the tags ENUM

const tagsList = Object.values(Tags).map((tag, index) => {
  return { name: tag, id: index };
});
const NewUser = () => {
  const [query, setQuery] = useState<string>("");
  const [tagsArray, setTagsArray] = useState<string[]>([]);
  const [role, setRole] = useState<"mentor" | "mentee">("mentee");
  const [bio, setBio] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [enabled, setEnabled] = useState(false);
  const { data: session } = useSession();
  const filteredTags =
    query === ""
      ? tagsList
      : tagsList.filter((tag) => {
          return tag.name.toLowerCase().includes(query.toLowerCase());
        });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("role", role);
    console.log("bio", bio);
    console.log("location", location);
    console.log("tags", tagsArray);
    const tempRole = enabled ? "mentor" : "mentee";
    setRole(tempRole);
    const data = {
      role: tempRole,
      bio,
      location,
      tags: tagsArray.map((tag: string) => tag.toUpperCase()),
    };
    const url = "/api/user/update";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json);
    // const tempTagsArray = tags.split(",");
    // tempTagsArray.map((tag) => tag.trim());
    // setTagsArray(tempTagsArray);
  };
  const handleTags = (tags: string[]) => {
    setTagsArray(tags);
    setQuery("");
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
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="location">Location</label>
          <Input
            type="text"
            name="location"
            placeholder="Country, City"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="flex items-start justify-between gap-4">
          <label htmlFor="bio">Bio</label>
          {/* textarea in the style of input */}
          <textarea
            name="bio"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            cols={30}
            rows={10}
            placeholder="Tell us about yourself..."
            className="w-60 rounded-lg border-2
            border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-mountain-majesty"
          ></textarea>
        </div>
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="tags">Tags</label>

          {/* Combobox with multiple selected tags, in the style of the Input component */}
          <Combobox
            as="div"
            className="relative"
            value={tagsArray}
            onChange={(tags) => handleTags(tags)}
            multiple
          >
            {({ open }) => (
              <>
                <Combobox.Input
                  onChange={(e) => setQuery(e.target.value)}
                  as={Fragment}
                  displayValue={(tag: any) => tag?.name}
                >
                  <Input
                    type="text"
                    name="tags"
                    placeholder={
                      tagsArray.length > 0
                        ? tagsArray.join(", ")
                        : "Choose your interests..."
                    }
                  />
                </Combobox.Input>
                {open && (
                  <Combobox.Options
                    static
                    className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    {filteredTags.map((tag) => (
                      <Combobox.Option
                        key={tag.id}
                        value={tag.name}
                        className={({ active }) =>
                          `${
                            active
                              ? "bg-purple-mountain-majesty text-white"
                              : "text-gray-900"
                          }
                                    relative cursor-default select-none py-2 pl-10 pr-4`
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`${
                                selected ? "font-medium" : "font-normal"
                              } block truncate`}
                            >
                              {tag.name}
                            </span>
                            {selected ? (
                              <span
                                className={`${
                                  active
                                    ? "text-white"
                                    : "text-purple-mountain-majesty"
                                }
                                                absolute inset-y-0 left-0 flex items-center pl-3`}
                              >
                                <BsCheck
                                  className="h-5 w-5 "
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                )}
              </>
            )}
          </Combobox>
        </div>
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="role">Role</label>
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-4">Junior</Switch.Label>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                name="role"
                className={`${
                  enabled ? "bg-goldenrod" : "bg-gray-300"
                } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-purple-mountain-majesty`}
              >
                <span className="sr-only">Enable notifications</span>
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
              <Switch.Label className="ml-4">Mentor</Switch.Label>
            </div>
          </Switch.Group>
        </div>
        <div className="flex w-full items-center justify-center">
          <Button type="submit" text="Submit" icon="save" />
        </div>
      </form>
    </div>
  );
};

export default NewUser;
