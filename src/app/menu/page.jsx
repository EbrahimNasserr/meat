import Reviews from "@/components/Reviews";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";
const MenuPage = () => {
  return (
    <>
      <section className=" h-[120vh] bg-[#1d1d1b] relative ">
        <div className="container w-full h-full mx-auto">
          <div className="flex justify-center items-center w-[90%] md:w-full mx-auto h-full">
            <div className="box w-[1230px] rounded-2xl p-6 bg-menuPage-layer-image bg-contain bg-right bg-no-repeat flex flex-col-reverse gap-4 md:flex-row justify-between items-center z-40 bg-white">
              <div className="uppercase flex flex-col gap-3 items-center md:justify-start w-full md:w-[70%]">
                <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold italic text-heroTextColor">
                  Exclusive Offers
                </h1>
                <p className=" italic text-center md:text-start font-semibold text-xl sm:text-3xl md:text-4xl">
                  Satisfy Your Cravings <br /> with Our Special Deals!
                </p>
                <div className="mt-5 flex w-full justify-center items-center">
                  <Link href="/order" className="btn">
                    order now
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src="/menuHero.png"
                  alt="hero"
                  width={700}
                  height={700}
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0">
            <Image
              src="/hero2.png"
              alt="hero"
              width={500}
              height={500}
              className=" lg:w-[800px] z-10 hidden lg:block"
              loading="lazy"
            />
          </div>
          <div className="absolute top-[50%] md:-top-12 right-0">
            <Image
              src="/layer-menu-page.png"
              alt="hero"
              width={250}
              height={250}
              className=" md:w-[500px] "
              loading="lazy"
            />
          </div>
          <div className="absolute top-[20%]  md:top-0 left-0">
            <Image
              src="/smokeMenuHero.png"
              alt="hero"
              width={250}
              height={250}
              className=" md:w-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      {/* // reviews */}
      <Reviews />
      {/* menu */}
      <section className="py-24 bg-heroTextColor bg-hero-image bg-cover  bg-center bg-no-repeat flex justify-center items-center">
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
                  <span className="bg-white px-1 text-heroTextColor mr-1">
                    +
                  </span>
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
                  <span className="bg-white px-1 text-heroTextColor mr-1">
                    +
                  </span>
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
                  <span className="bg-white px-1 text-heroTextColor mr-1">
                    +
                  </span>
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
                  <span className="bg-white px-1 text-heroTextColor mr-1">
                    +
                  </span>
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
                  <span className="bg-white px-1 text-heroTextColor mr-1">
                    +
                  </span>
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
                  <span className="bg-white px-1 text-heroTextColor mr-1">
                    +
                  </span>
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
        </div>
      </section>
    </>
  );
};

export default MenuPage;
