function AboutUsBoxes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 lg:gap-2">
      <div className="col-span-1 m-2 overflow-hidden rounded-lg p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:bg-slate-900">
        <div className="flex justify-between">
          <i className="fa fa-leaf self-center text-6xl" />
          <div className="pl-4">
            <h3 className="text-xl font-semibold">
              We Chose the Professionals
            </h3>
            <p className="text-lg">
              Not every instructor gets the green light to teach here. We
              prioritize quality above all!
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 m-2 overflow-hidden rounded-lg p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:bg-slate-900">
        <div className="flex justify-between">
          <i className="fa fa-solid fa-headset self-center text-6xl" />
          <div className="pl-4">
            <h3 className="text-xl font-semibold">Continuous Support</h3>
            <p className="text-lg">
              Whenever you have a question or encounter an issue, our team is
              ready to help you out. Our goal is to ensure you complete the
              course without any worries.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 m-2 overflow-hidden rounded-lg p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:bg-slate-900">
        <div className="flex justify-between">
          <i className="fa fa-regular fa-gem self-center text-6xl" />
          <div className="pl-4">
            <h3 className="text-xl font-semibold">
              Guaranteed Comprehensive Content
            </h3>
            <p className="text-lg">
              Rest assured, our courses cover even the smallest details. After
              completing this course, you won’t need any other training.
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1 m-2 overflow-hidden rounded-lg p-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:bg-slate-900">
        <div className="flex justify-between">
          <i className="fa fa-crown self-center text-6xl"></i>
          <div className="pl-4">
            <h3 className="text-xl font-semibold">Project-Based Learning</h3>
            <p className="text-lg">
              Our focus is to ensure that by the end of the course, you can
              confidently take on projects and start earning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsBoxes;
