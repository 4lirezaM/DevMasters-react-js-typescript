import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-12 bg-slate-50 text-2xl font-semibold dark:bg-slate-950">
      <img
        className="h-[400px] w-full"
        src="/images/notfound/404-page-not-found.svg"
        alt="notfound"
      />
      <Link to="/" className="rounded bg-sky-400 px-3 py-1 hover:bg-sky-500">
        Go to Homepage
      </Link>
    </div>
  );
}

export default NotFound;
