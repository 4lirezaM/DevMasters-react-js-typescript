import HomePageSlider from "../../features/HomePageSlider/HomePageSlider";
import Landing from "../../features/Landing/Landing";

function Home() {
  return (
    <>
      <Landing />
      <HomePageSlider />
      <HomePageSlider />
      <HomePageSlider />
      <div className="h-96">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni soluta
        blanditiis ratione voluptates minus debitis aspernatur nihil nobis
        mollitia earum ducimus, enim neque corrupti? Amet impedit beatae ducimus
        architecto quod!
      </div>

      <div className="h-96">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni soluta
        blanditiis ratione voluptates minus debitis aspernatur nihil nobis
        mollitia earum ducimus, enim neque corrupti? Amet impedit beatae ducimus
        architecto quod!
      </div>
    </>
  );
}

export default Home;
