import React from "react";
import { Project } from "../Project/Project.jsx";
import css from "./ProjectsList.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Include navigation styles
import "swiper/css/effect-creative";
import {
  Pagination,
  Mousewheel,
  EffectCoverflow,
  Autoplay,
  Keyboard,
  Navigation,
} from "swiper/modules";

export const ProjectsList = ({ projects }) => {
  return (
    <>
      {projects.length > 0 ? (
        <Swiper
          className={css.swiperCont}
          modules={[
            Keyboard,
            Mousewheel,
            Autoplay,
            Pagination,
            EffectCoverflow,
            Navigation,
          ]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={false}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          keyboard={{
            enabled: true,
          }}
          mousewheel={{
            thresholdDelta: 70,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 10,
            depth: 300,
            modifier: 2,
            slideShadows: false,
            scale: 1.1,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className={project.id % 2 === 0 ? css.even : css.odd}
            >
              <Project project={project} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </Swiper>
      ) : (
        <p className={css.noProjects}>No projects available for this filter.</p>
      )}
    </>
  );
};
