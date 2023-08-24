import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "@/redux/features/cart/cartSlice";
import { PlusOutlined, MinusOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Grid } from "antd";
import Image from "next/image";

const Cart = ({ product }) => {
  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const [open, setOpen] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };
  return (
    <div
      className="border-b-2 h-44 p-5 flex justify-between rounded-md"
      key={product.product_name}
    >
      <div className="border-r pr-5 shrink-0">
        <Image src={product?.image_url} alt="" width={100} height={100} />
      </div>
      <div className="px-2 w-full flex flex-col gap-3">
        <h1 className="text-base ">{product?.product_name}</h1>
        <p className="text-sm">Quantity: {product.quantity}</p>
        <p className="text-sm">
          Total Price: {(product.price * product.quantity).toFixed(2)} $
        </p>
      </div>
      <div className="border-l pl-5 flex flex-col justify-between items-center">
        <Button
          onClick={() => dispatch(addToCart(product))}
          className="hover:bg-green-600  flex justify-center items-center   text-green-500 hover:text-white w-1/2 "
        >
          <PlusOutlined size="20" />
        </Button>
        <Button
          onClick={() => dispatch(removeOne(product))}
          className="hover:bg-yellow-500  flex justify-center items-center   text-yellow-500 hover:text-white w-1/2"
        >
          <MinusOutlined size="20" />
        </Button>
        <Button
          onClick={() => dispatch(removeFromCart(product))}
          variant="destructive"
          className="hover:bg-red-600  flex justify-center items-center   text-red-500 hover:text-white w-1/2"
        >
          <DeleteOutlined size="20" />
        </Button>
      </div>
    </div>
  );
};

export default Cart;
