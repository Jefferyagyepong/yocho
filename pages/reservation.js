import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Reservation() {
  return (
    <>
      <Head>
        <title> Reservations Yo Cho</title>
        <meta property="og:title" content="Restaurant" />
        <meta property="og:type" content="" />
        <meta property="og:url" content="https://jjefferyagyepong.com" />
        <meta property="og:image" content="" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="jefferyagyepong-io.vercel.app" />
        <meta
          name="description"
          content="restaurant, Ghana, continental dishes, food, order, online, local dish"
        />
        <meta
          name="keywords"
          content="Restaurant, order food online, Ghanaian dishes, beverage "
        />
      </Head>
      <main>
        <Header />
        <Reservation />

        <Footer />
      </main>
    </>
  );
}
