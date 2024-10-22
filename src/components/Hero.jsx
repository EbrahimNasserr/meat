"use client";
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

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
    <section className=" h-screen bg-hero-image bg-contain bg-sectionColor bg-no-repeat bg-center">
      <div className="text-white flex flex-col items-center justify-center h-full relative">
        <div  className=" relative z-40 top-12 w-full">
          <h1 animate="true" className=" text-7xl text-heroTextColor font-bold text-center -rotate-[5deg] z-50 relative bottom-6 lg:bottom-20">
            LETS <br />
            <span animate="true" className=" font-extrabold text-6xl md:text-8xl lg:text-[7rem] text-white text-stroke font-sans italic ">
              CHEEZZ IT!
            </span>
          </h1>
          <div className="w-full flex flex-col lg:flex-row lg:justify-center items-center gap-2 bg-buttons-hero-background z-40 h-[90px] ">
            <Link
              className=" z-50 w-52 h-11 flex justify-center items-center bg-heroTextColor uppercase text-white rounded-2xl"
              href="/our-story"
            >
              our story
            </Link>
            <Link
              href="/menu"
              className="bg-[#525252] z-50  w-52 h-11 flex justify-center items-center  py-5 px-24 uppercase text-white rounded-2xl "
            >
              menu
            </Link>
          </div>
        </div>
        <div  className="absolute top-0 right-0">
          <Image
            src="/hero2.png"
            alt="hero"
            width={500}
            height={500}
            className="border-1 border-[#1D1D1B] border-solid lg:w-[800px] hidden lg:block"
            loading="lazy"
          />
        </div>
        <div className="absolute top-[10%] lg:top-1/3 right-0 z-40">
          <Image
            src="/hero3.png"
            alt="burger"
            width={200}
            height={300}
            className=" lg:w-[400px]"
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-0 left-0 z-40">
          <Image
            src="/hero4.png"
            alt="burger"
            width={200}
            height={300}
            className=" lg:w-[400px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
