function Searchinput() {
  return (
    <>
      <div className="flex w-full items-center justify-between bg-white px-3 py-2 dark:bg-slate-900">
        <input
          className="block text-black outline-none placeholder:text-sm placeholder:font-thin dark:bg-slate-900 dark:text-slate-50 dark:placeholder:text-slate-50"
          type="text"
          placeholder="search your course ..."
        />
        <button className="block">
          <i className="fas fa-search fa-lg block"></i>
        </button>
      </div>
    </>
  );
}

export default Searchinput;
