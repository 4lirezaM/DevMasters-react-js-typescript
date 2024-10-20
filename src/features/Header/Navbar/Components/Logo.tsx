import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        className="min-w-16 max-w-16 md:mr-4"
        src="/Logo/Untitled-2.png"
        alt="Logo"
      />
    </Link>
  );
}

export default Logo;
