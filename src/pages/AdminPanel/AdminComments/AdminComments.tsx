import CommentsDisplay from "../../../features/Admin/AdminComments/CommentsDisplay.tsx";

function AdminComments() {
  return (
    <div>
      <div className="min-h-svh bg-slate-50 p-1 sm:p-4 dark:bg-slate-800">
        <div className="flex items-center justify-between">
          <h2 className="py-2 text-2xl font-semibold">
            <span className="mr-1 inline-block h-4 w-4 rounded-sm bg-teal-400"></span>
            Comments
          </h2>
        </div>
        <CommentsDisplay />
      </div>
    </div>
  );
}

export default AdminComments;
