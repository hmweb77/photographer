import { twMerge } from "tailwind-merge";

const Text = ({ strongText, normalText, className = "" }) => {
  return (
    <p
      className={twMerge(
        "font-extralight leading-[1.42] md:text-[16px] md:leading-[1.25] lg:text-[18px]",
        className
      )}
    >
      {strongText && <strong className="font-normal">{strongText} </strong>}
      {normalText}
    </p>
  );
};

export default Text;
