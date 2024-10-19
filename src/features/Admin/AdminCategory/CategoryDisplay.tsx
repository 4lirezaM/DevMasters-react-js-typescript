import { useQuery, useQueryClient } from "react-query";
import Loading from "../../Loading/Loading.tsx";
import CategoryItem from "./CategoryItem.tsx";
import {
  CategoryItemType,
  getAllCategories,
} from "../../../services/adminPanel/adminCategoriesAPI.ts";

function CategoryDisplay() {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<CategoryItemType[]>({
    queryKey: ["getAdminCategories"],
    queryFn: () => getAllCategories(),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["getCategorisForSelctBox"],
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
              <th>DELETE</th>
            </tr>
          </thead>
          {data && (
            <tbody>
              {data.map((item: CategoryItemType, index: number) => (
                <CategoryItem index={index} item={item} key={item._id} />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default CategoryDisplay;
