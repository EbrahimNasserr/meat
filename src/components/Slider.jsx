"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="w-full flex justify-center items-center mx-auto pt-[100px] bg-custom-gradient bg-[#1d1d1b]">
      <div className="container">
      <div className="slider-container max-w-[90%] mx-auto text-slate-50">
        <Slider
          {...settings}
          className=" h-[500px] w-full slider-component flex justify-center items-center"
        >
          <div className=" h-[500px] max-w-[1100px] rounded-xl mx-auto relative px-6 bg-black flex justify-center items-center">
            <div className="flex flex-col h-full">
              <h2 className=" font-bold uppercase text-center italic text-2xl">
                <span className="text-heroTextColor">
                  A message from our CEO,
                </span>{" "}
                <br />
                Mohammad Qadoumi
              </h2>
              <div className="flex justify-center">
                <button className=" w-52 h-11 rounded-t-full rounded-b-full absolute bottom-24 bg-slate-50 text-heroTextColor">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute opacity-0 md:opacity-100 md:-right-[5rem] -right-10 top-20">
              <div className=" w-[550px] h-[315px] bg-slate-50 rounded-xl custom-shadow -rotate-[3.6deg]"></div>
            </div>
          </div>
          <div className=" h-[500px] max-w-[1100px] rounded-xl mx-auto relative px-6 bg-black flex justify-center items-center">
            <div className="flex flex-col h-full ">
              <h2 className=" font-bold uppercase text-center italic text-2xl">
                <span className="text-heroTextColor">
                  A message from our CEO,
                </span>{" "}
                <br />
                Mohammad Qadoumi
              </h2>
              <div className="flex justify-center">
                <button className=" w-52 h-11 rounded-t-full rounded-b-full absolute bottom-24 bg-slate-50 text-heroTextColor">
                  Learn More
                </button>
              </div>
            </div>
            <div className="absolute opacity-0 md:opacity-100 md:-right-[5rem] -right-10 top-20">
              <div className=" w-[550px] h-[315px] bg-slate-50 rounded-xl custom-shadow -rotate-[3.6deg]"></div>
            </div>
          </div>
          <div className=" h-[500px] max-w-[1100px] rounded-xl mx-auto relative px-6 bg-black flex justify-center items-center">
            <div className="flex flex-col h-full">
              <h2 className=" font-bold uppercase  italic text-2xl">
                <span className="text-heroTextColor">
                  A message from our CEO,
                </span>{" "}
                <br />
                Mohammad Qadoumi
              </h2>
              <button className=" w-52 h-11 rounded-t-full rounded-b-full absolute bottom-24 bg-slate-50 text-heroTextColor">
                Learn More
              </button>
            </div>
            <div className="absolute opacity-0 md:opacity-100 md:-right-[5rem] -right-10 top-20">
              <div className=" w-[550px] h-[315px] bg-slate-50 rounded-xl custom-shadow -rotate-[3.6deg]"></div>
            </div>
          </div>
        </Slider>
      </div>
      {/* feel the hype */}
      <div className="bg-layer-image bg-contain bg-no-repeat bg-right w-full">
        <div className=" py-28 max-w-[90%] mx-auto">
          <h2 className="text-center text-8xl italic relative font-bold uppercase text-slate-50 ">
            Feel the Hype
          </h2>
          <div className="flex flex-col gap-8 justify-between mt-12 md:flex-row-reverse xl:justify-evenly">
            <div className=" flex flex-col items-end gap-8">
              <div className="box1 shadow-hype-custom-shadow flex flex-col justify-evenly items-center bg-box-gradient p-12 rounded-2xl w-full sm:flex-row md:flex-col md:w-[85%] lg:flex-row lg:w-full xl:w-[90%]">
                <div className="text-center max-w-lg">
                  <h3 className="italic font-sans uppercase font-bold text-stroke text-5xl text-slate-50 mb-3">
                    share <br /> memories
                  </h3>
                  <p className="italic uppercase font-semibold text-slate-50 mb-3">
                    Lorem ipsum dolor sit amet consectetur. Egestas nunc
                    convallis diam ridiculus
                  </p>
                  <button className=" uppercase font-semibold text-heroTextColor ">
                    more
                  </button>
                </div>
                <div className=" ">
                  <Image
                    src="/image.png"
                    width={350}
                    height={250}
                    alt="group"
                  />
                </div>
              </div>
              <div className="box2 shadow-hype-custom-shadow flex flex-col-reverse justify-between gap-5 items-center bg-box-gradient p-12 rounded-2xl sm:w-full sm:flex-row-reverse md:flex-col md:w-[85%] lg:flex-row-reverse lg:w-full xl:w-[90%]">
                <div className="text-center">
                  <h3 className="italic font-sans uppercase font-bold text-stroke text-5xl text-slate-50 mb-3">
                    more <br /> about us
                  </h3>
                  <p className="italic uppercase font-semibold text-slate-50 mb-3">
                    Lorem ipsum dolor sit amet consectetur. Egestas nunc
                    convallis diam ridiculus
                  </p>
                  <button className=" uppercase font-semibold text-heroTextColor ">
                    more
                  </button>
                </div>
                <div className=" ">
                  <Image
                    src="/hype2.png"
                    width={350}
                    height={250}
                    alt="group"
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-center items-center">
              <div className="box3 shadow-hype-custom-shadow w-full flex flex-col-reverse justify-between gap-5 items-center bg-box-gradient p-6 rounded-2xl sm:flex-row md:flex-col xl:h-[80%] xl:justify-evenly ">
                <div className="text-center max-w-lg">
                  <h3 className="italic font-sans uppercase font-bold text-stroke text-5xl text-slate-50 mb-3">
                    join the trend
                  </h3>
                  <p className="italic uppercase font-semibold text-slate-50 mb-3">
                    Lorem ipsum dolor sit amet consectetur. Egestas nunc
                    convallis diam ridiculus
                  </p>
                  <button className=" uppercase font-semibold text-heroTextColor ">
                    more
                  </button>
                </div>
                <div className="">
                  <Image
                    src="/hype3.png"
                    width={350}
                    height={250}
                    alt="group"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default SimpleSlider;
