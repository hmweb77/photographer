const Button = ({
  buttonCaption = "Send",
  type = "submit",
  className = "",
}) => {
  return (
    <button
      type={type}
      className={[
        "block ml-auto text-[30px] font-medium uppercase bg-transparent",
        className,
      ].join(" ")}
    >
      {buttonCaption}
    </button>
  );
};

export default Button;
