// a button component that takes a text and a function as props and returns a button with the text and the function as onClick event, and optionally a type prop to change the type of the button and an icon prop to add an icon to the button
//
// example:
// <Button text="login" onClick={login} type="submit" icon="github" />
//
import { FaGithub, FaSave } from "react-icons/fa";
type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: "github" | "save";
  disabled?: boolean;
};
const Button = ({ text, onClick, type = "button", icon }: ButtonProps) => {
  // tailwindcss classes for each type of button
  const buttonClasses = {
    button: "bg-dark-purple hover:opacity-80",
    reset: "bg-goldenrod hover:opacity-80",
    submit: "bg-opal hover:opacity-80",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        type ? buttonClasses[type] : ""
      }  flex items-center justify-center rounded-3xl py-2 px-4 font-bold uppercase text-white transition duration-300 ease-in-out`}
    >
      {text}
      {icon === "github" ? (
        <FaGithub data-testid="icon" className="ml-2" />
      ) : icon === "save" ? (
        <FaSave data-testid="icon" className="ml-2" />
      ) : null}
    </button>
  );
};

export default Button;
