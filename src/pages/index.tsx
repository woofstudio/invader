import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiChevronUp, FiMenu } from "react-icons/fi";
import { ImYoutube } from "react-icons/im";
import { IoLogoFacebook } from "react-icons/io";

import IvdLogoColor from "../../public/ivd-logo-color.svg";
import IvdLogoBlack from "../../public/ivd-logo-black.svg";
import IvdLogoName from "../../public/ivd-logo-name.png";

import Arrow from "../../public/arrow.svg";

const Home: NextPage = () => {
  return (
    <>
      <nav className="absolute top-0 left-0 right-0 h-40 px-32 flex items-center justify-between">
        <a href="/">
          <Image src={IvdLogoColor} alt="Invader Logo" />
        </a>
        <a className="cursor-pointer">
          <FiMenu className="text-[#C4C4C4] text-4xl" />
        </a>
      </nav>
      <section
        id="hero"
        className="h-screen w-full px-32 bg-dark-100 flex items-center"
      >
        <div className="space-y-8">
          <h1 className="uppercase font-druk text-white text-7xl max-w-lg">
            Poker Invader
          </h1>
          <h3 className="font-kanit font-extralight tracking-widest text-xl text-white">
            ตัวเลือกที่ดีที่สุดในการเล่น Poker
          </h3>
          <div className="uppercase font-kanit font-light text-3xl text-white h-20 w-80 flex justify-center items-center bg-dark-400 rounded-lg">
            Play Poker
          </div>
        </div>
      </section>
      <section id="links" className="bg-dark-100 w-full px-32 py-8">
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-gradient-to-t from-primary-200 to-primary-300 aspect-square rounded-3xl"></div>
          <div className="bg-gradient-to-t from-primary-200 to-primary-300 aspect-square rounded-3xl"></div>
          <div className="bg-gradient-to-t from-primary-200 to-primary-300 aspect-square rounded-3xl"></div>
          <div className="bg-gradient-to-t from-primary-200 to-primary-300 aspect-square rounded-3xl"></div>
        </div>
      </section>
      <hr className="mx-32 my-20" />
      <section
        id="technique"
        className="bg-dark-100 w-full px-32 py-8 space-y-16"
      >
        <div className="font-kanit text-white space-y-4">
          <h2 className="font-medium text-6xl">เทคนิคการเล่น</h2>
          <h3 className="font-light text-lg tracking-wide">
            วิธีทำเงิน และเทคนิคการเล่นดีๆจากโปรเพลย์เยอร์ รวมไว้ที่นี่
          </h3>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="bg-dark-400 aspect-[6/8] rounded-2xl"></div>
          <div className="bg-dark-400 aspect-[6/8] rounded-2xl"></div>
          <div className="bg-dark-400 aspect-[6/8] rounded-2xl"></div>
          <div className="bg-dark-400 aspect-[6/8] rounded-2xl"></div>
        </div>
      </section>
      <hr className="mx-32 my-20" />
      <section
        id="blog"
        className="bg-dark-100 w-full px-32 py-8 flex justify-between items-center"
      >
        <div className="font-kanit text-white">
          <h2 className="font-medium text-6xl mb-4">บทความโป๊กเกอร์</h2>
          <h3 className="font-light text-lg tracking-wide mb-16">
            ข่าวสารโลกโป๊กเกอร์ และสาระน่ารู้
          </h3>
          <Link href="/">
            <a className="border-l-2 border-primary-100 py-3 px-6 text-xl hover:underline hover:text-primary-100 duration-300">
              View All
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-2 w-[65%] gap-6">
          <div className="aspect-[7/4] bg-dark-400 rounded-2xl"></div>
          <div className="aspect-[7/4] bg-dark-400 rounded-2xl"></div>
          <div className="aspect-[7/4] bg-dark-400 rounded-2xl"></div>
          <div className="aspect-[7/4] bg-dark-400 rounded-2xl"></div>
        </div>
      </section>
      <hr className="mx-32 my-20" />
      <section
        id="about"
        className="bg-dark-100 w-full px-32 pt-24 pb-32 flex justify-between items-center"
      >
        <div className="w-1/2"></div>
        <div className="w-1/2 relative pb-24">
          <div className="space-y-10 text-left flex flex-col items-start mb-52">
            <h2 className="uppercase font-druk text-8xl text-primary-200">
              We Are
              <br />
              Invader
            </h2>
            <p className="text-white font-kanit max-w-xl leading-loose text-lg">
              เรารวบรวม <span className="font-druk">App Poker </span>
              มากมายมาไว้ที่นี่่ที่่เดียว ทั้งเนื้อหา สาระความรู้ต่างๆ
              ให้แก่เหล่านักโป๊กเกอร์ทั่วโลก โลกของโป๊กเกอร์ออนไลน์{" "}
              <span className="font-druk">( POKER ONLINE ) </span>
              ที่เต็มไปด้วยปริศนา รอให้เหล่านักเล่นได้ค้นหา
            </p>
          </div>
          <div className="space-y-10 text-right flex flex-col items-end">
            <p className="text-white font-kanit max-w-xl leading-loose text-lg">
              ห้อง <span className="font-druk">Poker</span> และเกมที่ดีที่สุด
              ของทุก <span className="font-druk">APPLICATION</span> อยู่ที่นี่
              ไม่ว่าจะเป็น{" "}
              <span className="font-druk">
                PPPoker / Pokerbros / UPoker / GGpoker
              </span>{" "}
              ที่มีทัวร์ใหญ่ที่สุดโลกอย่าง{" "}
              <span className="font-druk">WSOP, APT, APL</span>
            </p>
            <p className="text-white font-kanit max-w-xl leading-loose text-lg">
              พร้อมได้รับ <span className="font-druk">Bracelet WSOP</span>{" "}
              ของจริง และตั๋วแข่ง <span className="font-druk">Poker</span> ของ{" "}
              <span className="font-druk">WSOP Main</span>
              ที่ <span className="font-druk">Las Vegas</span> ทุกๆปี
            </p>
          </div>
          <div className="absolute top-0 -left-10 w-px h-[520px] bg-white"></div>
          <div className="absolute bottom-0 -right-10 w-px h-[520px] bg-white"></div>
        </div>
      </section>
      <section
        id="commuinity"
        className="h-screen w-full p-32 flex justify-between"
        style={{
          background:
            "linear-gradient(155.04deg, #FACB48 3.36%, #FFFFFF 67.79%)",
        }}
      >
        <div className="space-y-10">
          <Image src={IvdLogoBlack} alt="Invader Black Logo" />
          <h2 className="uppercase font-druk text-7xl text-dark-400 pt-10">
            Play Online
            <br />
            Poker
            <br />
            Together!
          </h2>
          <h3 className="font-kanit font-extralight text-4xl tracking-wider text-dark-400">
            ร่วมเรียนรู้ แลกเปลี่ยนความรู้ แชร์ประสบการณ์
          </h3>
          <div className="p-4 w-14 my-10">
            <Image src={Arrow} alt="Community Arrow" layout="responsive" />
          </div>
          <div className="space-y-4">
            <a
              href="/"
              className="grid place-content-center rounded-xl uppercase bg-[#48DC69] h-[72px] w-[17rem] text-white font-kanit font-bold text-xl tracking-wider"
            >
              Join LINE Chat
            </a>
            <a
              href="/"
              className="grid place-content-center rounded-xl uppercase bg-[#5662DE] h-[72px] w-[17rem] text-white font-kanit font-bold text-xl tracking-wider"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-black w-full h-28 px-32 flex justify-between items-center">
        <a href="/">
          <Image src={IvdLogoName} />
        </a>
        <div className="flex items-center justify-between w-[65%]">
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
    </>
  );
};

export default Home;
