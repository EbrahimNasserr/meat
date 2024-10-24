import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
const FranchisingSection5 = () => {
  return (
    <section className="py-24 bg-sectionColor">
      <div className="container mx-auto px-6">
        <h2 className="custom-h2 pb-24">Frequently Asked Questions</h2>
        <ul className="text-center ">
          <li className=" relative mb-5 flex items-center justify-between text-2xl font-semibold text-slate-50 p-6">
            <p className="">
              What do I receive as part of the franchise package?
            </p>
            <FaPlus className=" text-xl" />
            <div className="w-full flex justify-center absolute bottom-0">
              <div className="w-full border-b border-slate-300"></div>
            </div>
          </li>
          <li className=" relative mb-5 flex items-center justify-between text-2xl font-semibold text-slate-50 p-6">
            <p className="">
              Can I operate the franchise using my own tech systems?
            </p>
            <FaPlus className=" text-xl" />
            <div className="w-full flex justify-center absolute bottom-0">
              <div className="w-full border-b border-slate-300"></div>
            </div>
          </li>
          <li className=" relative mb-5 flex items-center justify-between text-2xl font-semibold text-slate-50 p-6">
            <p className="">
              Can I cancel the franchise agreement and receive a refund?
            </p>
            <FaPlus className=" text-xl" />
            <div className="w-full flex justify-center absolute bottom-0">
              <div className="w-full border-b border-slate-300"></div>
            </div>
          </li>
          <li className=" relative mb-5 flex items-center justify-between text-2xl font-semibold text-slate-50 p-6">
            <p className="">Is training provided for staff and management?</p>
            <FaPlus className=" text-xl" />
            <div className="w-full flex justify-center absolute bottom-0">
              <div className="w-full border-b border-slate-300"></div>
            </div>
          </li>
          <li className=" relative mb-5 flex items-center justify-between text-2xl font-semibold text-slate-50 p-6">
            <p className="">
              Can I use local suppliers for ingredients and equipment?
            </p>
            <FaPlus className=" text-xl" />
            <div className="w-full flex justify-center absolute bottom-0">
              <div className="w-full border-b border-slate-300"></div>
            </div>
          </li>
          <li className=" relative mb-5 flex items-center justify-between text-2xl font-semibold text-slate-50 p-6">
            <p className="">
              Do I need to follow a specific layout or restaurant design?
            </p>
            <FaPlus className=" text-xl" />
            <div className="w-full flex justify-center absolute bottom-0">
              <div className="w-full border-b border-slate-300"></div>
            </div>
          </li>
          <li className=" relative mb-5 flex items-center justify-between text-2xl font-semibold text-slate-50 p-6">
            <p className="">
              How is this burger franchise better than others in the UAE market?
            </p>
            <FaPlus className=" text-xl" />
            <div className="w-full flex justify-center absolute bottom-0">
              <div className="w-full border-b border-slate-300"></div>
            </div>
          </li>
          <li className=" relative mb-5 flex items-center justify-between text-2xl font-semibold text-slate-50 p-6">
            <p className="">
              Are there ongoing fees or hidden costs involved in the franchise?
            </p>
            <FaPlus className=" text-xl" />
            <div className="w-full flex justify-left absolute bottom-0">
              <div className="w-full border-b border-slate-300"></div>
            </div>
          </li>
          <li className=" relative mb-5 flex items-center justify-between text-2xl font-semibold text-slate-50 p-6">
            <p className="">
              How often are updates or menu changes introduced?
            </p>
            <FaPlus className=" text-xl" />
            <div className="w-full flex justify-left absolute bottom-0">
              <div className="w-full border-b border-slate-300"></div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FranchisingSection5;
