import React from "react";
import { FormState, Form } from "@/types/forms";

const NewLetterFormHeader = ({ state, message }: FormState) => {
  if (state === Form.Loading) {
    return <h3 className="text-xl font-bold">Loading...</h3>;
  }
  if (state === Form.Success) {
    return <h3 className="text-xl font-bold">Success!</h3>;
  }
  if (state === Form.Error) {
    return <h3 className="text-xl font-bold">{message}</h3>;
  }
  return <h3 className="text-xl font-bold">Subscribe to our Newsletter...</h3>;
};

export default NewLetterFormHeader;
