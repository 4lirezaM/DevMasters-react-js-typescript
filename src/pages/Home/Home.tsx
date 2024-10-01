import Landing from "../../features/Landing/Landing";
import PopularCourses from "../../features/PopularCourses/PopularCourses";
import AboutUs from "../../features/AboutUs/AboutUs";
import LatestCourses from "../../features/LatestCourses/LatestCourses";
import UpcomingCourses from "../../features/UpcomingCourses/UpcomingCourses";
import LatestArticles from "../../features/LatestArticles/LatestArticles";

function Home() {
  return (
    <>
      <Landing />
      <LatestCourses />
      <AboutUs />
      <PopularCourses />
      <UpcomingCourses />
      <LatestArticles />
    </>
  );
}

export default Home;
