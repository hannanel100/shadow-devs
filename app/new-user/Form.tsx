"use client";
import { useState, Fragment, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Combobox, Listbox, Switch } from "@headlessui/react";
import { BsCheck } from "react-icons/bs";
import { Tags } from "@prisma/client";
import { Button, Input } from "../../components";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CustomSwitch from "../../components/CustomSwitch";
// import CustomCombobox from "@/components/CustomCombobox";
type Inputs = {
  location: string;
  bio: string;
  tags: string[];
  role: "mentor" | "mentee";
};

const tagsList = Object.values(Tags).map((tag, index) => {
  return { name: tag, id: index };
});

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const [query, setQuery] = useState<string>("");
  const [tagsArray, setTagsArray] = useState<string[]>([]);
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
  const handleTags = (tags: string[]) => {
    setTagsArray(tags);
    setQuery("");
  };
  const onSubmit: any = (data: any) => {
    const { location, bio, tags, role } = data;

    const updatedRole = role === true ? "mentor" : "mentee";
    console.log("🚀 ~ file: Form.tsx:50 ~ Form ~ updatedRole", updatedRole);
    const updatedData = {
      ...data,
    };
    updatedData.role = updatedRole;
    console.log("🚀 ~ file: Form.tsx:54 ~ Form ~ updatedData", updatedData);
  };
  useEffect(() => {
    errors ? console.log("errors: ", errors) : console.log("no errors");
  }, [errors]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor="location">Location</label>
        <Controller
          name="location"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              name="location"
              placeholder="City, Country"
            />
          )}
        />
      </div>
      {errors.location && (
        <p className="text-red-500">This field is required</p>
      )}
      <div className="flex items-start justify-between gap-4">
        <label htmlFor="bio">Bio</label>
        {/* textarea in the style of input */}
        <textarea
          {...register("bio")}
          name="bio"
          id="bio"
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
        {/* <Controller
          name="contact"
          control={control}
          defaultValue={tagsList[0]}
          render={({ field }) => <CustomCombobox {...field} />}
        /> */}
        {/* checkboxes for all tags in tagList */}
        <ul className="flex w-60 flex-wrap gap-4">
          {tagsList.map((tag) => (
            <li key={tag.id} className="flex items-center gap-4">
              <input
                type="checkbox"
                className="h-4 w-4 rounded-xl accent-goldenrod  focus-visible:ring-purple-mountain-majesty"
                value={tag.name}
                {...register("tags", {
                  validate: (value) => value.length > 0,
                })}
              />
              <label>{tag.name}</label>
            </li>
          ))}
        </ul>
      </div>
      {errors.tags && <p className="text-red-500">Choose at least one tag!</p>}
      <div className="flex items-center justify-between gap-4">
        <label htmlFor="role">Role</label>
        <Switch.Group>
          <div className="flex items-center">
            <Switch.Label className="mr-4">Junior</Switch.Label>
            <CustomSwitch name="role" control={control} />
            <Switch.Label className="ml-4">Mentor</Switch.Label>
          </div>
        </Switch.Group>
      </div>
      <div className="flex w-full items-center justify-center">
        <Button
          type="submit"
          text="Submit"
          icon="save"
          disabled={Object.values(errors).length > 0 ? true : false}
        />
      </div>
    </form>
  );
};

export default Form;
