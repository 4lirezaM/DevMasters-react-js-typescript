import Navbar from "./Navbar/Navbar.tsx";
import Topbar from "./Topbar/Topbar.tsx";
function Header() {
  return (
    <header className="border-b-1 border-solid border-slate-200 dark:border-slate-950">
      <Topbar />
      <Navbar />
    </header>
  );
}

export default Header;
