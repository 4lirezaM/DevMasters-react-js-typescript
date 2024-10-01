import { useEffect, useState } from "react";
import SectionHeader from "../../ui/SectionHeader";
import { CourseCart } from "../../types/global";
import { fetchPopularCourses } from "../../services/homepage/homepageapi";
import HomePageSectionSlider from "../../ui/HomePageSectionSlider";

function PopularCourses() {
  const [courses, setCourses] = useState<CourseCart[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPopularCourses();
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
          title="Trending Courses"
          subTitle="Discover the Most Enrolled and Highly Rated Courses"
          shapeColor="bg-yellow-500 dark:bg-yellow-400"
          to="#"
          linkText="All Latest Courses"
        />
        <HomePageSectionSlider items={courses} />
      </div>
    </div>
  );
}
export default PopularCourses;
