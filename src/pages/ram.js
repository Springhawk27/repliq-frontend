import RootLayout from "@/components/Layouts/RootLayout";
import Component from "@/components/UI/Component";
import React from "react";

const RamPage = ({ specificComponents, categoryName }) => {
  // console.log(specificComponents);
  // console.log(categoryName);
  return (
    <div>
      <Component
        specificComponents={specificComponents}
        categoryName={categoryName}
      ></Component>
    </div>
  );
};

export default RamPage;

RamPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       specificComponents: [],
  //       categoryName: "",
  //     },
  //   };
  // }
  const res = await fetch(`${process.env.URL}/api/products`);
  const data = await res.json();
  // Get all components
  const allComponents = data.data;
  const categoryName = "RAM";

  // Filter components with category
  const specificComponents = allComponents.filter(
    (component) => component.category === "RAM"
  );

  return {
    props: {
      specificComponents,
      categoryName,
    },
  };
};
