import Image from "next/image";
import ManagementTeam from "./_components/MangementTeam";

const OurStory = () => {
  return (
    <>
      <section className=" h-[140vh] lg:h-screen bg-[#1d1d1b] relative ">
        <div className="container h-full mx-auto">
          <div className="flex px-6 justify-center gap-20 flex-col items-center mx-auto h-full lg:flex-row lg:justify-between ">
            <div className=" ">
              <h1 className="text-4xl md:text-6xl lg:text-7xl italic text-heroTextColor font-bold uppercase">
                Humble Beginnings
              </h1>
              <span className="text-3xl italic text-heroTextColor uppercase font-bold">
                to a local legend in the making
              </span>
              <p className="text-slate-50 mt-5 uppercase font-semibold text-2xl">
                In less than five years, we&apos;ve turned a regular burger joint
                into a trendsetter by sharing our passion with others and piling
                on{" "}
                <span className="text-heroTextColor font-bold">
                  A LOT of CHEEZZ!
                </span>
              </p>
            </div>
            <div className=" w-full justify-center items-center">
              <div className=" w-full mx-auto h-[350px] bg-boxColorGray"></div>
            </div>
          </div>
          <div className="absolute -bottom-2 left-0">
            <Image
              src="/smokeMenuHero.png"
              alt="hero"
              width={250}
              height={250}
              className=" md:w-[500px] rotate-45"
              loading="lazy"

            />
          </div>
        </div>
      </section>

      <ManagementTeam />
    </>
  );
};

export default OurStory;
