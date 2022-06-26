import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import IvdLogoColor from "../../../public/ivd-logo-color.svg";

export const Navigation: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 h-40 px-8 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-32 flex items-center justify-between z-50">
      <Link href="/">
        <Image src={IvdLogoColor} alt="Invader Logo" />
      </Link>
      <a className="cursor-pointer">
        <FiMenu className="text-[#C4C4C4] text-4xl" />
      </a>
    </nav>
  );
};
