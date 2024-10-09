"use client";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";
import ManagementTeam from "./_components/MangementTeam";
import OurStorySection from "./_components/OurStory";
import OurStory2 from "./_components/OurStory2";
import OurStory3 from "./_components/OurStory3";
import OurStory4 from "./_components/OurStory4";
import MissionAndVision from "./_components/MissionAndVision";

const OurStory = () => {
  useEffect(() => {
    // Split the text into words and characters using SplitType
    const typeSplit = new SplitType("[animate]", {
      types: "lines, words, chars",
      tagName: "span",
    });
    

    // GSAP animation for the words
    gsap.from("[animate] .word", {
      y: "100%",
      opacity: 0,
      duration: 0.9,
      ease: "power1.out",
      stagger: 0.1,
    });
  }, []);
  return (
    <>
      <section className=" h-[140vh] lg:h-screen bg-[#1d1d1b] relative ">
        <div className="container h-full mx-auto">
          <div className="flex px-6 justify-center gap-20 flex-col items-center mx-auto h-full lg:flex-row lg:justify-between ">
            <div animate="true" className=" ">
              <h1
                className="text-4xl md:text-6xl lg:text-7xl italic text-heroTextColor font-bold uppercase"
              >
                Humble Beginnings
              </h1>
              <span className="text-3xl italic text-heroTextColor uppercase font-bold">
                to a local legend in the making
              </span>
              <p className="text-slate-50 mt-5 uppercase font-semibold text-2xl">
                In less than five years, we&apos;ve turned a regular burger
                joint into a trendsetter by sharing our passion with others and
                piling on{" "}
                <span className="text-heroTextColor font-bold">
                  A LOT of CHEEZZ!
                </span>
              </p>
            </div>
            <div className=" w-full justify-center items-center">
              <div className=" w-full mx-auto h-[350px] bg-boxColorGray"></div>
            </div>
          </div>
          <div className="absolute -bottom-2 left-0">
            <Image
              src="/smokeMenuHero.png"
              alt="hero"
              width={250}
              height={250}
              className=" md:w-[500px] rotate-45"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <ManagementTeam />
      <OurStorySection />
      <OurStory2 />
      <OurStory3 />
      <OurStory4 />
      <MissionAndVision />
    </>
  );
};

export default OurStory;
