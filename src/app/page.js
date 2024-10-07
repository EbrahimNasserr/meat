import Franchising from "@/components/Franchising";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Reviews from "@/components/Reviews";
import SimpleSlider from "@/components/Slider";

export default function Home() {
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
