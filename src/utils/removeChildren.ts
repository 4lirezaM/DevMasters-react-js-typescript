import { Menu } from "../types/global";

export function removeChildren(data: Menu[]) {
  const modifiedData: Menu[] = data.filter((item: Menu) => !item.parent);
  return modifiedData;
}
