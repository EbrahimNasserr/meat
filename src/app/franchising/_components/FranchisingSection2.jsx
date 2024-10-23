import Image from "next/image";

const FranchisingSection2 = () => {
  return (
    <section className="py-24 bg-sectionColor">
      <div className="container mx-auto px-6">
        <div className="w-full rounded-xl text-center bg-slate-50 pb-24 pt-12 px-6 flex items-center flex-col">
            <h2 className="text-4xl font-bold text-heroTextColor pb-6">What to expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div className="w-full text-center">
              <h3 className="text-heroTextColor py-3 text-lg font-bold">
                SELECTIVE
              </h3>
              <p className=" font-medium text-sm text-[#000]">
                Its Not for Everyone. Running a Meat & Cheezz franchise requires
                energy, dedication, and a passion for serving delicious food.
                It&apos;s a hands-on business that thrives on building
                connections with customers and creating unforgettable
                experiences.
              </p>
            </div>
            <div className="w-full text-center">
              <h3 className="text-heroTextColor py-3 text-lg font-bold">
                INVESTMENT
              </h3>
              <p className=" font-medium text-sm text-[#000]">
                Your Path to Success. Several factors influence your startup
                costs, including location and property condition. Estimated
                initial investments range from $145k to $786k, with a detailed
                breakdown available to guide you through the process.
              </p>
            </div>
            <div className="w-full text-center">
              <h3 className="text-heroTextColor py-3 text-lg font-bold">
                RISK
              </h3>
              <p className=" font-medium text-sm text-[#000]">
                Navigating Challenges. Operating a quick-service restaurant can
                be complex. While success and return on investment often reflect
                your hard work and business savvy, it&apos;s important to note
                that results aren&apos;t guaranteed.
              </p>
            </div>
            <div className="w-full text-center">
              <h3 className="text-heroTextColor py-3 text-lg font-bold">
                STEWARDSHIP
              </h3>
              <p className=" font-medium text-sm text-[#000]">
                Leading with Purpose. At Meat & Cheezz, we believe in giving
                back. Our franchise owners not only lead their teams but also
                positively impact their communities. Together, we create a
                culture of care and support, ensuring everyone thrives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchisingSection2;
