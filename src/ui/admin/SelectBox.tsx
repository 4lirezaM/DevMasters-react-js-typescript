import { useEffect, useState } from "react";
import { Category, Menu } from "../../types/global";

function SelectBox({
  getFunc,
}: {
  getFunc: () => Promise<Menu[] | Category[]>;
}) {
  const [items, setItems] = useState<Menu[] | Category[]>();
  useEffect(() => {
    async function fetchData() {
      const data = await getFunc();
      setItems(data);
    }
    fetchData();
  }, []);
  console.log(items);
  return (
    <select className="my-1 w-full p-[3px] dark:bg-slate-700">
      <option value={-1}>Select a Category</option>
      {items?.map((item) => (
        <option key={item._id} value={item._id}>
          {item.title}
        </option>
      ))}
    </select>
  );
}

export default SelectBox;
