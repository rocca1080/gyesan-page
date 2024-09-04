import Image from "next/image";
import styles from "../styles/Slider.module.css";

// import Swiper core and required modules
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ images }) => {
  return (
    <div className={styles.slider_cover}>
      <Swiper
        // install Swiper modules
        slidesPerView={1.7}
        spaceBetween={0}
        loop
        centeredSlides
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 5,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#00b9ff",
          "--swiper-navigation-color": "#F9F7F7",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bottom": "10px",
          "--swiper-navigation-size": "68px",
        }}
      >
        {images.map((url) => {
          return (
            <SwiperSlide className={styles.swiper_slide} key={url}>
              <div className={styles.slider_img_cover}>
                <Image className={styles.slider_img} src={url} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
