import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";




import SwiperCore, { EffectFlip, Navigation, Pagination,Autoplay } from "swiper";

import "./swiper.css"
export function Teamswiper() {
  SwiperCore.use([EffectFlip, Navigation, Pagination,Autoplay]);
  
  return (
      <div class="slider">
        <div class="left-arrow">
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div class="right-arrow">
          <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div class="swiper">
          <div class="swiper-wrapper">
    <Swiper

          effect="coverflow"
          grabCursor="true"   
          spaceBetween={10}
          loop={true}
          autoplay={{delay: 5000}}
          navigation={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          >
            <SwiperSlide>
              <div class="head-block swiper-slide">
                <div class="image-container">
                  <img
                    src={require("../../assets/profile.jpeg")}
                    alt="Name of the head"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus ea hic reprehenderit eum accusantium quaerat
                  laudantium sunt dolorem veniam, id tempore. Assumenda magnam
                  nobis reprehenderit quia veritatis blanditiis itaque
                  doloribus.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="head-block swiper-slide">
                <div class="image-container">
                  <img
                    src={require("../../assets/profile2.png")}
                    alt="Name of the head"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus ea hic reprehenderit eum accusantium quaerat
                  laudantium sunt dolorem veniam, id tempore. Assumenda magnam
                  nobis reprehenderit quia veritatis blanditiis itaque
                  doloribus.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="head-block swiper-slide">
                <div class="image-container">
                  <img
                    src={require("../../assets/profile3.jpg")}
                    alt="Name of the head"
                  />
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repellendus ea hic reprehenderit eum accusantium quaerat
                  laudantium sunt dolorem veniam, id tempore. Assumenda magnam
                  nobis reprehenderit quia veritatis blanditiis itaque
                  doloribus.
                </p>
              </div>
            </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
   
  );
}
