import { useEffect } from "react";
import Button from "../../../../ui/Button.tsx";
import useAppContext from "../../../../Hooks/useAppContext.tsx";

type BtnType = { btnType: "secondarySquare" | "secondary" };

function DarkModeButton({ btnType }: BtnType) {
  const state = useAppContext();

  const { darkMode, toggledarkMode } = state;
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Button handler={toggledarkMode} type={btnType}>
      {!darkMode ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-regular fa-sun"></i>
      )}
    </Button>
  );
}

export default DarkModeButton;
