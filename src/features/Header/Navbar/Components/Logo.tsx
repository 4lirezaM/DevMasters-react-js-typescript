import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img
        className="mr-4 min-w-16 max-w-16"
        src="/Logo/Untitled-2.png"
        alt="Logo"
      />
    </Link>
  );
}

export default Logo;
