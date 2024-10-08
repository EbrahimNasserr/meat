import Image from "next/image";
import Link from "next/link";

const Franchising = () => {
  return (
    <section className="bg-heroTextColor flex justify-center items-center">
      <div className="container">
      <h2 className="custom-h2 mb-20 ">
        Franchising
      </h2>
      <div className=" max-w-[90%] mx-auto py-40">
        <div className="w-full relative p-6 bg-franchising-box-gradient shadow-custom-shadow rounded-3xl flex flex-col gap-4 justify-between items-center md:flex-row md:h-[400px]">
          <div className=" md:absolute lg:-bottom-5 md:left-0 md:-bottom-3">
            <Image
              src="/franchising.png"
              width={500}
              height={500}
              alt="franchising"
              className="md:w-[300px] lg:w-[500px]"
            />
          </div>
          <div></div>
          <div className=" w-1/2 flex flex-col text-center items-center gap-8">
            <h2 className="text-5xl lg:text-7xl text-stroke font-bold uppercase font-sans italic text-center text-slate-50">
              join our family
            </h2>
            <p className="text-2xl font-sans italic text-slate-200 line-clamp-3">
              Lorem ipsum dolor sit amet consectetur. Congue pharetra dictumst
              sapien pulvinar vel odio urna.
            </p>
            <div>
              <Link
                href="/franchising"
                className="uppercase bg-heroTextColor rounded-lg font-bold text-slate-50 py-5 px-12"
              >
                franchising
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>

  );
};

export default Franchising;
