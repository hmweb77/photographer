'use client';
import Section from '../Section';
import Title from '../Title/Title';
import ContactBlock from './ContactBlock/ContactBlock';
import Form from '../Form/Form';
import Input from '../Form/Input/Input';
import css from './Contacts.module.css';
import { useForm } from 'react-hook-form';

import { phones, emails, socials } from '@/data/contacts';
// const { phones, emails, socials } = contactsData;

const Contacts = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
  });

  const onSubmit = data => console.log(data);

  return (
    <Section id="contacts" sectionClasses={css.contactsBgImg}>
      <Title normalPart="Contact" boldPart="us" />
      <div className="flex flex-col gap-[12px] mt-[36px] md:gap-[64px] lg:pl-[83px] lg:flex-row lg:gap-[231px] lg:mt-[71px]">
        <address className="flex flex-col gap-[26px] mdOnly:flex-row md:gap-[90px]">
          <div className="flex flex-col gap-[24px] md:w-[322px]">
            <ContactBlock contactsList={phones} label="Phone number" />
            <ContactBlock contactsList={emails} label="E-mail" />
          </div>

          <div className="mdOnly:w-[292px]">
            <ContactBlock
              contactsList={socials}
              label="Follow us"
              className="beforeLg:flex-row-reverse"
              listClassName="mdOnly:w-[80%] beforeLg:text-left"
              labelClassName="smOnly:text-right mdOnly:w-[20%]"
              revers
            />
          </div>
        </address>

        <Form className="lg:w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[24px] mdOnly:flex-row md:gap-[24px]">
            <div className="flex beforeLg:flex-col gap-[24px] mdOnly:w-[221px]">
              <Input
                label="Full name"
                name="name"
                placeholder="John Smith"
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
                name="email"
                type="email"
                placeholder="johnsmith@email.com"
                register={{
                  ...register('email', {
                    required: true,
                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                  }),
                }}
                errors={errors.email}
              />
            </div>
            <div className="mdOnly:w-[463px]">
              <Input
                label="Message"
                name="message"
                type="textarea"
                register={{ ...register('message', { required: true }) }}
                errors={errors.message}
                inputClasses="h-[193px]"
              />
            </div>
          </div>
        </Form>
      </div>
    </Section>
  );
};

export default Contacts;
