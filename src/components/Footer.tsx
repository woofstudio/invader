import Image from "next/image";
import { FiChevronUp } from "react-icons/fi";
import { ImYoutube } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io";
import IvdLogoName from "../../public/ivd-logo-name.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black w-full h-28 px-32 flex justify-between items-center">
      <a href="/">
        <Image src={IvdLogoName} />
      </a>
      <div className="flex items-center space-x-20">
        <div className="flex items-center text-white font-kanit font-extralight">
          <span className="opacity-70">
            Copyrights 2019 POKERINVADER.COM - All Rights Reserved.
          </span>
          <div className="h-16 w-px bg-white mx-10 opacity-50"></div>
          <span className="opacity-70">
            Illustrations by Icons 8 from Ouch!
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-20">
        <div className="grid place-content-center rounded-full bg-primary-200 w-14 h-14 text-4xl cursor-pointer">
          <FiChevronUp />
        </div>
        <div className="flex items-center text-white text-4xl space-x-6">
          <a href="/">
            <IoLogoFacebook />
          </a>
          <a href="/">
            <ImYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
