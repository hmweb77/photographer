import { twMerge } from "tailwind-merge";

const MenuButton = ({ caption, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "uppercase md:hidden text-[14px] tracking-[1.4px]",
        className
      )}
    >
      {caption}
    </button>
  );
};

export default MenuButton;
