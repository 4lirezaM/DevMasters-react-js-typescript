// CourseMetrics: This feature includes course users count, average score, and course progress.
function CourseMetrics({
  courseStudentsCount,
}: {
  courseStudentsCount: number;
}) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1 flex flex-col bg-slate-50 py-2 sm:flex-row dark:bg-slate-900">
          <div className="flex items-center justify-center">
            <i className="fa fa-users fa-2x pl-1 pr-2"></i>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg font-semibold">Students</div>
            <div className="text-lg">{courseStudentsCount}</div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col bg-slate-50 py-2 sm:flex-row dark:bg-slate-900">
          <div className="flex items-center justify-center">
            <i
              className="fa fa-star fa-2x pl-1 pr-2"
              style={{ color: "#FFD43B" }}
            ></i>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-lg font-semibold">Average Rating</div>
            <div className="text-lg">4.8</div>
          </div>
        </div>
      </div>
      <div className="my-2 px-1">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Completion Percentage</span>
          <span className="font-semibold">100%</span>
        </div>
        <progress
          className="progress progress-info h-3 dark:bg-slate-700"
          value="70"
          max="100"
        ></progress>
      </div>
    </>
  );
}

export default CourseMetrics;
