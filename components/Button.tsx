// a button component that takes a text and a function as props and returns a button with the text and the function as onClick event, and optionally a type prop to change the type of the button and an icon prop to add an icon to the button
//
// example:
// <Button text="login" onClick={login} type="submit" icon="github" />
//
import { FaGithub } from "react-icons/fa";
type ButtonProps = {
  text: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  icon?: string;
};
const Button = ({ text, onClick, type = "button", icon }: ButtonProps) => {
  // tailwindcss classes for each type of button
  const buttonClasses = {
    button: "bg-slate-900 hover:bg-slate-700",
    reset: "bg-gray-500 hover:bg-gray-700",
    submit: "bg-green-500 hover:bg-green-700",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        type ? buttonClasses[type] : ""
      }  flex items-center rounded-3xl py-2 px-4 font-bold uppercase text-white`}
    >
      {text}
      {icon && <FaGithub data-testid="icon" className="ml-2" />}
    </button>
  );
};

export default Button;
