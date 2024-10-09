import Image from "next/image";

const Section4 = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="  text-5xl lg:text-7xl font-bold uppercase font-sans italic text-center text-slate-50 text-shadow">
          The Best Team on <br /> The Planet Always
        </h2>
        <div className="max-w-[1223px] relative bg-boxCareerColor mx-auto mt-24 career-box-shadow rounded-2xl grid grid-cols-1 gap-10 lg:grid-cols-2 p-6">
          <div className="content text-center md:text-left">
            <h3 className=" text-heroTextColor font-bold italic text-5xl">
              Help Nourish. <br /> Help Flourish.
            </h3>
            <p className="font-bold italic text-4xl py-5 text-heroTextColor">Apply?</p>
            <p className=" font-medium text-lg text-slate-50 pb-5">
              Lorem ipsum dolor sit amet consectetur. Commodo non fames augue et
              nisi sed duis fringilla id. Faucibus aliquet rhoncus id nulla
              eget. Volutpat amet ac amet felis sit eu risus etiam. Lectus
              posuere amet ut auctor enim rhoncus mattis convallis ac.
            </p>
            <p className=" font-medium text-lg text-slate-50">
              Lorem ipsum dolor sit amet consectetur. Commodo non fames augue et
              nisi sed duis fringilla id. Faucibus aliquet rhoncus id nulla
              eget. Volutpat amet ac amet felis sit eu risus etiam. Lectus
              posuere amet ut auctor enim rhoncus mattis convallis ac.
            </p>
          </div>
          <div className="video flex justify-end xl:absolute -right-24 top-5">
            <Image
              src="/careerVideo.png"
              width={700}
              height={700}
              alt="video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
