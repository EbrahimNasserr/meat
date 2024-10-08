import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

const Menu = () => {
  return (
    <section className="py-24 bg-heroTextColor flex justify-center items-center">
      <div className="container">
        <h2 className="text-shadow">Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-36 lg:grid-cols-3 gap-32 max-w-[90%] mx-auto py-36 md:flex-row">
          <div className="relative text-[#292E36] bg-white rounded-xl p-6 px-3 pb-12">
            <div className="flex justify-center absolute w-full -top-24">
              <Image
                src="/menu.png"
                alt="menu"
                width={200}
                height={200}
                className=" max-md:w-[400px] md:w-[400px]"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-center pt-24 pb-3 px-1 border-b-slate-500 border-b-2">
              <CiHeart className=" text-3xl" />
              <h3 className="text-3xl font-semibold">name</h3>
            </div>
            <p className=" my-3 px-1 text-center line-clamp-2">
              Lorem ipsum dolor sit amet consectetur. Congue pharetra dictumst
              sapien pulvinar vel odio urna.
            </p>
            <div className="bg-[#F1F0F0] p-3 rounded-lg flex justify-between items-center">
              <p className="bg-heroTextColor rounded-lg text-slate-50 px-2">
                <span className="bg-white px-1 text-heroTextColor mr-1">+</span>
                ADDONS
              </p>
              <p className="text-heroTextColor text-2xl font-semibold">
                20 JOD
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className=" py-4 px-12 bg-black absolute rounded-lg -bottom-8 text-slate-50">
                ORDER
              </button>
            </div>
          </div>
          <div className="relative text-[#292E36] bg-white rounded-xl p-6 px-3 pb-12">
            <div className="flex justify-center absolute w-full -top-12 md:-top-24">
              <Image
                src="/menu2.png"
                alt="menu"
                width={200}
                height={200}
                className=" md:w-[300px]"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-center pt-24 pb-3 px-1 border-b-slate-500 border-b-2">
              <CiHeart className=" text-3xl" />
              <h3 className="text-3xl font-semibold">name</h3>
            </div>
            <p className=" my-3 px-1 text-center line-clamp-2">
              Lorem ipsum dolor sit amet consectetur. Congue pharetra dictumst
              sapien pulvinar vel odio urna.
            </p>
            <div className="bg-[#F1F0F0] p-3 rounded-lg flex justify-between items-center">
              <p className="bg-heroTextColor rounded-lg text-slate-50 px-2">
                <span className="bg-white px-1 text-heroTextColor mr-1">+</span>
                ADDONS
              </p>
              <p className="text-heroTextColor text-2xl font-semibold">
                20 JOD
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className=" py-4 px-12 bg-black absolute rounded-lg -bottom-8 text-slate-50">
                ORDER
              </button>
            </div>
          </div>
          <div className="relative text-[#292E36] bg-white rounded-xl p-6 px-3 pb-12">
            <div className="flex justify-center absolute w-full -top-12 md:-top-24">
              <Image
                src="/menu3.png"
                alt="menu"
                width={200}
                height={200}
                className="md:w-[250px]"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-center pt-24 pb-3 px-1 border-b-slate-500 border-b-2">
              <CiHeart className=" text-3xl" />
              <h3 className="text-3xl font-semibold">name</h3>
            </div>
            <p className=" my-3 px-1 text-center line-clamp-2">
              Lorem ipsum dolor sit amet consectetur. Congue pharetra dictumst
              sapien pulvinar vel odio urna.
            </p>
            <div className="bg-[#F1F0F0] p-3 rounded-lg flex justify-between items-center">
              <p className="bg-heroTextColor rounded-lg text-slate-50 px-2">
                <span className="bg-white px-1 text-heroTextColor mr-1">+</span>
                ADDONS
              </p>
              <p className="text-heroTextColor text-2xl font-semibold">
                20 JOD
              </p>
            </div>
            <div className="flex justify-center items-center">
              <button className=" py-4 px-12 bg-black absolute rounded-lg -bottom-8 text-slate-50">
                ORDER
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link
            className=" py-4 px-12 bg-black rounded-lg uppercase text-slate-50"
            href="/menu"
          >
            view menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
