// CourseDetails: This feature contains course status, course time, last update, support way, needs, and access way.
type CourseDetailsProps = {
  isComplete: number;
  updatedAt: string;
  support: string;
};

function CourseDetails({ isComplete, updatedAt, support }: CourseDetailsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      <div className="col-span-1 flex flex-col bg-slate-50 py-2 sm:flex-row dark:bg-slate-900">
        <div className="flex items-center justify-center">
          <i
            className="fa-solid fa-circle-info pl-1 pr-2 text-[35px]"
            style={{ color: "#00B5FF" }}
          ></i>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold">Course Status</div>
          <div className="text-lg">
            {isComplete ? "Completed" : "In Progress"}
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col bg-slate-50 py-2 sm:flex-row dark:bg-slate-900">
        <div className="flex items-center justify-center">
          <i className="fa-regular fa-clock pl-1 pr-2 text-[35px] text-lime-500"></i>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold">Duration</div>
          <div className="text-lg">59 Hours</div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col bg-slate-50 py-2 sm:flex-row dark:bg-slate-900">
        <div className="flex items-center justify-center">
          <i className="fa-regular fa-calendar-days pl-1 pr-2 text-[35px] text-orange-500"></i>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold">Last Update</div>
          <div className="text-lg">{updatedAt}</div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col bg-slate-50 py-2 sm:flex-row dark:bg-slate-900">
        <div className="flex items-center justify-center">
          <i className="fa-solid fa-headset pl-1 pr-2 text-[35px] text-fuchsia-600 dark:text-fuchsia-500"></i>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold">Support Method</div>
          <div className="text-lg">{support}</div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col bg-slate-50 py-2 sm:flex-row dark:bg-slate-900">
        <div className="flex items-center justify-center">
          <i className="fa-solid fa-suitcase pl-1 pr-2 text-[35px] text-red-500"></i>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold">Prerequisite</div>
          <div className="text-lg">ReactJS</div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col bg-slate-50 py-2 sm:flex-row dark:bg-slate-900">
        <div className="flex items-center justify-center">
          <i className="fa-solid fa-video pl-1 pr-2 text-[35px] text-teal-500 dark:text-teal-400"></i>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold">Access Type</div>
          <div className="text-lg">Online & Download</div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
