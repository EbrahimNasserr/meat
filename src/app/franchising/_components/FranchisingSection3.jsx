import Link from "next/link";

const FranchisingSection3 = () => {
  return (
    <section className="py-24 bg-sectionColor">
      <div className="container px-6 mx-auto">
        <h2 className="custom-h2">Process</h2>
        <div class="lg:flex justify-center w-full min-h-screen mt-32 xl:container hidden ">
          <div class="w-[250px]">
            {/* <!-- right  --> */}
            <div class="relative flex justify-end w-full">
              <span class="relative z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
                <span class="bg-slate-50 rounded-full size-8"></span>
              </span>

              {/* <!-- card  --> */}
              <div class="absolute right-[-160%] w-[150%]">
                {/* <!-- header  --> */}
                <div class="relative grid h-16 p-2 text-white  place-content-center  bg-heroTextColor">
                  <svg
                    class="absolute left-[-50px] top-[50%] -translate-y-1/2"
                    width="60"
                    height="30"
                    viewBox="0 0 102 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.28949e-06 25.5569L101.25 51.1046L101.25 0.00913177L1.28949e-06 25.5569Z"
                      fill="#DFAF27"
                    />
                  </svg>
                  <h3 class="text-3xl text-center font-bold italic uppercase">
                    Initial Inquiry
                  </h3>
                </div>
                {/* <!-- body  --> */}
                <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                  Start your journey by submitting an inquiry form to express
                  your interest in becoming a Meat & Cheezz franchisee. Our team
                  will review your information and reach out to you shortly.
                </p>
              </div>
              {/* <!-- line  --> */}
              <span class="w-[10px] relative top-4 rotate-45 right-32 h-[225px] bg-heroTextColor"></span>
            </div>

            {/* <!-- left  --> */}
            <div class="relative top-[-34px] flex w-full">
              <span class="relative z-10 grid  bg-heroTextColor rounded-full size-16 place-content-center">
                <span class="bg-slate-50 rounded-full size-8"></span>
              </span>

              {/* <!-- card  --> */}
              <div class="absolute left-[-160%] w-[150%]">
                {/* <!-- header  --> */}
                <div class="relative grid h-16 p-2 text-white  place-content-center  bg-heroTextColor ">
                  <svg
                    class="absolute right-[-50px] top-[50%] -translate-y-1/2"
                    width="60"
                    height="30"
                    viewBox="0 0 102 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M102 25.5569L0.749998 51.1046L0.75 0.00913177L102 25.5569Z"
                      fill="#DFAF27"
                    />
                  </svg>
                  <h3 class="text-3xl text-center font-bold italic uppercase">
                    Franchise Disclosure
                  </h3>
                </div>
                {/* <!-- body  --> */}
                <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                  After our initial conversation, you’ll receive the Franchise
                  Disclosure Document (FDD). This comprehensive document
                  provides essential insights into our business model,
                  investment requirements, and legal obligations.
                </p>
              </div>

              <span class="w-[10px] relative top-4 -rotate-45 left-16 h-[225px]  bg-heroTextColor"></span>
            </div>

            {/* <!-- right  --> */}
            <div class="relative top-[-66px] flex justify-end w-full">
              <div class="relative flex justify-end w-full">
                <span class="relative z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
                  <span class="bg-slate-50 rounded-full size-8"></span>
                </span>

                {/* <!-- card  --> */}
                <div class="absolute right-[-160%] w-[150%]">
                  {/* <!-- header  --> */}
                  <div class="relative grid h-16 p-2 text-white  place-content-center  bg-heroTextColor">
                    <svg
                      class="absolute left-[-50px] top-[50%] -translate-y-1/2"
                      width="60"
                      height="30"
                      viewBox="0 0 102 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.28949e-06 25.5569L101.25 51.1046L101.25 0.00913177L1.28949e-06 25.5569Z"
                        fill="#DFAF27"
                      />
                    </svg>
                    <h3 class="text-3xl text-center font-bold italic uppercase">
                      Application Submittion
                    </h3>
                  </div>
                  {/* <!-- body  --> */}
                  <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                    Complete and submit the franchise application form, sharing
                    your background, experience, and financial qualifications to
                    help us assess your fit for the franchise.
                  </p>
                </div>
                {/* <!-- line  --> */}
                <span class="w-[10px] relative top-4 rotate-45 right-32 h-[225px] bg-heroTextColor"></span>
              </div>
            </div>

            {/* <!-- left  --> */}
            <div class="relative top-[-94px] flex w-full">
              {/* <!-- left  --> */}
              <div class="relative top-[-34px] flex w-full">
                <span class="relative z-10 grid  bg-heroTextColor rounded-full size-16 place-content-center">
                  <span class="bg-slate-50 rounded-full size-8"></span>
                </span>

                {/* <!-- card  --> */}
                <div class="absolute left-[-160%] w-[150%]">
                  {/* <!-- header  --> */}
                  <div class="relative grid h-16 p-2 text-white  place-content-center  bg-heroTextColor ">
                    <svg
                      class="absolute right-[-50px] top-[50%] -translate-y-1/2"
                      width="60"
                      height="30"
                      viewBox="0 0 102 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M102 25.5569L0.749998 51.1046L0.75 0.00913177L102 25.5569Z"
                        fill="#DFAF27"
                      />
                    </svg>
                    <h3 class="text-xl text-center font-bold italic uppercase">
                      Background Check & Financial Veri cation
                    </h3>
                  </div>
                  {/* <!-- body  --> */}
                  <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                    Lorem ipsum dolor sit amet consectetur. Vel auctor vulputate
                    non phasellus sagittis amet. Felis interdum commodo eget nec
                    nunc imperdiet diam. Aenean scelerisque purus erat nisl
                  </p>
                </div>

                <span class="w-[10px] relative top-4 -rotate-45 left-16 h-[225px]  bg-heroTextColor"></span>
              </div>
            </div>

            {/* <!-- right  --> */}
            <div class="relative top-[-150px] flex justify-end w-full">
              <div class="relative flex justify-end w-full">
                <span class="relative z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
                  <span class="bg-slate-50 rounded-full size-8"></span>
                </span>

                {/* <!-- card  --> */}
                <div class="absolute right-[-160%] w-[150%]">
                  {/* <!-- header  --> */}
                  <div class="relative grid h-16 p-2 text-white  place-content-center  bg-heroTextColor">
                    <svg
                      class="absolute left-[-50px] top-[50%] -translate-y-1/2"
                      width="60"
                      height="30"
                      viewBox="0 0 102 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.28949e-06 25.5569L101.25 51.1046L101.25 0.00913177L1.28949e-06 25.5569Z"
                        fill="#DFAF27"
                      />
                    </svg>
                    <h3 class="text-3xl text-center font-bold italic uppercase">
                      Financial Review
                    </h3>
                  </div>
                  {/* <!-- body  --> */}
                  <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                    Our team will conduct a thorough review of your financial
                    qualifications to ensure you meet the investment criteria
                    required to successfully operate a Meat & Cheezz franchise.
                  </p>
                </div>
                {/* <!-- line  --> */}
                <span class="w-[10px] relative top-4 rotate-45 right-32 h-[225px] bg-heroTextColor"></span>
              </div>
            </div>

            {/* <!-- left  --> */}
            <div class="relative top-[-150px] flex w-full">
              {/* <!-- left  --> */}
              <div class="relative top-[-34px] flex w-full">
                <span class="relative z-10 grid  bg-heroTextColor rounded-full size-16 place-content-center">
                  <span class="bg-slate-50 rounded-full size-8"></span>
                </span>

                {/* <!-- card  --> */}
                <div class="absolute left-[-160%] w-[150%]">
                  {/* <!-- header  --> */}
                  <div class="relative grid h-16 p-2 text-white  place-content-center  bg-heroTextColor ">
                    <svg
                      class="absolute right-[-50px] top-[50%] -translate-y-1/2"
                      width="60"
                      height="30"
                      viewBox="0 0 102 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M102 25.5569L0.749998 51.1046L0.75 0.00913177L102 25.5569Z"
                        fill="#DFAF27"
                      />
                    </svg>
                    <h3 class="text-3xl text-center font-bold italic uppercase">
                      Due Diligence
                    </h3>
                  </div>
                  {/* <!-- body  --> */}
                  <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                    Memorandum of Understanding & First Payment
                  </p>
                </div>

                <span class="w-[10px] relative top-4 -rotate-45 left-16 h-[225px]  bg-heroTextColor"></span>
              </div>
            </div>

            {/* <!-- right  --> */}
            <div class="relative top-[-220px] flex justify-end w-full">
              <div class="relative flex justify-end w-full">
                <span class="relative z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
                  <span class="bg-slate-50 rounded-full size-8"></span>
                </span>

                {/* <!-- card  --> */}
                <div class="absolute right-[-160%] w-[150%]">
                  {/* <!-- header  --> */}
                  <div class="relative grid h-16 p-2 text-white  place-content-center  bg-heroTextColor">
                    <svg
                      class="absolute left-[-50px] top-[50%] -translate-y-1/2"
                      width="60"
                      height="30"
                      viewBox="0 0 102 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.28949e-06 25.5569L101.25 51.1046L101.25 0.00913177L1.28949e-06 25.5569Z"
                        fill="#DFAF27"
                      />
                    </svg>
                    <h3 class="text-xl text-center font-bold italic uppercase">
                      Final Approval & Franchise Agreement
                    </h3>
                  </div>
                  {/* <!-- body  --> */}
                  <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                    Following the due diligence and interview process, our team
                    will review your application and make a final decision. If
                    approved, you’ll receive the Franchise Agreement to sign.
                  </p>
                </div>
                {/* <!-- line  --> */}
                <span class="w-[10px] relative top-4 rotate-45 right-32 h-[225px] bg-heroTextColor"></span>
              </div>
            </div>

            {/* <!-- left  --> */}
            <div class="relative top-[-250px] flex w-full">
              {/* <!-- left  --> */}
              <div class="relative top-[-34px] flex w-full">
                <span class="relative z-10 grid  bg-heroTextColor rounded-full size-16 place-content-center">
                  <span class="bg-slate-50 rounded-full size-8"></span>
                </span>

                {/* <!-- card  --> */}
                <div class="absolute left-[-160%] w-[150%]">
                  {/* <!-- header  --> */}
                  <div class="relative grid h-16 p-2 text-white  place-content-center  bg-heroTextColor ">
                    <svg
                      class="absolute right-[-50px] top-[50%] -translate-y-1/2"
                      width="60"
                      height="30"
                      viewBox="0 0 102 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M102 25.5569L0.749998 51.1046L0.75 0.00913177L102 25.5569Z"
                        fill="#DFAF27"
                      />
                    </svg>
                    <h3 class="text-xl text-center font-bold italic uppercase">
                      Preparation, Training, & Launch
                    </h3>
                  </div>
                  {/* <!-- body  --> */}
                  <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                    Once you sign the agreement, you’ll participate in our
                    comprehensive training program, designed to equip you with
                    the knowledge and skills needed to operate your Meat &
                    Cheezz franchise successfully. After training, you’ll be
                    ready to launch and serve our mouthwatering offerings!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex-col mt-32 items-center lg:hidden">
          {/* box */}
          <div className="box flex gap-5 items-center flex-col">
            <div class="">
              {/* <!-- header  --> */}
              <div class="grid rounded-lg p-2 text-white  place-content-center  bg-heroTextColor">
                <h3 class="text-3xl text-center font-bold italic uppercase">
                  Initial Inquiry
                </h3>
              </div>
              {/* <!-- body  --> */}
              <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                Start your journey by submitting an inquiry form to express your
                interest in becoming a Meat & Cheezz franchisee. Our team will
                review your information and reach out to you shortly.
              </p>
            </div>
            <div class="w-[10px] h-[100px] bg-heroTextColor text-center"></div>
            <span class="relative bottom-7 z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
              <span class="bg-slate-50 rounded-full size-8"></span>
            </span>
            <div class="w-[10px] relative bottom-12 h-[100px] bg-heroTextColor text-center"></div>
          </div>
          {/* box */}
          <div className="box flex gap-5 items-center flex-col">
            <div class="">
              {/* <!-- header  --> */}
              <div class="grid rounded-lg p-2 text-white  place-content-center  bg-heroTextColor">
                <h3 class="text-3xl text-center font-bold italic uppercase">
                  Franchise Disclosure
                </h3>
              </div>
              {/* <!-- body  --> */}
              <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                After our initial conversation, you&apos;ll receive the Franchise
                Disclosure Document (FDD). This comprehensive document provides
                essential insights into our business model, investment
                requirements, and legal obligations.
              </p>
            </div>
            <div class="w-[10px] h-[100px] bg-heroTextColor text-center"></div>
            <span class="relative bottom-7 z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
              <span class="bg-slate-50 rounded-full size-8"></span>
            </span>
            <div class="w-[10px] relative bottom-12 h-[100px] bg-heroTextColor text-center"></div>
          </div>
          {/* box */}
          <div className="box flex gap-5 items-center flex-col">
            <div class="">
              {/* <!-- header  --> */}
              <div class="grid rounded-lg p-2 text-white  place-content-center  bg-heroTextColor">
                <h3 class="text-3xl text-center font-bold italic uppercase">
                  Application Submittion
                </h3>
              </div>
              {/* <!-- body  --> */}
              <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                Complete and submit the franchise application form, sharing your
                background, experience, and financial qualifications to help us
                assess your fit for the franchise.
              </p>
            </div>
            <div class="w-[10px] h-[100px] bg-heroTextColor text-center"></div>
            <span class="relative bottom-7 z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
              <span class="bg-slate-50 rounded-full size-8"></span>
            </span>
            <div class="w-[10px] relative bottom-12 h-[100px] bg-heroTextColor text-center"></div>
          </div>
          {/* box */}
          <div className="box flex gap-5 items-center flex-col">
            <div class="">
              {/* <!-- header  --> */}
              <div class="grid rounded-lg p-2 text-white  place-content-center  bg-heroTextColor">
                <h3 class="text-3xl text-center font-bold italic uppercase">
                  Background Check & Financial Veri cation
                </h3>
              </div>
              {/* <!-- body  --> */}
              <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                Lorem ipsum dolor sit amet consectetur. Vel auctor vulputate non
                phasellus sagittis amet. Felis interdum commodo eget nec nunc
                imperdiet diam. Aenean scelerisque purus erat nisl
              </p>
            </div>
            <div class="w-[10px] h-[100px] bg-heroTextColor text-center"></div>
            <span class="relative bottom-7 z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
              <span class="bg-slate-50 rounded-full size-8"></span>
            </span>
            <div class="w-[10px] relative bottom-12 h-[100px] bg-heroTextColor text-center"></div>
          </div>
          {/* box */}
          <div className="box flex gap-5 items-center flex-col">
            <div class="">
              {/* <!-- header  --> */}
              <div class="grid rounded-lg p-2 text-white  place-content-center  bg-heroTextColor">
                <h3 class="text-3xl text-center font-bold italic uppercase">
                  Financial Review
                </h3>
              </div>
              {/* <!-- body  --> */}
              <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                Our team will conduct a thorough review of your financial
                qualifications to ensure you meet the investment criteria
                required to successfully operate a Meat & Cheezz franchise.
              </p>
            </div>
            <div class="w-[10px] h-[100px] bg-heroTextColor text-center"></div>
            <span class="relative bottom-7 z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
              <span class="bg-slate-50 rounded-full size-8"></span>
            </span>
            <div class="w-[10px] relative bottom-12 h-[100px] bg-heroTextColor text-center"></div>
          </div>
          {/* box */}
          <div className="box flex gap-5 items-center flex-col">
            <div class="">
              {/* <!-- header  --> */}
              <div class="grid rounded-lg p-2 text-white  place-content-center  bg-heroTextColor">
                <h3 class="text-3xl text-center font-bold italic uppercase">
                  Due Diligence
                </h3>
              </div>
              {/* <!-- body  --> */}
              <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                Memorandum of Understanding & First Payment
              </p>
            </div>
            <div class="w-[10px] h-[100px] bg-heroTextColor text-center"></div>
            <span class="relative bottom-7 z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
              <span class="bg-slate-50 rounded-full size-8"></span>
            </span>
            <div class="w-[10px] relative bottom-12 h-[100px] bg-heroTextColor text-center"></div>
          </div>
          {/* box */}
          <div className="box flex gap-5 items-center flex-col">
            <div class="">
              {/* <!-- header  --> */}
              <div class="grid rounded-lg p-2 text-white  place-content-center  bg-heroTextColor">
                <h3 class="text-3xl text-center font-bold italic uppercase">
                  Final Approval & Franchise Agreement
                </h3>
              </div>
              {/* <!-- body  --> */}
              <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                Following the due diligence and interview process, our team will
                review your application and make a final decision. If approved,
                you&apos;ll receive the Franchise Agreement to sign.
              </p>
            </div>
            <div class="w-[10px] h-[100px] bg-heroTextColor text-center"></div>
            <span class="relative bottom-7 z-10 grid bg-heroTextColor rounded-full size-16 place-content-center">
              <span class="bg-slate-50 rounded-full size-8"></span>
            </span>
            <div class="w-[10px] relative bottom-12 h-[100px] bg-heroTextColor text-center"></div>
          </div>
          {/* box */}
          <div className="box flex gap-5 items-center flex-col">
            <div class="">
              {/* <!-- header  --> */}
              <div class="grid rounded-lg p-2 text-white  place-content-center  bg-heroTextColor">
                <h3 class="text-3xl text-center font-bold italic uppercase">
                  Preparation, Training, & Launch
                </h3>
              </div>
              {/* <!-- body  --> */}
              <p class="mt-3 font-semibold italic text-center uppercase text-slate-50">
                Once you sign the agreement, you&apos;ll participate in our
                comprehensive training program, designed to equip you with the
                knowledge and skills needed to operate your Meat & Cheezz
                franchise successfully. After training, you&apos;ll be ready to
                launch and serve our mouthwatering offerings!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/franchising" className="btn">
            join us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FranchisingSection3;
