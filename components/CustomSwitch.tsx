import React from "react";
import { Switch } from "@headlessui/react";
import { useController } from "react-hook-form";

const CustomSwitch = (props: any) => {
  const {
    field: { value, onChange },
  } = useController(props);
  console.log(value);
  return (
    <Switch
      checked={Boolean(value)}
      onChange={onChange}
      className={`${
        Boolean(value) ? "bg-goldenrod" : "bg-gray-300"
      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-purple-mountain-majesty`}
    >
      <span className="sr-only">Switch </span>
      <span
        className={`${
          Boolean(value) ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  );
};

export default CustomSwitch;
