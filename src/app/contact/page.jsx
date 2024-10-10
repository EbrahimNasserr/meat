import { BsPersonVcard } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { CiMobile1 } from "react-icons/ci";
import { IoEarthOutline } from "react-icons/io5";
import Image from "next/image";

const Contact = () => {
  return (
    <section className=" py-60 bg-sectionColor">
      <div className="container mx-auto px-6">
        <h2 className="custom-h2">Franchising</h2>
        <p className="text-center py-10 text-4xl font-bold uppercase text-heroTextColor">
          GET STARTED
        </p>
        <form
          action=""
          className="mt-5 w-full lg:w-1/2 mx-auto rounded-xl p-6 bg-slate-50 "
        >
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-3xl flex gap-2 text-heroTextColor uppercase font-bold italic mb-5"
            >
              <BsPersonVcard />
              name
            </label>
            <input
              type="text"
              name="FistName"
              id="name"
              placeholder="First Name (Required)"
              className="mb-5 p-3 rounded-lg placeholder:text-black border border-slate-300"
            />
            <input
              type="text"
              name="LastName"
              id="name"
              placeholder="Last Name (Required)"
              className="mb-5 p-3 rounded-lg placeholder:text-black border border-slate-300"
            />
          </div>
          <div>
            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="text-3xl flex gap-2 text-heroTextColor uppercase font-bold italic mb-5"
              >
                <IoLocationOutline />
                address
              </label>
              <input
                type="text"
                name="StreetAddress"
                id="address"
                placeholder="Street Address (Required)"
                className="mb-5 p-3 rounded-lg placeholder:text-black border border-slate-300"
              />
              <input
                type="text"
                name="City"
                id="address"
                placeholder="City (Required)"
                className="mb-5 p-3 rounded-lg placeholder:text-black border border-slate-300"
              />
            </div>
            <div>
              <input
                list="State-list"
                id="address"
                name="States"
                placeholder="Select A State (Required)"
                className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
              />
              <datalist id="State-list" className="w-full">
                <option value="Apple" />
                <option value="Banana" />
                <option value="Cherry" />
                <option value="Grapes" />
                <option value="Orange" />
              </datalist>
              <input
                type="number"
                name="Zip"
                placeholder="Zip Code (Required)"
                className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
                id="address"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              className="text-3xl flex gap-2 text-heroTextColor uppercase font-bold italic mb-5"
              htmlFor="contact"
            >
              <CiMobile1 />
              contact
            </label>
            <input
              type="tel"
              name="Work Phone"
              id="contact"
              placeholder="Work Phone (Required)"
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
            />
            <input
              type="tel"
              name="Cell Phone"
              id="contact"
              placeholder="Cell Phone (Required)"
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
            />
            <input
              type="email"
              name="Email Address"
              id="contact"
              placeholder="Email Address (Required)"
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
            />
            <input
              list="time-list"
              id="time"
              name="times"
              placeholder="Best Time to Contact (Required)"
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
            />
            <datalist id="time-list" className="w-full">
              <option value="Apple" />
              <option value="Banana" />
              <option value="Cherry" />
              <option value="Grapes" />
              <option value="Orange" />
            </datalist>
          </div>
          <div className="flex flex-col">
            <label
              className="text-3xl flex gap-2 text-heroTextColor uppercase font-bold italic mb-5"
              htmlFor="GeographicArea"
            >
              <IoEarthOutline />
              Geographic Area of Interest
            </label>
            <input
              type="text"
              name="GeographicArea"
              id="GeographicArea"
              placeholder="Preferred City"
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
            />
            {/* state list */}
            <input
              list="State-list2"
              id="address"
              name="States2"
              placeholder="Select A State (Required)"
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
            />
            <datalist id="State-list2" className="w-full">
              <option value="Apple" />
              <option value="Banana" />
              <option value="Cherry" />
              <option value="Grapes" />
              <option value="Orange" />
            </datalist>
            {/* end state list */}
            {/* country list */}
            <input
              list="country-list"
              id="address"
              name="countryList"
              placeholder="Preferred Country (Required)"
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
            />
            <datalist id="country-list" className="w-full">
              <option value="Apple" />
              <option value="Banana" />
              <option value="Cherry" />
              <option value="Grapes" />
              <option value="Orange" />
            </datalist>
            {/* end country list */}
          </div>
          <div className="flex flex-col">
            <label
              className="text-3xl flex gap-2 text-heroTextColor uppercase font-bold italic mb-5"
              htmlFor="FranchisingDetails"
            >
              <Image src="/Image.svg" alt="svg" width={30} height={30} />
              Franchising Details
            </label>
            <input
              list="netWorth"
              name="FranchisingDetails"
              id="FranchisingDetails"
              placeholder="Net Worth (Required)"
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
            />
            {/* netWorth list */}
            <datalist id="netWorth" className="w-full">
              <option value="Apple" />
              <option value="Banana" />
              <option value="Cherry" />
              <option value="Grapes" />
              <option value="Orange" />
            </datalist>
            {/* end state list */}
            {/* country list */}
            <input
              list="select-list"
              id="FranchisingDetails"
              name="FranchisingDetails"
              placeholder="Select One... (Required)"
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
            />
            <datalist id="select-list" className="w-full">
              <option value="Apple" />
              <option value="Banana" />
              <option value="Cherry" />
              <option value="Grapes" />
              <option value="Orange" />
            </datalist>
            {/* end country list */}
          </div>
          <div className="flex flex-col">
            <label
              className="text-3xl flex gap-2 text-heroTextColor uppercase font-bold italic mb-5"
              htmlFor="experience"
            >
              <Image src="/image fill.svg" width={30} height={30} alt="svg" />
              experience
            </label>
            {/* experience */}
            <input
              list="country-list"
              id="address"
              name="countryList"
              placeholder="Select One... (Required)"
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
            />
            <datalist id="country-list" className="w-full">
              <option value="Apple" />
              <option value="Banana" />
              <option value="Cherry" />
              <option value="Grapes" />
              <option value="Orange" />
            </datalist>
            {/* experience */}
            <textarea
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
              name="message"
              id="experience"
              placeholder="Message"
              cols="30"
              rows="10"
            ></textarea>
            <p>Maximum 5000 characters</p>
          </div>
          <div className="flex flex-col">
            <label
              className="text-3xl flex gap-2 text-heroTextColor uppercase font-bold italic my-5"
              htmlFor="info"
            >
              <BsPersonVcard />
              Additional Info
            </label>
            <textarea
              className="mb-5 p-3 w-full rounded-lg placeholder:text-black border border-slate-300"
              name="message"
              id="experience"
              placeholder="Comments"
              cols="30"
              rows="10"
            ></textarea>
            <p>Maximum 5000 characters</p>
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="px-24 py-3 bg-heroTextColor text-slate-50 rounded-full"
            >
              Submit
            </button>
          </div>
          <div className="border border-[#CBCBCC] mt-10"></div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
