import SectionHeader from "../../ui/SectionHeader";
import { useEffect, useState } from "react";
import HomePageSectionSlider from "../../ui/HomePageSectionSlider";
import { fetchUpcomingCourses } from "../../services/homepage/homepageapi";
import { CourseCart } from "../../types/global";

function UpcomingCourses() {
  const [courses, setCourses] = useState<CourseCart[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUpcomingCourses();
        setCourses(data);
      } catch (error) {
        console.log("topbar fetch error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="my-4">
      <div className="container px-[12px] sm:px-2">
        <SectionHeader
          title="Upcoming Courses"
          subTitle="Secure Your Access Before the Official Launch"
          shapeColor="bg-purple-500 dark:bg-purple-400"
          to="#"
          linkText="All Latest Courses"
        />
        <HomePageSectionSlider items={courses} />
      </div>
    </div>
  );
}
export default UpcomingCourses;
