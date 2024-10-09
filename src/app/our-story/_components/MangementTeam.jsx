const ManagementTeam = () => {
  return (
    <section className="bg-white pt-10 pb-10 lg:pb-0 bg-menuPage-layer-image bg-no-repeat bg-right bg-contain">
      <div className="container mx-auto">
        <h2 className="italic text-center text-4xl font-bold uppercase text-heroTextColor">
          Management Team
        </h2>
        <div className=" grid px-6 grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 pt-12">
          <div className="w-full h-[456px] bg-boxColorGray flex items-end">
            <div className="bg-heroTextColor text-slate-50 w-full text-center uppercase p-3 lg:hidden">
              <h2 className="font-bold text-2xl">Bilal Qadoumi</h2>
              <p className="text-lg font-bold">Operations Manager</p>
            </div>
          </div>
          <div className="w-full h-[456px] bg-boxColorGray flex items-end">
            <div className="bg-heroTextColor text-slate-50 w-full text-center uppercase p-3 lg:hidden">
              <h2 className="font-bold text-2xl">Yehya Qadoumi</h2>
              <p className="text-lg font-medium">Co-Founder & Executive Chef</p>
            </div>
          </div>
          <div className="w-full h-[456px] bg-boxColorGray flex items-end">
            <div className="bg-heroTextColor text-slate-50 w-full text-center uppercase p-3 lg:hidden">
              <h2 className="font-bold text-2xl">Mohammad Qadoumi</h2>
              <p className="text-lg font-medium">Co-Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[3000px] mx-auto bg-teal-950">
        <div className="bg-heroTextColor w-full lg:grid px-24 gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hidden">
          <div className=" w-full">
            <div className="bg-heroTextColor text-slate-50 w-full text-center uppercase p-3">
              <h2 className="font-bold text-2xl">Bilal Qadoumi</h2>
              <p className="text-lg font-bold">Operations Manager</p>
            </div>
          </div>
          <div className="">
            <div className="bg-heroTextColor text-slate-50 w-full text-center uppercase p-3">
              <h2 className="font-bold text-2xl">Yehya Qadoumi</h2>
              <p className="text-lg font-bold">Co-Founder & Executive Chef</p>
            </div>
          </div>
          <div className="">
            <div className=" text-slate-50 w-full text-center uppercase p-3">
              <h2 className="font-bold text-2xl">Mohammad Qadoumi</h2>
              <p className="text-lg font-bold">Co-Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
