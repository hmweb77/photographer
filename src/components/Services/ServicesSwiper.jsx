import ServicesSlide from './ServicesSlide';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  serviceTravelingBgImg,
  serviceClimbingBgImg,
  serviceBallooningBgImg,
  serviceSkydivingBgImg,
  serviceRaftingBgImg,
} from './Services.module.css';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

import servicesData from '../../data/services/services.json';
const { services } = servicesData;

const servicesBg = [
  serviceTravelingBgImg,
  serviceClimbingBgImg,
  serviceBallooningBgImg,
  serviceSkydivingBgImg,
  serviceRaftingBgImg,
];

const ServicesSwiper = ({ activeSlide, setActiveSlide, onInitSwiper }) => {
  return (
    <div className="services-swiper min-h-full">
      <Swiper
        wrapperTag="ul"
        slidesPerView={1}
        effect="fade"
        modules={[EffectFade]}
        onSwiper={onInitSwiper}
        onSlideChange={e => setActiveSlide(e.activeIndex)}
        className="h-full"
      >
        {services.map((service, idx) => (
          <SwiperSlide key={service.id} tag="li">
            <ServicesSlide
              index={idx}
              activeSlide={activeSlide}
              service={service}
              articleClasses={servicesBg[idx]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSwiper;
