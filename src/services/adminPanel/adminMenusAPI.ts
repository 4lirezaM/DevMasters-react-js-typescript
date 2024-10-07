import { removeChildren } from "../../utils/removeChildren";

const BASE_URL = "http://localhost:4000/v1";

export async function getMainMenues() {
  const response = await fetch(`${BASE_URL}/menus/all`);
  if (!response.ok) {
    const error = new Error(
      `there is an error in menus get fetch (status ${response.status})`,
    );
    error.name = response.status.toString();
    throw error;
  }
  const data = await response.json();
  const modifiedData = removeChildren(data);
  return modifiedData;
}
