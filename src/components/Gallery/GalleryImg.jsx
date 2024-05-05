import Image from "next/image";

const GalleryImg = ({ src, alt }) => {
  return (
    <li className="smOnly:mb-[24px] last:mb-[0]">
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        width={280}
        height={187}
        className="fit-cover"
      />
    </li>
  );
};

export default GalleryImg;
