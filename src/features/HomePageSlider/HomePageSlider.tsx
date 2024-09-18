import styles from "./HomePageSlider.module.css";
import CourseSmallCart from "../../ui/CourseSmallCart.tsx";
import { Link } from "react-router-dom";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function HomePageSlider() {
  return (
    <div className="my-4">
      <div className="container px-[12px] sm:px-2">
        <div className="flex items-center justify-between py-5">
          <div className="">
            <div className="flex items-center justify-center gap-2">
              <span className="inline-block h-4 w-4 rounded-sm bg-orange-500 dark:bg-orange-400"></span>
              <h3 className="inline-block text-3xl font-bold">
                Latest Courses
              </h3>
            </div>
            <p className="font-semibold text-slate-700 dark:text-slate-300">
              Your Gateway to Achievement
            </p>
          </div>
          <Link
            to="#"
            className="flex items-center justify-center py-4 hover:text-sky-500 dark:hover:text-sky-600"
          >
            <span className="pb-[0.2rem] font-semibold transition-all hover:pr-2">
              All Latest Courses
            </span>
            <i className="fa fa-angle-right" aria-hidden="true"></i>
          </Link>
        </div>
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
          <SwiperSlide>
            <CourseSmallCart />
          </SwiperSlide>
          <SwiperSlide>
            <CourseSmallCart />
          </SwiperSlide>
          <SwiperSlide>
            <CourseSmallCart />
          </SwiperSlide>
          <SwiperSlide>
            <CourseSmallCart />
          </SwiperSlide>
          <SwiperSlide>
            <CourseSmallCart />
          </SwiperSlide>
          <SwiperSlide>
            <CourseSmallCart />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomePageSlider;
