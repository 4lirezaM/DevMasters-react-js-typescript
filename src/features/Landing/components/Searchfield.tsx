import { useState } from "react";
import { useNavigate } from "react-router";

function Searchfield() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    navigate(`/search`);
  }
  return (
    <div className="mt-10 w-full px-2 sm:px-10 md:w-[500px] md:px-0">
      <form onSubmit={handleSubmit}>
        <div className="flex w-full items-center justify-between rounded-sm bg-white px-1 py-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What do you want to explore?"
            className="w-full pl-1 pr-1 text-black outline-none placeholder:text-slate-700"
          />
          <button
            type="submit"
            className="flex aspect-square w-8 items-center justify-center rounded-sm bg-sky-600 text-xl hover:cursor-pointer"
          >
            <i className="fas fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Searchfield;
