import { useState } from "react";
import { useNavigate } from "react-router";

function Searchinput() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search/${searchQuery}`);
    }
  }
  return (
    <>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex w-full items-center justify-between bg-white px-3 py-2 dark:bg-slate-900">
          <input
            className="block text-black outline-none placeholder:text-sm placeholder:font-thin dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-50"
            type="text"
            placeholder="search your course ..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="block" type="submit">
            <i className="fas fa-search fa-lg block"></i>
          </button>
        </div>
      </form>
    </>
  );
}

export default Searchinput;
