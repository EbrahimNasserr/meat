import Image from "next/image";

const OurStory3 = () => {
  return (
    <section className="bg-sectionColor py-24">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
          <div className="box">
            <Image
              src="/ourStory3.png"
              alt="our-story"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="content">
              <h2 className=" font-bold italic text-4xl text-heroTextColor">
                The Social Media Revolution
              </h2>
              <p className=" font-bold italic text-2xl text-slate-50 uppercase my-5">
                Armed with their perfected menu and new identity, the brothers
                launched a bold social media campaign. The phrase{" "}
                <span className="font-bold italic text-2xl text-heroTextColor mr-2">
                  “Cheese it”
                </span>
                or{""}
                <span className="font-bold inline-block italic text-2xl text-heroTextColor mx-2">
                  "شيزها"
                </span>
                became the rallying cry, symbolizing their indulgent,
                cheese-filled creations. From mozzarella pulls to cheddar dips,
                their burgers and sandwiches became a viral sensation. Suddenly,
                there was no room left in their small shop, and their social
                media pages were exploding with likes and followers. They had
                not just created a menu; they had built a brand that resonated
                with a generation. Behind the scenes, they meticulously
                documented every aspect of their operations, preparing for
                something bigger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory3;
