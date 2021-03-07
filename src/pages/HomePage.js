import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LinkInput from "../components/LinkInput";
import LinkList from "../containers/LinkList";
import AdvancedStatistics from "../containers/AdvancedStatistics";
import CtaHero from "../components/CtaHero";
import Footer from "../containers/Footer";

function Home() {
  return (
    <main className="home-page">
      <Header />
      <Hero />
      <LinkInput />
      <LinkList />
      <AdvancedStatistics />
      <CtaHero />
      <Footer />
    </main>
  );
}
export default Home;
