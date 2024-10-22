import Image from "next/image";

const OurStory4 = () => {
  return (
    <>
      <section className=" bg-sectionColor py-24">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <div className="content">
                <h2 className=" uppercase font-bold italic text-4xl text-heroTextColor">
                  The Expansion Blueprint
                </h2>
                <p className=" text-2xl text-slate-50 uppercase my-5">
                  In 2022, the brothers&apos; vision expanded beyond their
                  original location. With a solid franchise system in place,
                  they opened their first franchise in 2023. This marked the
                  beginning of Meat & Cheezz&apos;s growth, not just as a local
                  favorite but as a brand poised for broader horizons. What
                  started as a risky gamble had transformed into a flourishing
                  business model, and now, Meat & Cheezz is ready to spread its
                  cheesy goodness across Jordan and beyond.
                </p>
                <p className="text-2xl uppercase text-slate-50">
                  This is more than a story of burgers; it&apos;s a tale of
                  vision, determination, and the power of believing in something
                  when no one else does. Meat & Cheezz isn&apos;t just a
                  restaurant—it&apos;s a local legend in the making.
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Image
                src="/ourStory2.png"
                alt="our-story"
                width={500}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory4;
