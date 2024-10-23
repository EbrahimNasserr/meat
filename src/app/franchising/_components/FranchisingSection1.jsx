import Image from "next/image";

const FranchisingSection1 = () => {
  return (
    <section className="py-24 bg-sectionColor">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className=" justify-evenly gap-10 flex flex-col md:hidden pb-24 items-center bg-franchising-page-gradient w-full ">
          <div className="w-full text-center">
            <p className="text-6xl mb-5 md:text-7xl italic font-bold text-heroTextColor">
              350K+
            </p>
            <h3 className="text-slate-50 font-medium text-2xl uppercase">
              Sandwiches Crafted Per Location
            </h3>
          </div>
          <div className="w-full text-center">
            <p className="text-6xl mb-5 md:text-7xl italic font-bold text-heroTextColor">
              60+
            </p>
            <h3 className="text-slate-50 font-medium text-2xl uppercase">
              employees on our growing team
            </h3>
          </div>
          <div className="w-full text-center">
            <p className="text-6xl mb-5 md:text-7xl italic font-bold text-heroTextColor">
              120K+
            </p>
            <h3 className="text-slate-50 font-medium text-2xl uppercase">
              social media followers and millions of monthly viewers
            </h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="content">
            <h2 className="font-bold italic text-5xl sm:text-7xl text-heroTextColor">
              Ready to <br /> &quot;Cheezz it&quot;?
            </h2>
            <p className="text-slate-50 py-7 italic text-3xl">
              Thank you for considering the opportunity to join the Meat &
              Cheezz family! W&apos;re excited to share our journey with you and
              explore how you can be a part of something truly special. Since
              our launch in 2019, we&apos;ve transformed a simple burger joint
              into a beloved destination for food lovers. Our passion for
              creating mouth-watering burgers, combined with a vibrant,
              pop-culture-inspired atmosphere, has allowed us to build a brand
              that connects with people in a meaningful way. As a franchisee,
              you&apos;ll not only be stepping into a thriving business model
              but also embracing a lifestyle that prioritizes balance and
              community. We believe in creating experiences that bring people
              together over great food, and we can&apos;t wait to see how
              you&apos;ll bring that spirit to your own location. Join us on
              this exciting journey and discover how Meat & Cheezz can make a
              difference in your life. Together, let&apos;s continue to{" "}
              <span className="text-heroTextColor font-bold">&quot;Cheezz it!&quot;</span>{" "}
              <br />Sincerely,
            </p>
            <Image
              src="/muhammad-ali-signature.png"
              alt="signature"
              loading="lazy"
              width={200}
              height={200}
            />
            <p className="text-slate-50 italic text-3xl">Mohammad Qadoumi <br /> Co-Founder,  <br />Meat & Cheezz</p>
          </div>
          <div className="image flex md:justify-end md:items-start justify-center items-center">
            <Image
              src="/Group 104.png"
              alt="franchising"
              loading="lazy"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchisingSection1;
