import Head from "next/head";
import Banner from "../components/Banner";
import Client from "../components/Client";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Partner from "../components/Partner";
import Testimonial from "../components/Testimonial";

const index = () => {
  return (
    <>
    <Head>
      <title>GreedyGame Landingpage</title>
    </Head>
      <Header />
      <Banner />
      <Counter />
      <Partner />
      <Client />
      <Testimonial />
      <Footer />
    </>
  )
}

export default index
