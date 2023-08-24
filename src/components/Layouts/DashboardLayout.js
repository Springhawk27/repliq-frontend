import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Row } from "antd";
import FeaturedProducts from "../UI/FeaturedProduct";
import ProductCard from "../UI/ProductCard";
const { Header, Sider, Content } = Layout;
const DashboardLayout = ({ featuredProducts, allProducts, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const [selectedMenuItem, setSelectedMenuItem] = useState("0"); // Default selected menu item

  const handleMenuClick = (menuItemKey) => {
    setSelectedMenuItem(menuItemKey);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedMenuItem]}
          onClick={({ key }) => handleMenuClick(key)}
          items={[
            {
              key: "1",
              icon: <VideoCameraOutlined />,
              label: "All Products",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Featured Products",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {/* {children} */}
          {selectedMenuItem === "1" ? (
            /* Render content for "All Products" */
            <>
              <h1
                style={{
                  textAlign: "left",
                  margin: "20px 0px",
                  color: "#450A0B",
                }}
                className="lg:text-4xl md:text-2xl text-xl"
              >
                All Products
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
          ) : selectedMenuItem === "2" ? (
            /* Render content for "Featured Products" */
            <div>
              <FeaturedProducts
                featuredProducts={featuredProducts}
              ></FeaturedProducts>
            </div>
          ) : (
            <div>{children}</div>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DashboardLayout;

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
