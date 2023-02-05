import NewsLetterForm from "./NewsLetterForm";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("testing the news letter form component", () => {
  const user = userEvent.setup();
  it("should render the news letter form component", () => {
    render(<NewsLetterForm />);
    const input = screen.getByPlaceholderText(/enter your email/i);
    const button = screen.getByRole("button", { name: /subscribe/i });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it("should render the news letter form component with email", () => {
    render(<NewsLetterForm />);
    const input = screen.getByPlaceholderText(/enter your email/i);
    expect(input).toBeInTheDocument();
  });
  it("should save the email in the input", async () => {
    render(<NewsLetterForm />);
    const input = screen.getByPlaceholderText(/enter your email/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");
    await user.type(input, "email@email.com");
    expect(input).toHaveValue("email@email.com");
  });
  it("should submit the form", async () => {
    render(<NewsLetterForm />);
    const input = screen.getByPlaceholderText(/enter your email/i);
    const button = screen.getByRole("button", { name: /subscribe/i });
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    await user.type(input, "email@email.com");
    await user.click(button);
    expect(input).toHaveValue("");
  });
});
