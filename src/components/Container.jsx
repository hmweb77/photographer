const Container = ({ containerClasses = "", children }) => {
  return (
    <div
      className={[
        "mx-auto max-w-xs px-[20px] md:px-[32px] md:max-w-3xl lg:p-[24px] lg:max-w-7xl",
        containerClasses,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default Container;
