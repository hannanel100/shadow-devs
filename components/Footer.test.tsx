import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("testing the footer component", () => {
  it("should render the footer", () => {
    render(<Footer />);
    const heading = screen.getByText(/join our community/i);
    const description = screen.getByText(/join our discord server/i);
    const button = screen.getByRole("button", { name: /join discord/i });
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

