import Image from "next/image";

const Section2 = () => {
  return (
    <section className="py-24">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <div className="content text-center md:text-left text-slate-50">
              <h2 className=" uppercase font-bold italic text-7xl">
                At meat <br /> and cheezz
              </h2>
              <p className=" text-lg font-normal uppercase my-5">
                Lorem ipsum dolor sit amet consectetur. Commodo non fames augue
                et nisi sed duis fringilla id. Faucibus aliquet rhoncus id nulla
                eget. Volutpat amet ac amet felis sit eu risus etiam. Lectus
                posuere amet ut auctor enim rhoncus mattis convallis ac.
              </p>
              <p className="text-lg font-normal uppercase">
              Lorem
                ipsum dolor sit amet consectetur. Commodo non fames augue et
                nisi sed duis fringilla id. Faucibus aliquet rhoncus id nulla
                eget. Volutpat amet ac amet felis sit eu risus etiam. Lectus
                posuere amet ut auctor enim rhoncus mattis convallis ac.
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/careerSection.png"
              alt="career"
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

export default Section2;
