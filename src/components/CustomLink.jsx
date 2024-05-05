import Link from "next/link";
import { twMerge } from "tailwind-merge";

const CustomLink = ({ href, onClick, className, children }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={twMerge("custom-link", className)}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
