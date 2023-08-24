import RootLayout from "@/components/Layouts/RootLayout";
import Component from "@/components/UI/Component";
import React from "react";

const CpuPage = ({ specificComponents, categoryName }) => {
  return (
    <div>
      <Component
        specificComponents={specificComponents}
        categoryName={categoryName}
      ></Component>
    </div>
  );
};

export default CpuPage;

CpuPage.getLayout = function getLayout(page) {
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
  const categoryName = "Processor";

  // Filter components with category
  const specificComponents = allComponents.filter(
    (component) => component.category === "Processor"
  );

  return {
    props: {
      specificComponents,
      categoryName,
    },
  };
};
