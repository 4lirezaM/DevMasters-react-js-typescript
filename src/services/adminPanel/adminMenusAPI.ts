import BASE_URL from "../../config/config";

export type MenuItemTableType = {
  parent?: {
    href: string;
    title: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    _id: string;
  };
  href: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export async function getAllMenus(): Promise<MenuItemTableType[]> {
  const response = await fetch(`${BASE_URL}/menus/all`);
  if (!response.ok) {
    const error = new Error(
      `there is an error in menus get fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export type NewMenuType = { title: string; href: string; parent: string };

export async function postNewMenu(
  token: string | null,
  menu: NewMenuType,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/menus`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(menu),
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `Error in new Menu POST fetch (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function removeMenu(
  token: string | null,
  menuID: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/menus/${menuID}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `there is an error in DELETE Menu fetch  (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}
