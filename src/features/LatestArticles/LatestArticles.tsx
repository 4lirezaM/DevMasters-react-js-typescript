import SectionHeader from "../../ui/SectionHeader";

function LatestArticles() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await fetchLatestArticles();
  //       setCourses(data);
  //     } catch (error) {
  //       console.log("topbar fetch error", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div className="my-4">
      <div className="container px-[12px] sm:px-2">
        <SectionHeader
          title="Latest Articles"
          subTitle="Stay Informed with the Latest Trends and Tips."
          shapeColor="bg-red-500 dark:bg-red-400"
        />
        <h1 className="py-4 text-2xl">comming soon ...</h1>
      </div>
    </div>
  );
}
export default LatestArticles;
