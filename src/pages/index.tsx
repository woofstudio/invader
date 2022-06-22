import { NextPage } from "next";

import Hr from "../components/landing/Hr";
import Navigation from "../components/Navigation";
import Hero from "../components/landing/Hero";
import Links from "../components/landing/Links";
import Techniques from "../components/landing/Techniques";
import Blogs from "../components/landing/Blogs";
import About from "../components/landing/About";
import Community from "../components/landing/Community";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Links />
        <Hr />
        <Techniques />
        <Hr />
        <Blogs />
        <Hr />
        <About />
        <Community />
      </main>
      <Footer />
    </>
  );
};

export default Home;
