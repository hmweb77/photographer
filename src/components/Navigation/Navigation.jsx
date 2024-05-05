import Link from "next/link";
import CustomLink from "../CustomLink";
import { twMerge } from "tailwind-merge";

const navList = [
  { caption: "About", href: "#about" },
  { caption: "Services", href: "#services" },
  { caption: "Career", href: "#career" },
  { caption: "Gallery", href: "#gallery" },
  { caption: "Contacts", href: "#contacts" },
];

const Navigation = ({
  className = "",
  listClassName = "",
  listItemClassName = "",
  linkClassName = "",
  onLinkClick,
}) => {
  return (
    <nav className={twMerge("", className)}>
      <ul className={twMerge("flex gap-[24px] lg:gap-[56px]", listClassName)}>
        {navList.map(({ caption, href }, idx) => {
          return (
            <li key={idx} className={twMerge("", listItemClassName)}>
              <CustomLink
                href={href}
                onClick={onLinkClick}
                className={twMerge("", linkClassName)}
              >
                {caption}
              </CustomLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
