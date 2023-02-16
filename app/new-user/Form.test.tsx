//test Form.tsx component

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import AuthContext from "../AuthContext";
describe("testing the form component", () => {
  it("should render the form", () => {
    render(
      <AuthContext>
        <Form />
      </AuthContext>
    );
    const location = screen.getByLabelText(/location/i);
    const bio = screen.getByLabelText(/bio/i);
    const tags = screen.getByLabelText(/tags/i);
    const submit = screen.getByRole("button", { name: /submit/i });
    expect(location).toBeInTheDocument();
    expect(bio).toBeInTheDocument();
    expect(tags).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
  });
  it("should submit the form", async () => {
    render(
      <AuthContext>
        <Form />
      </AuthContext>
    );

    const location = screen.getByLabelText(/location/i);
    const bio = screen.getByLabelText(/bio/i);
    const tags = screen.getByLabelText(/tags/i);
    const submit = screen.getByRole("button", { name: /submit/i });
    await userEvent.type(location, "Berlin, Germany");
    await userEvent.type(bio, "I am a web developer");
    await userEvent.type(tags, "react, javascript, typescript");
    await userEvent.click(submit);
    expect(location).toHaveValue("Berlin, Germany");
    expect(bio).toHaveValue("I am a web developer");
    expect(tags).toHaveValue("react, javascript, typescript");
  });
});
