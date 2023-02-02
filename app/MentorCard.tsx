// a component to display a mentor card, which will be used in the leading mentors section of the home page
// this will include the avatar of the mentor, in a circle, his or hers name, a short description, tags, and location

import { Mentor } from "@/types/mentor";
import Image from "next/image";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
// the mentor card will also have a rating, which will be displayed as stars
const MentorCard = ({
  avatar,
  name,
  description,
  tags,
  location,
  rating,
}: Mentor) => {
  return (
    <article
      data-testid="mentor"
      className="flex min-w-[400px] max-w-sm flex-1 flex-col items-center  gap-4 self-stretch transition duration-300 ease-in-out hover:scale-105"
    >
      <div className="grid w-full place-content-center rounded-lg bg-[url('/devs.png')] bg-bottom py-4">
        {/* the avatar will be displayed in a circle */}
        <Image
          src={avatar}
          alt={name}
          width={100}
          height={100}
          className="mx-auto content-center rounded-full"
        />
        <h3 className="text-xl text-white">{name}</h3>
      </div>

      <div className="flex flex-col items-center   gap-4 rounded-b-3xl bg-opal p-4 shadow-xl">
        <p>{description}</p>
        {/* the tags will be displayed as a list of badges */}
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li key={index} className="rounded-lg bg-goldenrod px-2 py-2">
              {tag}
            </li>
          ))}
        </ul>
        <p className="font-bold">{location}</p>
        {/* the rating will be displayed as stars */}
        <div className="flex gap-2">
          {rating
            ? Array.from({ length: rating }, (_, index) => (
                <span key={index}>
                  <BsStarFill color="#E6AF2E" />
                </span>
              ))
            : null}
        </div>
      </div>
    </article>
  );
};

export default MentorCard;
