function CourseShortLink() {
  return (
    <div className="my-1 hidden flex-col items-center justify-center bg-slate-50 p-2 lg:flex dark:bg-slate-900">
      <h3 className="text-xl font-semibold">Quick Access Link</h3>
      <div className="m-2 flex w-full items-center justify-between rounded-md border-2 border-dotted border-sky-500 bg-blue-50 p-2 text-sky-600 hover:cursor-pointer dark:bg-sky-500/10">
        <span>DevMasters.com/?6565</span>
        <i className="fa-regular fa-clipboard text-[20px]"></i>
      </div>
    </div>
  );
}

export default CourseShortLink;
