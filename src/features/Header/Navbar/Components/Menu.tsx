import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Submenu from "./Submenu.tsx";
import {
  fetchMenuLinks,
  MenuLinks,
} from "../../../../services/header/headerAPI.ts";

type MenuType = "horizontal" | "vertical";

function Menu({ menuType }: { menuType: MenuType }) {
  const [menuLinks, setMenuLinks] = useState<MenuLinks[]>([]);

  useEffect(() => {
    async function fetchMenus() {
      try {
        const data = await fetchMenuLinks();
        setMenuLinks(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMenus();
  }, []);

  if (menuType === "horizontal") {
    return (
      <ul className="flex gap-2 lg:gap-7">
        {menuLinks.map((item) =>
          !item.submenus.length ? (
            <li key={item._id}>
              <Link
                to={item.href}
                className="block py-3 hover:text-sky-600 dark:hover:text-sky-400"
              >
                {item.title}
              </Link>
            </li>
          ) : (
            <li key={item._id}>
              <Submenu item={item} submenuType="horizontal" />
            </li>
          ),
        )}
      </ul>
    );
  } else if (menuType === "vertical") {
    return (
      <ul className="menu w-56 rounded-box bg-white dark:bg-slate-900">
        {menuLinks.map((item) =>
          !item.submenus.length ? (
            <li
              key={item._id}
              className="hover:bg-white hover:text-sky-600 dark:hover:bg-slate-900 dark:hover:text-sky-400"
            >
              <Link
                className="block py-3 hover:bg-white hover:text-sky-600 dark:hover:bg-slate-900 dark:hover:text-sky-400"
                to={item.href}
              >
                {item.title}
              </Link>
            </li>
          ) : (
            <Submenu item={item} key={item._id} submenuType="vertical" />
          ),
        )}
      </ul>
    );
  } else {
    return <p>use correct prope type </p>;
  }
}

export default Menu;
