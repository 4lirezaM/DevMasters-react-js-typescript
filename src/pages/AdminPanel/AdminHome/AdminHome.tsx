// import { useQuery } from "react-query";
// import useAppContext from "../../../Hooks/useAppContext";
// import { getAdminHomeInfo } from "../../../services/adminPanel/adminInfosAPI";
// import Loading from "../../../features/Loading/Loading";
import CommingSoon from "../../../ui/CommingSoon";

function AdminHome() {
  // const { userToken } = useAppContext();
  // const { data, error, isLoading } = useQuery<unknown>({
  //   queryKey: ["getCourses"],
  //   queryFn: () => getAdminHomeInfo(userToken),
  // });
  // console.log(data);
  // if (error) throw error;
  // if (isLoading) return <Loading />;
  return (
    <div>
      <CommingSoon text="Hang tight! The homepage is currently under development. Exciting updates coming soon! 🚀" />
    </div>
  );
}

export default AdminHome;
