// a form component with an input and a button, the button should be disabled if the input is empty, once the user types something in the input the button should be enabled, once the user clicks the button the button should be disabled untill the form.state is success
"use client";
import React from "react";
import NewLetterFormHeader from "./NewLetterFormHeader";
import { useSubscribeToNewsletter } from "@/hooks/useSubscribeToNewletter";
import Button from "@/components/Button";
import { Form } from "@/types/forms";
import Input from "./Input";
const NewsLetterForm = () => {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();
  console.log(inputEl.current?.value);
  return (
    <div className="flex flex-col gap-8 py-8 px-4 ">
      <div className="flex items-center gap-4">
        <NewLetterFormHeader state={form.state} message={form.message} />
      </div>
      <div className="flex items-center gap-4">
        <form onSubmit={subscribe} className="flex gap-2" data-testid="form">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            // value={email}
            reference={inputEl}
            required={true}
          />
          <Button
            text="Subscribe"
            type="submit"
            disabled={form.state === Form.Loading}
            onClick={() => console.log("clicked")}
          />
        </form>
      </div>
    </div>
  );
};

export default NewsLetterForm;
