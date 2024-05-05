import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ContactBlock = ({
  contactsList,
  label,
  className = "",
  listClassName = "",
  labelClassName = "",
  revers,
}) => {
  return (
    <div className={twMerge("flex gap-[20px] md:justify-end", className)}>
      <ul
        className={twMerge(
          `text-right text-[14px] ${
            revers ? "smOnly:w-[34%]" : "smOnly:w-[66%]"
          } md:w-[73.5%]`,
          listClassName
        )}
      >
        {contactsList.map(({ text, href }, idx) => (
          <li key={idx} className="">
            <Link
              href={href}
              className="custom-link leading-[1.71] text-right md:text-[16px] md:leading-[1.5] lg:text-[18px]"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>

      <p
        className={twMerge(
          `text-[12px] font-extralight leading-[1.67] ${
            revers ? "smOnly:w-[66%]" : "smOnly:w-[34%]"
          } md:w-[26.5%]`,
          labelClassName
        )}
      >
        {label}
      </p>
    </div>
  );
};

export default ContactBlock;
