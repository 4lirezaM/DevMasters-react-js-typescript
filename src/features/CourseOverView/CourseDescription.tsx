import ExpandableDiv from "../../ui/ExpandableDiv";

function CourseDescription({ courseName }: { courseName: string }) {
  return (
    <ExpandableDiv>
      <h2 className="py-2 text-2xl font-semibold">
        <span className="mr-1 inline-block h-4 w-4 rounded-sm bg-orange-600"></span>
        Mastering Modern Web Development with {courseName}
      </h2>
      <p className="text-lg">
        In “Mastering Modern Web Development with {courseName},” you’ll embark
        on a comprehensive journey through the latest web technologies and best
        practices. {courseName}, a seasoned web developer with over a decade of
        experience, will guide you through the intricacies of HTML, CSS, and
        JavaScript, ensuring you build a solid foundation. You’ll learn how to
        create responsive, user-friendly websites that not only look great but
        also perform seamlessly across all devices.
      </p>
      <p className="text-lg">
        The course goes beyond the basics, diving into advanced topics such as
        React, TypeScript, and Tailwind CSS. {courseName}’s hands-on approach
        ensures that you not only understand the theory but also gain practical
        experience through real-world projects. By the end of this course,
        you’ll be equipped with the skills and confidence to tackle any web
        development challenge, making you a valuable asset in the tech industry.
      </p>
      <img
        className="mx-auto my-2 w-full max-w-[800px] rounded-md"
        src="/images/course/1.gif"
        alt="codeView"
      />
      <h2 className="py-2 text-2xl font-semibold">
        <span className="inline-block h-4 w-4 rounded-sm bg-purple-500 dark:bg-purple-400"></span>{" "}
        Building Dynamic Web Applications with {courseName} technology
      </h2>
      <p className="text-lg">
        Building Dynamic Web Applications with {courseName} technology” is
        designed for aspiring developers who want to create interactive and
        dynamic web applications.
        {courseName} technology, a full-stack developer known for their
        innovative solutions, will teach you how to leverage powerful frameworks
        like Angular and Vue.js. You’ll start with the fundamentals of web
        development and gradually progress to building complex applications that
        can handle real-time data and user interactions.
      </p>

      <img
        className="mx-auto my-2 w-full max-w-[800px] rounded-md"
        src="/images/course/course.jpg"
        alt="codeView"
      />
      <p className="text-lg">
        Throughout the course, {courseName} technology emphasizes the importance
        of clean code and efficient design patterns. You’ll work on a series of
        projects that mimic real-world scenarios, giving you the opportunity to
        apply what you’ve learned in a practical setting. By the end of the
        course, you’ll have a portfolio of dynamic web applications and the
        expertise to develop high-quality, scalable solutions for any client or
        employer.
      </p>
    </ExpandableDiv>
  );
}

export default CourseDescription;
