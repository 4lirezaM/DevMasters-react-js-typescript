import { Link } from "react-router-dom";
import styles from "./Submenu.module.css";
import { MenuLinks } from "../../../../services/header/headerAPI.ts";
type SubmenuType = "horizontal" | "vertical";

function Submenu({
  item,
  submenuType,
}: {
  item: MenuLinks;
  submenuType: SubmenuType;
}) {
  if (submenuType === "horizontal") {
    return (
      <div className="dropdown dropdown-hover px-1 py-3">
        <div tabIndex={0} role="button" className="">
          <Link className="hover:text-sky-600 dark:hover:text-sky-400" to="/">
            {item.title}
          </Link>
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content top-10 z-[1] w-52 rounded bg-white p-2 shadow dark:bg-slate-900"
        >
          {item.submenus.map((subitem) => (
            <li
              key={subitem._id}
              className="hover:text-sky-600 dark:hover:text-sky-400"
            >
              <Link
                to="/"
                className={`hover:bg-white dark:hover:bg-slate-900 ${styles.noActiveBg}`}
              >
                {subitem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (submenuType === "vertical") {
    return (
      <li>
        <details>
          <summary
            className={`hover:bg-white hover:text-sky-600 dark:hover:bg-slate-900 dark:hover:text-sky-400 ${styles.noActiveBg}`}
          >
            <Link
              className={`hover:text-sky-600 dark:hover:text-sky-400 ${styles.noActiveBg}`}
              to="/"
            >
              {item.title}
            </Link>
          </summary>
          <ul>
            {item.submenus.map((subitem) => (
              <li
                key={subitem._id}
                className="hover:text-sky-600 dark:hover:text-sky-400"
              >
                <Link
                  to="/"
                  className={`hover:bg-white dark:hover:bg-slate-900 ${styles.noActiveBg}`}
                >
                  {subitem.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
    );
  }
}

export default Submenu;
