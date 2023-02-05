import axios from "axios";
import { useRef, useState } from "react";
import { FormState, Form } from "../types/forms";
export function useSubscribeToNewsletter() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef<HTMLInputElement>(null);

  async function subscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setForm({ state: Form.Loading });
    const url = "/api/newsletter";
    const data = {
      email: inputEl.current && inputEl.current.value,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.post(url, data, { headers });
      //   clear input if successful
      if (res.status === 201) {
        inputEl.current && (inputEl.current.value = "");
        setForm({
          state: Form.Success,
          message: `Success! You've been added to the list!`,
        });
      }

      //   TODO: properly type error
    } catch (error: any) {
      if (error) {
        setForm({
          state: Form.Error,
          message: error.response.data.error,
        });
        return;
      }
    }
  }

  return { subscribe, inputEl, form };
}
