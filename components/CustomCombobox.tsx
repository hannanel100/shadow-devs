"use client";
import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { BsCheck, BsArrowUp } from "react-icons/bs";
import { ControllerRenderProps } from "react-hook-form";
import { Tags } from "@prisma/client";

const tagsList = Object.values(Tags).map((tag, index) => {
  return { name: tag, id: index };
});

export const CustomCombobox = React.forwardRef<
  HTMLInputElement,
  ControllerRenderProps
>(function ComboboxName(props, ref) {
  const [query, setQuery] = useState("");

  const tagList =
    query === ""
      ? tagsList
      : tagsList.filter((tag) =>
          tag.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Combobox
      defaultValue={props.value}
      onChange={props.onChange}
      refName={props.name}
    >
      <>
        <div className="relative mt-1 flex-1">
          <Combobox.Input
            className="w-60 rounded-lg border-2
              border-gray-300 p-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-mountain-majesty"
            displayValue={(tag: any) => tag.name}
            onChange={(event) => setQuery(event.target.value)}
          />

          <Combobox.Button className="absolute inset-0  flex items-center " />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {tagList.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                tagList.map((tag) => (
                  <Combobox.Option
                    key={tag.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={tag}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-extrabold" : "font-normal"
                          }`}
                        >
                          {tag.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <BsCheck className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </>
    </Combobox>
  );
});

export default CustomCombobox;
