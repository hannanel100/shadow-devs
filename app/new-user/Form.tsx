"use client";
import { useEffect } from "react";
import { Switch } from "@headlessui/react";
import { Tags } from "@prisma/client";
import { Button, Input } from "../../components";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import CustomSwitch from "../../components/CustomSwitch";
import axios from "axios";

//function for updating users details, to be used in react-query
const updateUser = async (data: any) => {
  const { role } = data;
  const updatedData = {
    ...data,
    role: role === true ? "mentor" : "mentee",
  };

  const res = await axios.post("/api/user/update", updatedData);
  return res;
};

const tagsList = Object.values(Tags).map((tag, index) => {
  return { name: tag, id: index };
});

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit: any = async (data: any) => {
    const res = await updateUser(data);
    console.log("🚀 ~ file: Form.tsx:50 ~ Form ~ json", res);
  };
  useEffect(() => {
    errors ? console.log("errors: ", errors) : console.log("no errors");
  }, [errors]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor="location">
          Location<span className="text-red-500">*</span>
        </label>
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
              required={true}
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
        <label htmlFor="tags" className="flex flex-col">
          <span>
            Tags<span className="text-red-500">*</span>
          </span>
          <span className="text-xs">(At least one...)</span>
        </label>

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
