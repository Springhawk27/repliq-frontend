import {
  ShopOutlined,
  ShoppingCartOutlined,
  GithubOutlined,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  TableOutlined,
  DownOutlined,
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space, Grid, Drawer } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "@/redux/features/cart/cartSlice";
import Cart from "../UI/Cart";
import { useSession, signIn, signOut } from "next-auth/react";

const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  // console.log(session?.user);

  const { products, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [childrenDrawer, setChildrenDrawer] = useState(false);
  const [childrenDrawer2, setChildrenDrawer2] = useState(false);

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

  const showDrawer2 = () => {
    setOpen2(true);
  };
  const onClose2 = () => {
    setOpen2(false);
  };
  const showChildrenDrawer2 = () => {
    setChildrenDrawer(true);
  };
  const onChildrenDrawerClose2 = () => {
    setChildrenDrawer2(false);
  };

  const items = [
    {
      key: "1",
      label: (
        <Link
          href="/cpu"
          style={{
            color: "black",
          }}
        >
          Cpu / Processor
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          href="/motherboard"
          style={{
            color: "black",
          }}
        >
          Motherboard
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          href="/ram"
          style={{
            color: "black",
          }}
        >
          Ram
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link
          href="/powersupply"
          style={{
            color: "black",
          }}
        >
          Power Supply Unit
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link
          href="/storagedevice"
          style={{
            color: "black",
          }}
        >
          Storage Device
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link
          href="/monitor"
          style={{
            color: "black",
          }}
        >
          Monitor
        </Link>
      ),
    },
    {
      key: "7",
      label: (
        <Link
          href="/gpu"
          style={{
            color: "black",
          }}
        >
          GPU
        </Link>
      ),
    },
  ];
  return (
    <Layout>
      <Header
        className="bg-red-950"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              Repliq
            </Link>
          </h1>
        </div>
        {screens.md ? (
          <div className={styles.menu_items}>
            <Dropdown
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <TableOutlined />
                  Category
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Link href="/allproducts">
              <items>
                <Space>
                  <ShopOutlined />
                  All Products
                </Space>
              </items>
            </Link>
            <items>
              <Button
                className="text-white font-bold text-lg text-center"
                type="text"
                onClick={showDrawer2}
              >
                <ShoppingCartOutlined />
              </Button>

              <Drawer
                title="Cart"
                width={500}
                closable={false}
                onClose={onClose2}
                open={open2}
              >
                {/* <div className="text-black flex flex-col gap-y-4"></div> */}
                <div className="space-y-5  mb-4">
                  {products.map((product) => (
                    <Cart key={product._id} product={product}></Cart>
                  ))}
                  <p className="text-black text-2xl text-right">
                    Total: ${total.toFixed(2)}
                  </p>
                </div>
                <Link href={`/checkout`}>
                  <Button
                    style={{
                      fontSize: "15px",
                      marginTop: "10px",
                      backgroundColor: "#450A0B",
                      color: "white",
                      width: "100%",
                      padding: "2px 5px ",
                      fontWeight: "300",
                      letterSpacing: "3px",
                      textAlign: "center",
                    }}
                  >
                    Checkout
                  </Button>
                </Link>
              </Drawer>
            </items>
            {session?.user && (
              <items>
                <span className="text-white"> Hi, {session?.user?.name}</span>
              </items>
            )}
            {session?.user ? (
              <items>
                <Space>
                  <Button
                    className="ms-2 font-bold"
                    onClick={() => signOut()}
                    type="text"
                    danger
                  >
                    Logout
                  </Button>
                </Space>
              </items>
            ) : (
              <Link href="/login">
                <Space>
                  <items>Login</items>
                </Space>
              </Link>
            )}
          </div>
        ) : (
          <>
            <div>
              <Button
                className="text-white font-bold text-xl"
                type="text"
                onClick={showDrawer}
              >
                Menu
              </Button>
            </div>

            <Drawer
              title="Menu"
              width={250}
              closable={false}
              onClose={onClose}
              open={open}
            >
              <div className="text-black flex flex-col gap-y-4">
                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      <TableOutlined />
                      Category
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>

                <Link href="/allproducts">
                  <items>
                    <Space>
                      <ShopOutlined />
                      All Products
                    </Space>
                  </items>
                </Link>
                <items>
                  <Button
                    className="text-black font-bold text-lg text-center"
                    type="text"
                    onClick={showDrawer2}
                  >
                    <ShoppingCartOutlined />
                  </Button>

                  <Drawer
                    title="Cart"
                    width={250}
                    closable={false}
                    onClose={onClose2}
                    open={open2}
                  >
                    {/* <div className="text-black flex flex-col gap-y-4"></div> */}
                    <div className="space-y-5  mb-4">
                      {products.map((product) => (
                        <Cart key={product._id} product={product}></Cart>
                      ))}
                      <p className="text-black text-2xl text-right">
                        Total: ${total.toFixed(2)}
                      </p>
                    </div>
                    <Link href={`/checkout`}>
                      <Button
                        style={{
                          fontSize: "15px",
                          marginTop: "10px",
                          backgroundColor: "#450A0B",
                          color: "white",
                          width: "100%",
                          padding: "2px 5px ",
                          fontWeight: "300",
                          letterSpacing: "3px",
                          textAlign: "center",
                        }}
                      >
                        Checkout
                      </Button>
                    </Link>
                  </Drawer>
                </items>

                {session?.user ? (
                  <items>
                    <Space>
                      <Button
                        className="ms-2 font-bold"
                        onClick={() => signOut()}
                        type="text"
                        danger
                      >
                        Logout
                      </Button>
                    </Space>
                  </items>
                ) : (
                  <Link href="/login">
                    <Space>
                      <items>Login</items>
                    </Space>
                  </Link>
                )}
              </div>
            </Drawer>
          </>
        )}
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        className="bg-red-950 text-slate-300"
        style={{
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          Repliq
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://github.com/Springhawk27" target="_blank">
            <GithubOutlined />
          </Link>
          <Link href="https://www.twitter.com/" target="_blank">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://www.google.com/" target="_blank">
            <GoogleSquareFilled />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sajjad-mahmud-3852a316b/"
            target="_blank"
          >
            <LinkedinFilled />
          </Link>
        </p>
        <div className={styles.line}></div>
        Repliq ©2023 Created by Sajjad Mahmud
      </Footer>
    </Layout>
  );
};
export default RootLayout;
