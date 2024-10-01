import SectionHeader from "../../ui/SectionHeader";
import AboutUsBoxes from "./Components/AboutUsBoxes";

function AboutUs() {
  return (
    <div className="my-4">
      <div className="container px-[12px] sm:px-2">
        <SectionHeader
          title="How Can We Help?"
          subTitle="Your satisfaction is our priority."
          shapeColor="bg-green-500 dark:bg-green-400"
        />
        <AboutUsBoxes />
      </div>
    </div>
  );
}
export default AboutUs;
