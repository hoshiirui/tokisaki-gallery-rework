import HimawariHeader from "@/components/Header/HimawariHeader";
import RegularHero from "@/components/Hero/HeroDefault";
import MasonryDefault from "@/components/Masonry/MasonryDefault";
import Navbar from "@/components/Navbar";
import Speciality from "@/components/Section/Speciality";
import WhatIs from "@/components/Section/WhatIs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <RegularHero />
      <div className="container">
        <WhatIs />
        <Speciality />
      </div>
    </>
  );
}
