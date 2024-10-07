import useAppContext from "../../../Hooks/useAppContext";
import { fetchNotification } from "../../../services/adminPanel/headerAPI";

function HeaderNotification() {
  const { userInfo, userToken, refreshUserInfo } = useAppContext();
  const openModal = () => {
    const modal = document.getElementById("my_modal_2") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  async function taskHandler(id: string) {
    const data = await fetchNotification(id, userToken);
    if (data) {
      refreshUserInfo();
    }
  }

  return (
    <>
      <button className="mr-4" onClick={openModal}>
        <div className="indicator flex aspect-square w-8 items-center justify-center rounded bg-slate-700 dark:bg-slate-800">
          {userInfo?.notifications.length ? (
            <>
              <i className="fa fa-bell fa-shake fa-xl text-yellow-400"></i>
              <span className="badge indicator-item badge-secondary bg-lime-500">
                {userInfo.notifications.length > 100
                  ? "99+"
                  : userInfo.notifications.length}
              </span>
            </>
          ) : (
            <i className="fa fa-bell fa-xl text-yellow-400"></i>
          )}
        </div>
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box dark:text-slate-950">
          <h3 className="text-xl font-bold">✅Tasks</h3>
          {!userInfo ? (
            ""
          ) : userInfo.notifications.length ? (
            userInfo.notifications.map((notification) => (
              <div
                className="flex items-center justify-between"
                key={notification._id}
              >
                <p className="py-2">{notification.msg}</p>
                <div
                  onClick={() => taskHandler(notification._id)}
                  className="flex aspect-square w-7 items-center justify-center border-2 border-solid border-lime-500 text-[20px] text-lime-500 hover:cursor-pointer hover:bg-lime-500 hover:text-white"
                >
                  <i className="fa fa-check"></i>
                </div>
              </div>
            ))
          ) : (
            <p className="py-2">
              <i className="fa fa-circle-info text-[18px] text-sky-500"></i>
              There are no tasks to complete at the moment:)
            </p>
          )}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default HeaderNotification;
