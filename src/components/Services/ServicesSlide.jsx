'use client';
import Container from '../Container';
import Text from '../Text/Text';
import Image from 'next/image';

const ServicesSlide = ({
  service: { src, slogan, description, title },
  articleClasses,
  activeSlide,
}) => {
  const paddingTop = activeSlide * 48 + (activeSlide > 2 ? 24 : 0);

  return (
    <article
      className={[
        'section-background h-full pt-[202px] pb-[56px] md:pt-[182px] lg:pt-[219px]',
        articleClasses,
      ].join(' ')}
    >
      <Container containerClasses="h-full md:flex mdOnly:gap-[20px] lg:justify-between">
        <h3 className="visually-hidden">{title}</h3>
        <div className="relative bg-gray h-[213px] md:w-[463px] md:h-[370px] lg:w-[607px] lg:h-[429px]">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(min-width: 1280px) 607px, (min-width: 768px) 463px"
            className="bg-gray fit-cover"
          />
        </div>

        <div
          style={{ paddingTop }}
          className="services-description-container min-h-[358px] flex flex-col justify-between smOnly:mt-[12px] md:w-[221px] lg:w-[293px]"
        >
          <p className="text-[12px] smOnly:text-right font-extralight leading-[2] tracking-[2.4px] lg:leading-[1]">
            {slogan}
          </p>

          <Text
            normalText={description}
            className="mt-auto md:text-[12.5px] md:leading-[1.53] md:text-justify lg:text-[18.3px] lg:leading-[1.33]"
          />
        </div>
      </Container>
    </article>
  );
};

export default ServicesSlide;
