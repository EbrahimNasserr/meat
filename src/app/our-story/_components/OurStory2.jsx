import Image from "next/image";
const OurStory2 = () => {
  return (
    <section className=" bg-sectionColor py-24">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <div className="content">
              <h2 className=" uppercase font-bold italic text-4xl text-heroTextColor">
                Crafting the Masterpieces
              </h2>
              <p className=" text-2xl text-slate-50 uppercase my-5">
                Determined to turn things around, the brothers went back to the
                drawing board. They stripped down the menu to just two items:
                the beef-loaded Meat & Cheezz burger and the crispy Fried
                Chicken Coleslaw Madonna. They spent countless hours perfecting
                these masterpieces until every bite was a taste of culinary
                perfection.
              </p>
              <p className="text-2xl uppercase font-medium text-slate-50">
                With these in hand, they hit the streets, offering samples to
                anyone who would try them. People were hooked. Alongside these
                iconic creations, they rebranded the restaurant, embracing a
                fresh, modern logo with a vibrant pop-culture theme inspired by
                what they personally loved in music and art that screamed,
                &quot;We&apos;re different, and we&apos;re here to stay.&quot;
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
  );
};

export default OurStory2;
