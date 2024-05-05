import { useId } from "react";

const Checkbox = ({
  label,
  name,
  containerClasses = "",
  inputClasses = "",
  labelClasses = "",
  register,
}) => {
  const inputId = useId();

  return (
    <div className={[containerClasses].join(" ")}>
      <label
        htmlFor={inputId}
        className={[
          "flex text-[12px] font-extralight leading-[2]",
          labelClasses,
        ].join(" ")}
      >
        <input
          id={inputId}
          name={name}
          type="checkbox"
          {...register}
          className={[
            "agree-checkbox appearance-none h-[0]",
            inputClasses,
          ].join(" ")}
        />
        <span className="custom-checkbox block min-w-[22px] h-[22px] mr-[8px] p-[3px] border">
          <span className="custom-checkbox__inner block w-full h-full bg-white/10"></span>
        </span>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
