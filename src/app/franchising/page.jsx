"use client";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";
import FranchisingSection1 from "./_components/FranchisingSection1";
import FranchisingSection2 from "./_components/FranchisingSection2";
import FranchisingSection3 from "./_components/FranchisingSection3";
import FranchisingSection4 from "./_components/FranchisingSection4";
import FranchisingSection5 from "./_components/FranchisingSection5";

const Page = () => {
  useEffect(() => {
    // Split the text into words and characters using SplitType
    const typeSplit = new SplitType("[animate]", {
      types: "lines, words, chars",
      tagName: "span",
    });
    // GSAP animation for the words
    gsap.from("[animate] .char", {
      y: "100%",
      opacity: 0,
      duration: 0.9,
      ease: "power1.out",
      stagger: 0.1,
    });
  }, []);
  return (
    <>
      <section className=" h-screen bg-franchisig-layer-image bg-left-top bg-contain bg-no-repeat bg-[#292E36] relative ">
        <div className="container bg-hero-image bg-contain bg-no-repeat bg-center w-full h-full mx-auto">
          <div className="flex justify-center text-center gap-10 flex-col items-center w-full h-full">
            <h1
              animate="true"
              className="text-5xl lg:text-9xl text-stroke font-bold uppercase font-sans text-center text-slate-50"
            >
              franchising
            </h1>
            <p
              animate="true"
              className="font-semibold text-slate-50 italic text-3xl"
            >
              Own a Meat and CHEEZZ franchise
            </p>
            <button className="btn">Download Brochure</button>
          </div>
          <div className="absolute -bottom-12 right-0">
            <Image
              src="/layer-menu-page.png"
              alt="hero"
              width={250}
              height={250}
              className=" md:w-[500px] "
              loading="lazy"
            />
          </div>
          <div className=" justify-evenly gap-10 absolute bottom-0 left-0 right-0 hidden md:flex px-6 items-center bg-franchising-page-gradient w-full ">
            <div className="w-1/3 text-center">
              <p className="text-6xl md:text-7xl italic font-bold text-heroTextColor">
                350K+
              </p>
              <h3 className="text-slate-50 font-medium text-2xl uppercase">
                Sandwiches Crafted Per Location
              </h3>
            </div>
            <div className="w-1/3 text-center">
              <p className="text-6xl md:text-7xl italic font-bold text-heroTextColor">
                60+
              </p>
              <h3 className="text-slate-50 font-medium text-2xl uppercase">
                employees on our growing team
              </h3>
            </div>
            <div className="w-1/3 text-center">
              <p className="text-6xl md:text-7xl italic font-bold text-heroTextColor">
                120K+
              </p>
              <h3 className="text-slate-50 font-medium text-2xl uppercase">
                social media followers and millions of monthly viewers
              </h3>
            </div>
          </div>
        </div>
      </section>
      <FranchisingSection1 />
      <FranchisingSection2 />
      <FranchisingSection3 />
      <FranchisingSection4 />
      <FranchisingSection5 />
    </>
  );
};

export default Page;
