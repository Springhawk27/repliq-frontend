import RootLayout from "@/components/Layouts/RootLayout";
import AllProducts from "@/components/UI/AllProducts";

import Head from "next/head";
import React from "react";

const AllProductsPage = ({ allProducts }) => {
  // console.log(allProducts);
  return (
    <>
      <Head>
        <title>Repliq</title>
        <meta name="description" content="This is Repliq Web Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AllProducts allProducts={allProducts}></AllProducts>
    </>
  );
};

export default AllProductsPage;

AllProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       allComponents: [],
  //     },
  //   };
  // }

  const res = await fetch(`${process.env.URL}/api/products`);
  const data = await res.json();
  // console.log(data);
  // Get all products
  const allProducts = data.data;

  return {
    props: {
      allProducts,
    },
  };
};
