import { useGetReviewsQuery } from "@/api/apiSlice";
import Error from "@/app/error";
import Loader from "@/app/loading";
import Image from "next/image";

const Reviews = () => {
  const { data, error, isLoading } = useGetReviewsQuery();

  return (
    <section className="w-full flex justify-center items-center py-24 bg-review-layer-image bg-white bg-no-repeat bg-right ">
      <div className="container">
        <div className=" max-w-[90%] mx-auto text-center">
          <h2 className=" text-6xl font-bold text-heroTextColor">
            What our clients say
          </h2>
          <p className=" text-xl mt-2">
            Here&apos;s what our customers love about Meat & Cheezz!
          </p>
        </div>
        <div className="max-w-[90%] mx-auto py-10 flex flex-col md:flex-row gap-5">
          {isLoading && <Loader />}
          {error && <Error />}
          {data?.data?.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="w-full bg-boxColorBlack text-white rounded-xl p-6 "
            >
              <h2 className=" font-bold uppercase text-xl">{item.name}</h2>
              <div className="flex items-center gap-2 pb-3 border-b-2 border-[#797E89]">
                <span className=" mr-3">{item.rate}</span>
                <Image
                  src="/Star.png"
                  alt="star"
                  width={80}
                  height={80}
                  loading="lazy"
                />
              </div>
              <p className="pt-3 line-clamp-3">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
