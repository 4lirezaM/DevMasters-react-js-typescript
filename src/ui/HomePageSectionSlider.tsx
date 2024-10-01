import styles from "./HomePageSectionSlider.module.css";
import CourseSmallCart from "./CourseSmallCart.tsx";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { CourseCart } from "../types/global.ts";

function HomePageSectionSlider({ items }: { items?: CourseCart[] }) {
  return (
    <Swiper
      className={`${styles.homepageSlider} pb-5`}
      modules={[Navigation, A11y, Autoplay, Pagination]}
      spaceBetween={10}
      pagination={{
        dynamicBullets: true,
      }}
      slidesPerView={1}
      autoplay={{
        delay: 24500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        520: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      }}
      navigation={false}
    >
      {items?.map((item) => (
        <SwiperSlide className="mb-3 h-auto" key={item._id}>
          <CourseSmallCart type="A" course={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default HomePageSectionSlider;
