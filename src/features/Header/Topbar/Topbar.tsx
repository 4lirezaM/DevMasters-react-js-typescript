import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { shuffleArray } from "../../../utils/helpers.ts";
import {
  fetchTopbarLinks,
  TopBarLinks,
} from "../../../services/header/headerAPI.ts";

// Usage:
function Topbar() {
  let shuffledArray: TopBarLinks[] = [];
  const [topbarLinks, setTopbarLinks] = useState<TopBarLinks[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTopbarLinks();
        setTopbarLinks(data);
      } catch (error) {
        console.log("topbar fetch error", error);
      }
    };

    fetchData();
  }, []);
  if (topbarLinks.length) {
    shuffledArray = shuffleArray(topbarLinks);
  }
  return (
    <div className="hidden items-center justify-between bg-blue-50 px-2 py-4 sm:flex dark:bg-slate-950">
      <div className="block h-5 overflow-hidden">
        <ul className="flex flex-wrap items-center justify-start gap-5">
          {shuffledArray.map((item) => {
            return (
              <li key={item._id}>
                <Link to="#" className="hover:text-sky-600">
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center justify-center pl-10">
        <a
          href="https://github.com/4lirezaM"
          target="_blank"
          className="ml-1 flex items-center justify-center gap-1 hover:text-sky-600 dark:hover:text-sky-400"
        >
          <i className="fa-brands fa-xl fa-square-github"></i>
          Github
        </a>
      </div>
    </div>
  );
}

export default Topbar;
