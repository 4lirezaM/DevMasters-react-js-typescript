import SectionHeader from "../../ui/SectionHeader";
import HomePageSectionSlider from "../../ui/HomePageSectionSlider";
import { useEffect, useState } from "react";
import { fetchLastestCourses } from "../../services/homepage/homepageapi";
import { CourseCart } from "../../types/global";

function LatestCourses() {
  const [courses, setCourses] = useState<CourseCart[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLastestCourses();
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
          title="Latest Courses"
          subTitle="Your Gateway to Achievement"
          shapeColor="bg-orange-500 dark:bg-orange-400"
          to="#"
          linkText="All Latest Courses"
        />
        <HomePageSectionSlider items={courses} />
      </div>
    </div>
  );
}
export default LatestCourses;
