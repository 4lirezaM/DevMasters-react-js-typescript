import Button from "../../../../ui/Button.tsx";
import useAppContext from "../../../../Hooks/useAppContext.tsx";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

type BtnType = { btnType: "secondarySquare" | "secondary" };

function LogOutButton({ btnType }: BtnType) {
  const { setUserInfo, setUserToken, userInfo } = useAppContext();
  const navigate = useNavigate();

  function handleLogout() {
    Swal.fire({
      title: "Logout Confirmation",
      text: "Are you sure you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Log Out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        setUserInfo(null);
        setUserToken(null);
        navigate("/");
        Swal.fire(
          "Logged Out!",
          "You have been successfully logged out.",
          "success",
        );
      }
    });
  }
  if (!userInfo) return undefined;
  return (
    <div
      className="tooltip before:dark:bg-slate-50 before:dark:text-black"
      data-tip="click to Log out."
    >
      <Button handler={handleLogout} type={btnType}>
        <i className="fa-solid fa-arrow-right-to-bracket"></i>
      </Button>
    </div>
  );
}

export default LogOutButton;
