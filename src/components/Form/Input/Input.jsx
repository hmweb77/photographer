import { useId } from "react";
import Icon from "@/components/Icon/Icon";

const Input = ({
  label,
  name,
  onChange,
  placeholder,
  type,
  containerClasses = "",
  inputClasses = "",
  labelClasses = "",
  register,
  errors,
}) => {
  const InvalidMassage = ({ children }) => (
    <p
      role="alert"
      className="absolute flex items-center gap-1 top-full right-[0px] text-[12px] font-extralight tracking-[2.4px] leading-[2] text-errorColor"
    >
      <Icon iconName="error" />
      {children}
    </p>
  );

  const inputId = useId();

  return (
    <div className={["w-full relative", containerClasses].join(" ")}>
      <label
        htmlFor={inputId}
        className={[
          `block h-[24px] text-[12px] font-extralight leading-[2] mb-[4px] tracking-[2.4px]${
            errors ? " text-errorColor" : ""
          }`,
          labelClasses,
        ].join(" ")}
      >
        {label}
      </label>

      {type !== "textarea" && (
        <>
          <input
            id={inputId}
            className={[
              "text-[13px] font-extralight leading-[1.85] bg-white/5 placeholder:text-white/20 w-full h-[24px] px-[8px] lg:h-[28px]",
              inputClasses,
            ].join(" ")}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            {...register}
            aria-invalid={errors ? "true" : "false"}
          />
          {errors && (
            <InvalidMassage>{`${
              name === "name" ? "Incorrect" : "Invalid"
            } ${name}`}</InvalidMassage>
          )}
        </>
      )}
      {type === "textarea" && (
        <>
          <textarea
            id={inputId}
            onChange={onChange}
            name={name}
            className={[
              "w-full px-[8px] text-[13px] font-extralight leading-[1.85] resize-none bg-white/5 placeholder:text-white/20",
              inputClasses,
            ].join(" ")}
            {...register}
          ></textarea>
        </>
      )}
    </div>
  );
};

export default Input;
