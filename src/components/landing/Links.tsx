import Image from "next/image";
import { ReactNode } from "react";
import RegistrationImg from "../../../public/img/landing/links-registration-img.png";

import RegistrationIcon from "../../../public/img/landing/links-registration-icon.png";
import PromotionsIcon from "../../../public/img/landing/links-promotions-icon.png";
import TechniquesIcon from "../../../public/img/landing/links-techniques-icon.png";
import CommunityIcon from "../../../public/img/landing/links-community-icon.png";

const Links: React.FC = () => {
  return (
    <section id="links" className="bg-dark-100 w-full px-32 py-8">
      <div className="grid grid-cols-4 gap-6">
        <Link>
          <h3 className="font-kanit font-extralight italic text-4xl">
            วิธีการสมัคร
          </h3>
          <div className="w-[40%] mt-[20%]">
            <Image src={RegistrationIcon} layout="responsive" />
          </div>
          <div className="absolute -bottom-[70%] -right-[21%] aspect-square w-[85%]">
            <Image
              src={RegistrationImg}
              className="group-hover:-rotate-12 duration-300"
              layout="responsive"
              quality={100}
              priority={true}
            />
          </div>
        </Link>
        <Link>
          <h3 className="font-kanit font-extralight italic text-4xl">
            โปรโมชั่น
          </h3>
          <div className="w-[40%] mt-[20%]">
            <Image src={PromotionsIcon} layout="responsive" />
          </div>
        </Link>
        <Link>
          <h3 className="font-kanit font-extralight italic text-4xl">
            เทคนิคการเล่น
          </h3>
          <div className="w-[28%] mt-[20%]">
            <Image src={TechniquesIcon} layout="responsive" />
          </div>
        </Link>
        <Link>
          <h3 className="font-kanit font-extralight italic text-4xl">
            Community
          </h3>
          <div className="w-[40%] mt-[20%]">
            <Image src={CommunityIcon} layout="responsive" />
          </div>
        </Link>
      </div>
    </section>
  );
};

interface LinkProps {
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-t from-primary-200 to-primary-300 aspect-square rounded-3xl overflow-hidden group relative px-10 py-8">
      {children}
    </div>
  );
};

export default Links;
