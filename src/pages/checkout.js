import RootLayout from "@/components/Layouts/RootLayout";
import Checkout from "@/components/UI/Checkout";
import React from "react";
import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const { products, total } = useSelector((state) => state.cart);

  return (
    <div className="space-y-5  mb-4 md:p-20 ">
      <p className="text-xl text-bold ">Cart Summary</p>
      <hr />
      {products.map((product) => (
        <Checkout key={product._id} product={product}></Checkout>
      ))}
      <hr />
      <p className="text-black text-2xl text-left">
        Sub Total: ${total.toFixed(2)}
      </p>
    </div>
  );
};

export default CheckoutPage;

CheckoutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
