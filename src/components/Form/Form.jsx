"use client";

import Button from "../Button/Button";

const Form = ({
  buttonCaption,
  children,
  className = "",
  onSubmit,
  buttonClasses,
}) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
      <Button buttonCaption={buttonCaption} className={buttonClasses} />
    </form>
  );
};

export default Form;
