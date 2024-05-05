import Link from 'next/link';
import Section from '../Section';
import css from './Hero.module.css';

import heroData from '../../data/hero/hero.json';
const { title, places, slogan, description } = heroData;

const Hero = () => {
  return (
    <Section sectionClasses={[css.heroSection, css.heroBgImg].join(' ')}>
      <div className="w-full h-full md:relative md:flex justify-between">
        <div className="smOnly:mb-[24px] text-right uppercase md:absolute top-[0px] -right-[14px]">
          <p className="text-[37px] font-thin tracking-[1.65px] leading-none md:text-[67px] md:tracking-[8.71px] lg:text-[98px] lg:tracking-[3px]">
            <span className="font-medium">{slogan[0]}</span>
            {slogan[1]}
          </p>
          <p className="max-w-[295px] font-light text-[12px] tracking-[9.48px] md:absolute md:left-[5px] md:text-[14px] md:tracking-[27px] lg:text-[16px] lg:tracking-[36.48px]">
            {slogan[2]}
          </p>
        </div>

        <div className="flex flex-col gap-[24px] smOnly:mb-[24px] mdOnly:w-[426px]">
          <h1 className="font-thin -tracking-[1.6px] uppercase text-[40px] md:mb-[68px] md:w-[426px] md:text-[67px] lg:mb-[148px] lg:w-[646px] lg:text-[98px]">
            <span className="font-medium">{title[0]}</span> {title[1]}
          </h1>

          <p className="w-[59%] text-[10px] font-extralight leading-1.6 md:w-[62%] md:text-[13px] md:leading-[1.14] md:tracking-[1.26px] lg:w-[100%] lg:text-[16px] lg:leading-[1.5] lg:tracking-[1.44px]">
            {places}
          </p>
        </div>

        <div className="w-full self-end md:w-[230px] lg:w-[294px]">
          <p className="mb-[24px] text-justify font-extralight leading-[1.42] md:text-[16px] md:leading-[1.25] lg:text-[18px]">
            {description}
          </p>
          <Link
            href="#contacts"
            className="relative w-full h-[53px] uppercase text-[18px] flex justify-center items-center font-bold y-100 y-100 transition-colors duration-300 ease-in-out bg-bgButton hover:bg-bgButtonHov"
          >
            <span className="hero-button-borders top-[0px] left-[0px] border-t border-l"></span>
            <span className="hero-button-borders top-[0px] right-[0px] border-t border-r"></span>
            Join now
            <span className="hero-button-borders bottom-[0px] left-[0px] border-b border-l"></span>
            <span className="hero-button-borders bottom-[0px] right-[0px] border-b border-r"></span>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
