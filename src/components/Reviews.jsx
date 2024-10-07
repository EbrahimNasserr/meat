import Image from "next/image";

const Reviews = () => {
  return (
    <section className="w-full flex justify-center items-center py-24 bg-review-layer-image bg-white bg-no-repeat bg-right ">
      <div className="container">
      <div className=" max-w-[90%] mx-auto text-center">
        <h2 className=" text-6xl font-bold text-heroTextColor">
          What our clients say
        </h2>
        <p className=" text-xl mt-2">
          Here’s what our customers love about Meat & Cheezz!
        </p>
      </div>
      <div className="max-w-[90%] mx-auto py-10 flex flex-col md:flex-row gap-5">
        <div className="w-full bg-boxColorBlack text-white rounded-xl p-6 ">
          <h2 className=" font-bold uppercase text-xl mb-3">John Kim</h2>
          <div className="flex items-center gap-2 pb-3 border-b-2 border-[#797E89]">
            <span className=" mr-3">5.0</span>
            <Image src="/star.png" alt="star" width={80} height={80} />
          </div>
          <p className="pt-3 line-clamp-3">
            My favorite burger place in Amman. Small restaurant but it is very
            busy. There is a cue during the evening. If you want to eat when
            there is less people, go during lunch.Their beef burger is really
            really good. Chicken is also good, but beef is better. The chicken
            tenders are also good
          </p>
        </div>
        <div className="w-full bg-boxColorBlack text-white rounded-xl p-6 ">
          <h2 className=" font-bold uppercase text-xl mb- line-clamp-3">Rasheed Raya</h2>
          <div className="flex items-center gap-2 pb-3 border-b-2 border-[#797E89]">
            <span className=" mr-3">5.0</span>
            <Image src="/star.png" alt="star" width={80} height={80} />
          </div>
          <p className="pt-3 line-clamp-3">
            When you come from a European country where you hardly find a good
            halal burger and then you visit meat and cheese you will go wild 😅.
            It's really the best of the best , go for lady Gaga (The sandwich
            😉), it will put you directly in the mood and give you all the joy
            you expect from a perfect sandwich. The staff is really friendly and
            always smiling.
          </p>
        </div>
        <div className="w-full bg-boxColorBlack text-white rounded-xl p-6 ">
          <h2 className=" font-bold uppercase text-xl mb-3">John Kim</h2>
          <div className="flex items-center gap-2 pb-3 border-b-2 border-[#797E89]">
            <span className=" mr-3">5.0</span>
            <Image src="/star.png" alt="star" width={80} height={80} />
          </div>
          <p className="pt-3 line-clamp-4">
            100000/10 burger. It's a must-visit spot that delivers on taste,
            presentation, and overall experience! I got the bob marley burger it
            was beyond delightful!!
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};



export default Reviews;
