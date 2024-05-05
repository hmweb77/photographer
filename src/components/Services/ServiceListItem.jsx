import Icon from '../Icon/Icon';

const ServiceListItem = ({ service, setActiveSlide, activeSlide, index }) => {
  const handleActive = () => {
    setActiveSlide(index);
  };

  const isActive = activeSlide === index;

  return (
    <li className="lg:flex lg:gap-[60px]">
      <button
        onClick={handleActive}
        className={`w-[185px] flex gap-[8px] items-center text-[20px] text-white text-left uppercase ${
          isActive ? 'font-medium' : 'opacity-50'
        } font-extralight leading-[0.85] pointer-events-auto transitions-opacity md:w-[210px] md:text-[22px] md:leading-[0.81] lg:w-[255px] lg:text-[28px] hover:opacity-100`}
      >
        {isActive && <Icon iconName="listMarker" size={6} />}
        {service}
      </button>
    </li>
  );
};

export default ServiceListItem;
