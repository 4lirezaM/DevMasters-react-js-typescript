import { useParams } from "react-router";
import Breadcrumbs from "../../ui/Breadcrumbs";
import CourseIntro from "../../features/CourseOverView/CourseIntro";
import CourseDetails from "../../features/CourseOverView/CourseDetails";
import CourseMetrics from "../../features/CourseOverView/CourseMetrics";
import CourseTeacherInfo from "../../features/CourseOverView/CourseTeacherInfo";
import CourseShortLink from "../../features/CourseOverView/CourseShortLink";
import RelatedCourses from "../../features/CourseOverView/RelatedCourses";
import CourseDescription from "../../features/CourseOverView/CourseDescription";
import CourseSections from "../../features/CourseOverView/CourseSessions";
import Commments from "../../features/Comments/Commments";
import { useEffect, useState } from "react";
import { fetchCourseData } from "../../services/courseOverView/CourseOverViewAPI";
import useAppContext from "../../Hooks/useAppContext";
import { CourseData } from "../../types/global";
import CourseMembershipStatus from "../../features/CourseOverView/CourseMembershipStatus";
import Loading from "../../features/Loading/Loading";

function CourseOverview() {
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const { coursename } = useParams();
  const { userToken } = useAppContext();
  if (!coursename) throw new Error("course does not exist");
  useEffect(() => {
    async function fetchData() {
      try {
        if (!coursename) throw new Error("course does not exist");
        const data = await fetchCourseData(coursename, userToken);
        setCourseData(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [coursename, userToken]);
  if (!courseData)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <div className="container mx-auto p-1 sm:py-8">
      <Breadcrumbs
        pathArray={[{ id: 1, title: courseData.categoryID.title, to: "#" }]}
        current={coursename}
      />
      <CourseIntro
        category={courseData.categoryID.title}
        description={courseData.description}
        name={courseData.name}
      />
      <div className="flex flex-col gap-2 py-4 lg:flex-row">
        <div className="relative flex flex-col lg:basis-1/4">
          <div className="sticky top-0">
            <CourseMetrics
              courseStudentsCount={courseData.courseStudentsCount}
            />
            <CourseTeacherInfo />
            <CourseMembershipStatus
              isUserRegisteredToThisCourse={
                courseData.isUserRegisteredToThisCourse
              }
            />
            <RelatedCourses courseName={coursename} />
            <CourseShortLink />
          </div>
        </div>
        <div className="lg:basis-3/4">
          <CourseDetails
            isComplete={courseData.isComplete}
            support={courseData.support}
            updatedAt={courseData.updatedAt.slice(0, 10)}
          />
          <CourseDescription courseName={coursename} />
          <CourseSections
            category={courseData.categoryID.title}
            sessions={courseData.sessions}
            courseName={coursename}
            isUserRegisteredToThisCourse={
              courseData.isUserRegisteredToThisCourse
            }
          />
          <Commments
            commentsData={courseData.comments}
            courseName={coursename}
          />
        </div>
      </div>
    </div>
  );
}

export default CourseOverview;
