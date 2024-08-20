import Image from 'next/image';
import styles from './Slider.module.css';

// import Swiper core and required modules
import { EffectCoverflow, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


  
const Slider = ({images}) => {
  return (
    <div>
      <div className={styles.slider_cover}>
        <Swiper
          // install Swiper modules
          slidesPerView={1.7}
          spaceBetween={0}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          
          pagination={{
            clickable: true,
          }}
          effect={'coverflow'}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="mySwiper"

          style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-navigation-color": "#fff",
          }}
        >
          {
            images.map((url, i) => {
              return(
              <SwiperSlide className={styles.swiper_slide} key={i}>
                <div className={styles.slider_img_cover}>
                  <Image 
                  className={styles.slider_img} 
                  src={url} 
                  >
                  </Image>
                </div>
              </SwiperSlide>
            )
            })
          }
        </Swiper>
      </div>
    </div>
    
    
  );
};

export default Slider;
