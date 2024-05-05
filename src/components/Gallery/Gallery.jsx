'use client';
import Section from '../Section';
import Title from '../Title/Title';
import GalleryImg from './GalleryImg';
import GallerySwiper from './GallerySwiper';
import css from './Gallery.module.css';

import galleryData from '../../data/gallery/gallery.json';
const { title, gallery } = galleryData;

const Gallery = () => {
  return (
    <Section
      id="gallery"
      sectionClasses={css.galleryBgImg}
      containerClasses="md:relative lg:px-[0]"
    >
      <Title
        normalPart={title[0]}
        boldPart={title[1]}
        className="mdOnly:text-center lg:pl-[24px]"
      />
      <div className="mt-[24px] md:mt-[72px] lg:mt-[25px]">
        <ul className="md:hidden">
          {gallery.map(({ id, src, alt }) => (
            <GalleryImg key={id} src={src} alt={alt} />
          ))}
        </ul>
        <div className="smOnly:hidden">
          <GallerySwiper />
        </div>
      </div>
    </Section>
  );
};

export default Gallery;
