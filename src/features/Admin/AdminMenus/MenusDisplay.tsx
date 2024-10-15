import { useQuery } from "react-query";
import Loading from "../../Loading/Loading.tsx";
import MenuItem from "./MenuItem.tsx";
import {
  MenuItemTableType,
  getAllMenus,
} from "../../../services/adminPanel/adminMenusAPI.ts";

function MenusDisplay() {
  const { data, error, isLoading } = useQuery<MenuItemTableType[]>({
    queryKey: ["getAdminMenus"],
    queryFn: () => getAllMenus(),
    onSuccess: (data) => {
      data.sort((a, b) => {
        if (!a.parent && b.parent) return -1;
        if (a.parent && !b.parent) return 1;
        return 0;
      });
    },
  });
  if (error) throw error;
  if (isLoading) return <Loading />;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-lg font-semibold text-slate-950 dark:text-slate-50">
              <th></th>
              <th>Title</th>
              <th>Href</th>
              <th>Parent Menu</th>
              <th>DELETE</th>
            </tr>
          </thead>
          {data && (
            <tbody>
              {data.map((item: MenuItemTableType, index: number) => (
                <MenuItem index={index} item={item} key={item._id} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default MenusDisplay;
