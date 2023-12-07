import Header from "../components/Header";
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Category from "../components/Category";
import Products from "../components/Products";
import Team from "../components/Team";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const index = () => {
  return (
    <>
      <Head>
        <title>Restaurant </title>
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="thapa technical" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
      <HeroSection />
      {/* <About /> */}
      <Category />
      <Products />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default index;
