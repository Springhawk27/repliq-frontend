import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";
import React from "react";
import { Row } from "antd";
import ProductCard from "@/components/UI/ProductCard";

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

      {/* <AllProducts allProducts={allProducts}></AllProducts>
       */}
      <>
        <h1
          style={{
            textAlign: "left",
            margin: "20px 0px",
            color: "#450A0B",
          }}
          className="lg:text-4xl md:text-2xl text-xl"
        >
          All Our Available Products
        </h1>
        <div
          className="line"
          style={{
            height: "3px",
            margin: "10px 0 20px 0",
            background: "#450A0B",
            width: "100%",
          }}
        ></div>
        <Row gutter={[12, 12]}>
          {allProducts?.map((component) => (
            <ProductCard
              key={component._id}
              component={component}
            ></ProductCard>
          ))}
        </Row>
      </>
    </>
  );
};

export default AllProductsPage;

AllProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // only before deployment
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

  // console.log(allProducts);

  return {
    props: {
      allProducts,
    },
  };
};
