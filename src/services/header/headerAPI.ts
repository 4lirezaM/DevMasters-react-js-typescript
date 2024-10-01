const BASE_URL = "http://localhost:4000/v1";

export type TopBarLinks = {
  createdAt: string;
  href: string;
  parent: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export type SubMenus = {
  _id: string;
  title: "string";
  href: "string";
  updatedAt: "string";
  createdAt: "string";
  __V: number;
  parent: "string";
};

export type MenuLinks = {
  _id: string;
  title: "string";
  href: "string";
  updatedAt: "string";
  createdAt: "string";
  __V: number;
  submenus: SubMenus[];
};

export async function fetchTopbarLinks(): Promise<TopBarLinks[]> {
  const response = await fetch(`${BASE_URL}/menus/topbar`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in top bar fetch (status ${response.status})`,
    );
  }
  const data = await response.json();
  return data as TopBarLinks[];
}

export async function fetchMenuLinks(): Promise<MenuLinks[]> {
  const response = await fetch(`${BASE_URL}/menus`);
  if (!response.ok) {
    throw new Error(
      `Network response was not ok in menu fetch (status ${response.status})`,
    );
  }
  const data = await response.json();
  return data;
}
