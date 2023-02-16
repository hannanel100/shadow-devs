import { Hero } from "./";
import { render, screen } from "@testing-library/react";
import AuthContext from "@/app/AuthContext";

describe("testing the hero component", () => {
  it("should render the hero", () => {
    render(
      <AuthContext>
        <Hero />
      </AuthContext>
    );
    const heading = screen.getByText(/find your/i);
    const description = screen.getByTestId("description");
    const button = screen.getByRole("button", { name: /login with github/i });
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
