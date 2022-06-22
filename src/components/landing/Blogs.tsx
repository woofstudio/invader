import moment from "moment";
import Link from "next/link";

const Blogs: React.FC = () => {
  return (
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
        <Link href="/">
          <div className="aspect-[7/4] rounded-2xl relative overflow-hidden text-white font-kanit flex flex-col justify-end duration-500 hover:-translate-y-4 cursor-pointer">
            <div className="z-20 p-8 space-y-4">
              {/* title */}
              <h3 className="font-medium text-3xl">
                เพชรฆาตหน้าทารก : Thomas Dwan
              </h3>
              {/* posted date */}
              <h4 className="font-extralight">
                {moment(new Date()).format("DD MMMM")}
              </h4>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/">
          <div className="aspect-[7/4] rounded-2xl relative overflow-hidden text-white font-kanit flex flex-col justify-end duration-500 hover:-translate-y-4 cursor-pointer">
            <div className="z-20 p-8 space-y-4">
              {/* title */}
              <h3 className="font-medium text-3xl">
                เพชรฆาตหน้าทารก : Thomas Dwan
              </h3>
              {/* posted date */}
              <h4 className="font-extralight">
                {moment(new Date()).format("DD MMMM")}
              </h4>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/">
          <div className="aspect-[7/4] rounded-2xl relative overflow-hidden text-white font-kanit flex flex-col justify-end duration-500 hover:-translate-y-4 cursor-pointer">
            <div className="z-20 p-8 space-y-4">
              {/* title */}
              <h3 className="font-medium text-3xl">
                เพชรฆาตหน้าทารก : Thomas Dwan
              </h3>
              {/* posted date */}
              <h4 className="font-extralight">
                {moment(new Date()).format("DD MMMM")}
              </h4>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
        <Link href="/">
          <div className="aspect-[7/4] rounded-2xl relative overflow-hidden text-white font-kanit flex flex-col justify-end duration-500 hover:-translate-y-4 cursor-pointer">
            <div className="z-20 p-8 space-y-4">
              {/* title */}
              <h3 className="font-medium text-3xl">
                เพชรฆาตหน้าทารก : Thomas Dwan
              </h3>
              {/* posted date */}
              <h4 className="font-extralight">
                {moment(new Date()).format("DD MMMM")}
              </h4>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-dark-400 to-[rgba(37, 37, 37, 0)]"></div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Blogs;
