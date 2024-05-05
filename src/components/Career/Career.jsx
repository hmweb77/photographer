'use client';
import Section from '../Section';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Benefit from './Benefit';
import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import Checkbox from '../Form/Input/Checkbox';
import css from './Career.module.css';
import { useForm } from 'react-hook-form';

import careerData from '../../data/career/career.json';
const { title, benefits, slogan, formSlogan } = careerData;

const Career = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = data => console.log(data);

  return (
    <Section id="career" sectionClasses={css.careerBgImg}>
      <div className="md:flex justify-between">
        <Title normalPart={title[0]} boldPart={title[1]} />
        <Text
          normalText={slogan}
          className="w-[179px] ml-auto smOnly:mt-[24px] md:w-[221px] md:pt-[8px] md:text-justify lg:pt-[16px] lg:w-[293px]"
        />
      </div>

      <div className="flex smOnly:flex-col gap-[112px] mt-[36px] md:gap-[20px] md:mt-[12px] lg:mt-[24px] lg:gap-[24px]">
        <div className="lg:w-1/2">
          <p className="mb-[45px] pl-[100px] text-[30px] font-extralight uppercase md:pl-[80px] lg:pl-[123px] lg:text-[36px] lg:leading-[1.08]">
            Why us ?
          </p>
          <ul className="w-[181px] md:w-[221px] lg:w-full">
            {benefits.map(({ title, description }, idx) => (
              <Benefit
                key={idx}
                title={title}
                description={description}
                titleClasses={idx === 2 ? 'mdOnly:mb-[28px]' : 'beforeLg:mb-[8px]'}
              />
            ))}
          </ul>
        </div>

        <div className="w-full mdOnly:pt-[83px] md:relative lg:w-1/2">
          <div className="w-[179px] font-extralight leading-[1.42] smOnly:ml-auto md:w-[221px] md:text-[13px] md:leading-[1.54] lg:w-[234px] lg:text-[18px] lg:leading-[1.33]">
            <Text normalText={formSlogan[0]} />
            <Text normalText={formSlogan[1]} />
          </div>

          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-[24px] md:mt-[32px] lg:mt-[16px]"
            buttonClasses="md:mt-[9px] lg:mt-[24px]"
          >
            <div className="md:flex md:gap-[20px] lg:gap-[24px]">
              <div className="flex flex-col gap-[16px] md:w-1/2 lg:gap-[24px]">
                <Input
                  label="Full name"
                  placeholder="John Smith"
                  name="name"
                  register={{
                    ...register('name', {
                      required: true,
                      pattern: /^[A-Za-z\u0080-\uFFFF\- ']+$/i,
                    }),
                  }}
                  errors={errors.name}
                />
                <Input
                  label="E-mail"
                  placeholder="johnsmith@email.com"
                  type="email"
                  name="email"
                  register={{
                    ...register('email', {
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                    }),
                  }}
                  errors={errors.email}
                />
                <Input
                  label="Position"
                  placeholder="Movie maker"
                  name="position"
                  register={{
                    ...register('position', {
                      required: true,
                      pattern: /^[A-Za-z\u0080-\uFFFF\- ']+$/i,
                    }),
                  }}
                  errors={errors.position}
                />
                <Input
                  label="Phone"
                  placeholder="+ 1 (097) 12 34 567"
                  type="tel"
                  name="phone"
                  register={{
                    ...register('phone', {
                      required: true,
                      pattern: /^[A-Za-z\u0080-\uFFFF\- ']+$/i,
                    }),
                  }}
                  errors={errors.phone}
                />
              </div>
              <div className="smOnly:mt-[16px] md:w-1/2">
                <Input
                  label="Message"
                  type="textarea"
                  name="message"
                  register={{ ...register('message', { required: true }) }}
                  errors={errors.message}
                  inputClasses="h-[196px] md:h-[228px] lg:h-[270px]"
                />
                <Checkbox
                  label="I confirm my consent to the processing of personal data."
                  name="agree"
                  register={{ ...register('agree') }}
                  containerClasses="smOnly:my-[16px] md:absolute md:left-[0] -bottom-[12px] md:w-[222px] lg:w-[290px] lg:-bottom-[20px]"
                />
              </div>
            </div>
          </Form>
        </div>
      </div>
    </Section>
  );
};

export default Career;
