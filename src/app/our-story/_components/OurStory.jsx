import Image from "next/image";
const OurStorySection = () => {

  return (
    <>
      <section className="py-24 bg-sectionColor bg-layer-image bg-no-repeat bg-right">
        <div className="container px-6 mx-auto">
          <h2 className="custom-h2">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
            <div className="box">
              <Image
                src="/ourStory.png"
                alt="our-story"
                width={700}
                height={700}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="content">
                <h2 className=" font-bold italic text-4xl text-heroTextColor">
                  The Leap of Faith
                </h2>
                <p className=" italic text-2xl text-slate-50 uppercase my-5">
                  <span className=" font-bold text-2xl text-heroTextColor">
                    In 2019
                  </span>
                  , two brothers, Mohammad the accountant and Yehya the sous
                  chef, stood at a crossroads. With all their savings in hand,
                  they took a daring
                  <span className="font-bold ml-2 text-2xl text-heroTextColor">
                    leap of faith,
                  </span>
                </p>
                <p className="text-2xl uppercase text-slate-50">
                  purchasing a struggling restaurant called Meat & Cheese. The
                  name didn&apos;t match the menu, and the place was devoid of
                  customers. But the brothers saw potential where others saw
                  failure. It was a gamble that could make or break them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStorySection;
