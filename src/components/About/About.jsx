import Title from '../Title/Title';
import Section from '../Section';
import Text from '../Text/Text';
import css from './About.module.css';

import aboutData from '../../data/about/about.json';
const { title, text, slogan } = aboutData;

const About = () => {
  return (
    <Section
      id="about"
      sectionClasses={css.aboutBgImg}
      containerClasses="sm:max-w-[480px] mdOnly:relative"
    >
      <div className="md:flex gap-[76px] lg:gap-[24px]">
        <Title normalPart={title[0]} boldPart={title[1]} className="" />
        <div className="smOnly:mt-[8px] md:pt-[9px] lg:md:pt-[16px]">
          <Text
            strongText={text[0].strong}
            normalText={text[0].normal}
            className="mb-[20px] w-[180px] md:w-[220px] lg:w-[292px]"
          />
          <Text
            strongText={text[1].strong}
            normalText={text[1].normal}
            className="w-[180px] md:w-[220px] lg:w-[292px]"
          />
        </div>
      </div>

      <div className="mt-[40px] flex flex-col gap-[40px] md:mt-[64px] lg:mt-[72px] lg:flex-row-reverse justify-between">
        <div className="w-[180px] self-end uppercase leading-[1.42] md:w-[221px] md:text-[16px] md:leading-[1.25] mdOnly:absolute left-[32px] top-[385px] lg:w-[296px] lg:text-[18px]">
          <p>{slogan[0]}</p>
          <p className="text-right">{slogan[1]}</p>
          <p className="font-extralight -tracking-[0.14px] normal-case whitespace-nowrap">
            {slogan[2]}
          </p>
        </div>

        <Text
          strongText={text[2].strong}
          normalText={text[2].normal}
          className="w-full md:w-[463px] mdOnly:self-end lg:w-[605px]"
        />
      </div>
    </Section>
  );
};

export default About;
