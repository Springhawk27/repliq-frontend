import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Repliq</title>
        <meta name="description" content="This is Repliq E-commerce Web Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-red-500">Hi there</p>
    </>
  );
};

export default HomePage;
