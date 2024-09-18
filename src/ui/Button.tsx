import { ReactNode } from "react";
import { Link, Path } from "react-router-dom";

type ButtonProps = {
  classname?: string;
  children: ReactNode;
  disabled?: boolean;
  to?: Partial<Path> | string;
  type?: "secondary" | "secondarySquare";
  handler?: () => void;
};

function Button({
  classname,
  children,
  disabled,
  to,
  type,
  handler,
}: ButtonProps) {
  const base = ` flex justify-center items-center  rounded transition-colors duration-300  active:outline-none   disabled:cursor-not-allowed h-8 px-2 hover:text-sky-600 hover:border-sky-600`;

  const styles = {
    secondary:
      base +
      "  bg-white dark:bg-transparent border-2 border-slate-700 dark:border-slate-300 border-solid ",
    secondarySquare:
      base +
      " aspect-square h-8 w-8 bg-white  dark:bg-transparent border-2 border-slate-700 dark:border-slate-300 border-solid ",
  };

  if (to)
    return (
      <Link
        onClick={handler}
        to={to}
        className={`${type ? styles[type] : base} flex ${classname ? classname : ""} `}
      >
        {children}
      </Link>
    );

  return (
    <button
      onClick={handler}
      disabled={disabled}
      className={`${type ? styles[type] : base} ${classname ? classname : ""}`}
    >
      {children}
    </button>
  );
}

export default Button;
