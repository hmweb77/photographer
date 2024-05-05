import Image from "next/image";
import logo from "../../public/Rectangle.png";
import { Karantina } from "next/font/google";

const karantina = Karantina({ subsets: ["latin"], weight: "400" });

const Logo = () => {
  return (
    <div className={`py-[36px] md:py-[24px] ${karantina.className}`}>
      <Image className="mb-[2px] w-full max-w-[59px]" src={logo} alt="logo" />
      <p className="text-[14px] tracking-[2.5px] leading-none">Travel</p>
    </div>
  );
};

export default Logo;
