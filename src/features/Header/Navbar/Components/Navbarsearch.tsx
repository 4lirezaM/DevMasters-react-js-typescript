import Searchinput from "./Searchinput";
import Button from "../../../../ui/Button.tsx";

function Navbarsearch() {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button">
        <Button type="secondarySquare">
          <i className="fas fa-search"></i>
        </Button>
      </div>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact right-0 top-10 z-[1] w-60 rounded bg-white p-1 text-primary-content shadow dark:bg-slate-900"
      >
        <div className="card-body w-full flex-row bg-white !p-0 dark:bg-slate-900">
          <Searchinput />
        </div>
      </div>
    </div>
  );
}

export default Navbarsearch;
