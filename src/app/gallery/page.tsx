import HimawariHeader from "@/components/Header/HimawariHeader";
import RegularHero from "@/components/Hero/HeroDefault";
import MasonryDefault from "@/components/Masonry/MasonryDefault";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Gallery() {
  return (
    <>
      <Navbar theme="light" selected="gallery" />
      <div className="container mt-[120px]">
        <HimawariHeader
          title="Gallery of Fame"
          desc="This show the best photos I’ve taken so far..."
        />
        <MasonryDefault galleryType="photo" />
      </div>
    </>
  );
}
