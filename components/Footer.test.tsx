import Footer from "./Footer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("testing the footer component", () => {
  const user = userEvent.setup();

  it("should render the footer", () => {
    render(<Footer />);
    const logo = screen.getByAltText("logo");
    const form = screen.getByTestId("form");
    const input = screen.getByPlaceholderText("Enter your email");
    const button = screen.getByRole("button", { name: /subscribe/i });
    expect(logo).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
