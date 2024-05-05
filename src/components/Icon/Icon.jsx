const Icon = ({ iconName, size = 18 }) => {
  return (
    <svg
      width={size}
      height={size}
      role="img"
      aria-label="Vercel logo"
      className="flex justify-center items-center"
    >
      <use xlinkHref={`/icons.svg#icon-${iconName}`} />
    </svg>
  );
};

export default Icon;
