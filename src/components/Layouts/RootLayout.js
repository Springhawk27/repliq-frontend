import {
  ShopOutlined,
  DesktopOutlined,
  GithubOutlined,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  TableOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, Space, Grid, Drawer } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

const RootLayout = ({ children }) => {
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

            <Link href="/allcomponents">
              <items>
                <Space>
                  <ShopOutlined />
                  All Products
                </Space>
              </items>
            </Link>

            <items>
              <Space>
                <Button className="ms-2 font-bold" type="text" danger>
                  Logout
                </Button>
              </Space>
            </items>

            <Link href="/login">
              <Space>
                <items>Login</items>
              </Space>
            </Link>
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

                <Link href="/allcomponents">
                  <items>
                    <Space>
                      <ShopOutlined />
                      All Components
                    </Space>
                  </items>
                </Link>
                <Link href="/pcbuilder">
                  <items>
                    <Space>
                      <DesktopOutlined />
                      PC Builder
                    </Space>
                  </items>
                </Link>

                <items>
                  <Space>
                    <Button className="ms-2 font-bold" type="text" danger>
                      Logout
                    </Button>
                  </Space>
                </items>

                <Link href="/login">
                  <Space>
                    <items>Login</items>
                  </Space>
                </Link>
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
