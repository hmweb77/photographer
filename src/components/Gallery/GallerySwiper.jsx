import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import galleryData from '../../data/gallery/gallery.json';

import 'swiper/css';
import 'swiper/css/keyboard';

const { gallery } = galleryData;

const swiperGallery = [
  ...gallery,
  ...gallery.map(item => ({ ...item, id: item.id + gallery.length })),
];

const GallerySwiper = () => {
  return (
    <Swiper
      wrapperTag="ul"
      initialSlide={1}
      hashNavigation={true}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      grabCursor={true}
      centeredSlides={true}
      spaceBetween={24}
      slidesPerView={3}
      modules={[Navigation]}
      loop={true}
      className="gallery-swiper"
    >
      {swiperGallery.map(({ id, src, alt }) => (
        <SwiperSlide key={id} tag="li">
          <Image src={src} alt={alt} width={606} height={429} className="fit-cover" />
        </SwiperSlide>
      ))}
      <button className="swiper-button-prev">Back</button>
      <button className="swiper-button-next">Next</button>
    </Swiper>
  );
};

export default GallerySwiper;
