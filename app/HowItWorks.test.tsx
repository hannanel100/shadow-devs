import HowItWorks from "./HowItWorks";
import { render, screen } from "@testing-library/react";

describe("testing the how it works component", () => {
  it("should render the how it works component", () => {
    render(<HowItWorks />);
    const heading = screen.getByText(/how it works/i);
    const subheading1 = screen.getAllByText(/find a mentor/i)[0];
    const subheading2 = screen.getAllByText(/connect with them/i)[0];
    const subheading3 = screen.getAllByText(/grow together/i)[0];
    const description1 = screen.getByText(
      /find a mentor who can help you with your career/i
    );
    const description2 = screen.getByText(
      /connect with them and learn from their experience/i
    );
    const description3 = screen.getByText(
      /grow together and become a better developer/i
    );
    expect(heading).toBeInTheDocument();
    expect(subheading1).toBeInTheDocument();
    expect(subheading2).toBeInTheDocument();
    expect(subheading3).toBeInTheDocument();
    expect(description1).toBeInTheDocument();
    expect(description2).toBeInTheDocument();
    expect(description3).toBeInTheDocument();
  });
});
