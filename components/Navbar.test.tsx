import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react";
import AuthContext from "../app/AuthContext";
describe("testing the navbar componet", () => {
  it("should render the navbar", () => {
    render(
      <AuthContext>
        <Navbar />
      </AuthContext>
    );
    const logo = screen.getByAltText("logo");
    const mentors = screen.getByText("Mentors");
    const resources = screen.getByText("Resources");
    const login = screen.getByRole("button", { name: /login with github/i });
    expect(logo).toBeInTheDocument();
    expect(mentors).toBeInTheDocument();
    expect(resources).toBeInTheDocument();
    expect(login).toBeInTheDocument();
  });
});
