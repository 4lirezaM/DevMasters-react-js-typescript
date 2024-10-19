import BASE_URL from "../../config/config";

export type CategoryItemType = {
  createdAt: string;
  name: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
};

export async function getAllCategories(): Promise<CategoryItemType[]> {
  const response = await fetch(`${BASE_URL}/category`);
  if (!response.ok) {
    const error = new Error(
      `there is an error in categories get fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export type NewCategoryType = { title: string; name: string };

export async function postNewCategory(
  token: string | null,
  Category: NewCategoryType,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/category`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Category),
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `Error in new Category POST fetch (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}

export async function removeCategory(
  token: string | null,
  categoryID: string,
): Promise<unknown> {
  const response = await fetch(`${BASE_URL}/category/${categoryID}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    const errorDetails = await response.text();
    const error = new Error(
      `there is an error in DELETE category fetch  (status ${response.status} - ${response.statusText}): ${errorDetails}`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  return data;
}
