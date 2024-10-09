"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import Franchising from "@/components/Franchising";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import SimpleSlider from "@/components/Slider";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <Hero />
      <SimpleSlider />
      <Reviews />
      <Menu />
      <Franchising />
    </main>
  );
}