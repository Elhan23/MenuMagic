import React from "react";
import HeroCompoents from "../../components/HomeComponents/HeroCompoents/HeroCompoents";
import HomeSection from "../../components/HomeComponents/HomeSection/HomeSection";
import SectionDish from "../../components/HomeComponents/SectionDish/SectionDish";


function HomePages() {
  return (
    <main className="container">
      <HeroCompoents />
      <HomeSection />
      <SectionDish />
    </main>
  );
}

export default HomePages;
