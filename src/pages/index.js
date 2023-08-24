import RootLayout from "@/components/Layouts/RootLayout";
import FeaturedProducts from "@/components/UI/FeaturedProduct";
import { shuffleArray } from "@/utils/shuffleArray";

import Head from "next/head";
import React from "react";

const HomePage = ({ featuredProducts }) => {
  return (
    <>
      <Head>
        <title>Repliq</title>
        <meta name="description" content="This is Repliq E-commerce Web Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FeaturedProducts featuredProducts={featuredProducts}></FeaturedProducts>
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // only before deployment
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       allProducts: [],
  //       featuredProducts: [],
  //     },
  //   };
  // }
  const res = await fetch(`${process.env.URL}/api/products`);
  const data = await res.json();
  // console.log(data);
  // Get all products
  const allProducts = data.data;

  // Shuffle the products array
  const shuffledProducts = shuffleArray([...allProducts]);

  // Get the first 6 products
  const featuredProducts = shuffledProducts.slice(0, 6);

  return {
    props: {
      allProducts,
      featuredProducts,
    },
  };
};
