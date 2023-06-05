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
                    src={require("../../assets/raid.webp")}
                    alt="Ouahioune Raid Abderrezak"
                  />
                  <p className="head-name">Ouahioune Raid Abderrezak</p>
                </div>
                <p>
                 Dev Department head , responsible for management of technical events as well as creating the corresponding websites.A full Stack Developer that contributed to all aspects of the website
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="head-block swiper-slide">
                <div class="image-container">
                  <img
                    src={require("../../assets/yazid.webp")}
                    alt="Slimani Yazid"
                  />
                  <p className="head-name">Slimani Yazid</p>
                </div>
                <p>
                 The Club's president and one of the club creators, responsible for managing the club from all aspects.Contributed to the Server Side of this Website
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div class="head-block swiper-slide">
                <div class="image-container">
                  <img
                    src={require("../../assets/ilyes.webp")}
                    alt="Ilyes Ismail Benamuer"
                  />
                  <p className="head-name">Ilyes Ismail Benamuer</p>
                </div>
                <p>
                The Head of the Design Department and one of the main contributors of this WebSite, Heavily focused on constructing desinging the  and implementing the client side of the project
                </p>
              </div>
            </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

  );
}
