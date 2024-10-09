import Image from "next/image";
import Link from "next/link";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";
import Section4 from "./_components/Section4";

const Careers = () => {
  return (
    <>
      <section className=" lg:h-screen bg-[#1d1d1b] relative ">
        <div className="container w-full h-full mx-auto pt-36">
          <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between h-full">
            <div className="box lg:w-1/2 w-full flex justify-center items-center text-center lg:text-start ">
              <div className="content w-[90%] text-slate-50">
                <h1 className=" font-bold italic text-heroTextColor text-7xl uppercase">
                  Ready To <br /> Apply?
                </h1>
                <p className=" py-3 font-bold text-xl uppercase">
                  If you&apos;ve got what it takes to be a part of our team,
                  contact your nearest location.
                </p>
                <p className=" font-normal text-lg uppercase">
                  Lorem ipsum dolor sit amet consectetur. Commodo non fames
                  augue et nisi sed duis fringilla id. Faucibus aliquet rhoncus
                  id nulla eget. Volutpat amet ac amet felis sit eu risus etiam.
                  Lectus posuere amet ut auctor enim rhoncus mattis convallis
                  ac.
                </p>
                <div className="pt-10">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className="mr-3"
                  />
                  <label
                    htmlFor="checkbox"
                    className="text-xl font-normal uppercase"
                  >
                    I Understand and Acknowledge the Paragraph Above
                  </label>
                </div>
                <div className="pt-10 flex justify-center items-center">
                  <Link href="/order" className="btn">
                    order Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/career.png"
                alt="career"
                width={600}
                height={600}
                loading="lazy"
              />
            </div>
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
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  );
};

export default Careers;
