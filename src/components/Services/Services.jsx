'use client';
import Section from '../Section';
import ServicesSwiper from './ServicesSwiper';
import Container from '../Container';
import ServiceListItem from './ServiceListItem';
import Title from '../Title/Title';
import { useState } from 'react';

import servicesData from '../../data/services/services.json';
const { title, servicesList } = servicesData;

const Services = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSwipeSlide = index => {
    setActiveSlide(index);
    swiper.slideTo(index);
  };

  return (
    <Section
      id="services"
      withoutContainer
      sectionClasses="py-[0px] smOnly:min-h-[821px] relative md:py-[0px] lg:py-[0px]"
    >
      <div className="absolute top-[0] left-[0] z-[2] w-full h-full py-[56px] md:py-[64px] lg:py-[80px] pointer-events-none">
        <Container containerClasses="h-full md:flex md:gap-[162px]">
          <Title normalPart={title[0]} boldPart={title[1]} />
          <div className="smOnly:mt-[24px] uppercase lg:w-full">
            <p className="text-[43px] font-thin smOnly:text-right md:text-[67px] mdOnly:leading-[1.16] lg:text-[98px]">
              0{activeSlide + 1}/<span className="text-white/20">0{servicesList.length}</span>
            </p>
            <ul className="mt-[289px] flex flex-col gap-[16px] md:mt-[40px] lg:mt-[20px] lg:gap-[24px]">
              {servicesList.map((service, idx) => (
                <ServiceListItem
                  key={idx}
                  service={service}
                  activeSlide={activeSlide}
                  setActiveSlide={handleSwipeSlide}
                  index={idx}
                />
              ))}
            </ul>
          </div>
        </Container>
      </div>

      <ServicesSwiper
        activeSlide={activeSlide}
        onInitSwiper={setSwiper}
        setActiveSlide={handleSwipeSlide}
      />
    </Section>
  );
};

export default Services;
