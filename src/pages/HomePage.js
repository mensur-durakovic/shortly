import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LinkInput from "../components/LinkInput";
import LinkList from "../containers/LinkList";
import AdvancedStatistics from "../containers/AdvancedStatistics";
import CtaHero from "../components/CtaHero";
import Footer from "../containers/Footer";
import useLocalStorage from "../hooks/useLocalStorage";

function Home() {
  const [usersLinks, setUsersLinks] = useLocalStorage("usersLinks", []);

  const saveNewLinkHandler = (shortenedLinkData) => {
    console.log("shortenedLinkData", shortenedLinkData);
    const newUserLinks = [...usersLinks, shortenedLinkData];
    setUsersLinks(newUserLinks);
  };

  return (
    <main className="home-page">
      <Header />
      <Hero />
      <LinkInput saveNewLinkHandler={saveNewLinkHandler} />
      <LinkList usersLinks={usersLinks} />
      <AdvancedStatistics />
      <CtaHero />
      <Footer />
    </main>
  );
}
export default Home;
