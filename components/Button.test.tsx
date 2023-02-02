// a test for the button component

import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("testing the button component", () => {
  it("should render the button", () => {
    render(<Button text="login" onClick={() => {}} />);
    const button = screen.getByText("login");
    expect(button).toBeInTheDocument();
  });
  it("should render the button with icon", () => {
    render(<Button text="login" onClick={() => {}} icon="github" />);
    const button = screen.getByText("login");
    const icon = screen.getByTestId("icon");
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
  it("should render the button with type", () => {
    render(<Button text="login" onClick={() => {}} type="submit" />);
    const button = screen.getByText("login");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "submit");
  });
});
