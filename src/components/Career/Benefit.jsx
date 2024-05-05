const Benefit = ({ title, description, titleClasses = "" }) => {
  return (
    <li className="mb-[16px] text-right md:mb-[24px] lg:flex lg:align-baseline lg:gap-[24px] last:mb-[0]">
      <h3
        className={[
          "leading-[1.42] md:leading-[1.25] md:text-[16px] lg:w-[293px] lg:text-[18px] lg:leading-[1.33]",
          titleClasses,
        ].join(" ")}
      >
        {title}
      </h3>
      <p className="text-[12px] font-extralight leading-[1.66] lg:w-[285px] lg:text-left lg:leading-[2]">
        {description}
      </p>
    </li>
  );
};

export default Benefit;
