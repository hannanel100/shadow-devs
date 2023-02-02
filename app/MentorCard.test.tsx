import MentorCard from "./MentorCard";
import { render, screen } from "@testing-library/react";
import { Metrophobic } from "@next/font/google";
const mentor = {
  avatar: "https://avatars.githubusercontent.com/u/1500684?v=4",
  name: "Michael Jackson",
  description:
    "Michael is a full stack developer, speaker and teacher. He's worked on a lot of cool projects like react-easy-state, react-spring, react-kawaii, react-particles-js, react-joyride and many more. He's currently working at Formidable, a consultancy specializing in React and React Native.",
  tags: ["angular", "javascript", "typescript", "nodejs", "python"],
  location: "Berlin, Germany",
  rating: 4.9,
};
describe("testing the mentor card component", () => {
  it("should render the mentor card", () => {
    render(
      <MentorCard
        avatar={mentor.avatar}
        name={mentor.name}
        description={mentor.description}
        tags={mentor.tags}
        location={mentor.location}
        rating={mentor.rating}
      />
    );
    const card = screen.getByTestId(/mentor/i);
    expect(card).toBeInTheDocument();
  });
});
