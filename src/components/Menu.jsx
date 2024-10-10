import { useGetProductsQuery } from "@/api/apiSlice";
import Error from "@/app/error";
import Loader from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import { CiHeart } from "react-icons/ci";

const Menu = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  return (
    <section className="py-24 bg-heroTextColor flex justify-center items-center">
      <div className="container">
        <h2 className="text-shadow">Menu</h2>
        <div className="grid relative top-12 grid-cols-1 md:grid-cols-2 gap-12 gap-y-72 lg:grid-cols-3 max-w-[90%] mx-auto py-40 md:flex-row">
          {isLoading && <Loader />}
          {error && <Error />}
          {data?.data?.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="relative text-[#292E36] bg-white rounded-xl p-6 px-3 pb-12"
            >
              <div className="flex justify-center absolute w-full -top-40 md:-top-52 left-0">
                <div>
                  <Image
                    src={item.image}
                    alt="menu"
                    width={200}
                    height={200}
                    className=" max-md:w-[400px] md:w-[400px]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center pt-24 pb-3 px-1 border-b-slate-500 border-b-2">
                <CiHeart className=" text-3xl" />
                <h3 className="text-3xl font-semibold">{item.name}</h3>
              </div>
              <p className=" my-3 px-1 text-center line-clamp-2">
                {item.description}
              </p>
              <div className="bg-[#F1F0F0] p-3 rounded-lg flex justify-between items-center">
                <p className="bg-heroTextColor rounded-lg text-slate-50 px-2">
                  <span className="bg-white px-1 text-heroTextColor mr-1">
                    +
                  </span>
                  ADDONS
                </p>
                <p className="text-heroTextColor text-2xl font-semibold">
                  {item.price + " " + "JOD"}
                </p>
              </div>
              <div className="flex justify-center items-center">
                <button className=" py-4 px-12 bg-black absolute rounded-lg -bottom-8 text-slate-50">
                  ORDER
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link
            className=" py-4 px-12 z-50 bg-black rounded-lg uppercase text-slate-50"
            href="/menu"
          >
            view menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
