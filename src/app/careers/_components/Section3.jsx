import Image from "next/image";
import { CiStar } from "react-icons/ci";

const Section3 = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className=" flex justify-center">
            <Image
              src="/careerSection.png"
              alt="career"
              width={500}
              height={500}
              loading="lazy"
              className="  rotate-45"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="content text-center md:text-left text-slate-50">
              <h2 className=" uppercase font-bold italic text-7xl">
                who <br /> Believe In
              </h2>
              <ul className="mt-10">
                <li className="font-medium uppercase text-md flex flex-col justify-center md:flex-row md:justify-start items-center">
                  <CiStar className="text-3xl" />{" "}
                  <span className="mx-2 relative bottom-1">.</span> Serving high
                  quality, fresh products with energy and a sense of urgency
                </li>
                <li className="font-medium uppercase text-md flex flex-col justify-center md:flex-row md:justify-start items-center my-3">
                  <CiStar className="text-3xl" />{" "}
                  <span className="mx-2 relative bottom-1">.</span> Serving
                  customers personalized products in a clean, warm and friendly
                  atmosphere
                </li>
                <li className="font-medium uppercase text-md flex flex-col justify-center md:flex-row md:justify-start items-center my-3">
                  <CiStar className="text-3xl" />{" "}
                  <span className="mx-2 relative bottom-1">.</span> Working with
                  and serving others- &quot;sharing your life with the customer&quot;
                </li>
                <li className="font-medium uppercase text-md flex flex-col justify-center md:flex-row md:justify-start items-center">
                  <CiStar className="text-3xl" />{" "}
                  <span className="mx-2 relative bottom-1">.</span> Being a part
                  of a bigger whole and having the desire to give back to your
                  community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
