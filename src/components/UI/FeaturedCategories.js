import { Button, Card, Col, Row, Tooltip } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  DollarOutlined,
  TagsOutlined,
  ProfileOutlined,
  StarOutlined,
  VerticalRightOutlined,
  VerticalLeftOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useMemo, useState } from "react";

const categories = {
  data: [
    {
      id: 1,
      image_url: "/images/cpu_image1.png",
      category_name: "Processor",
      route_name: "cpu",
    },
    {
      id: 2,
      image_url: "/images/motherboard_image1.png",
      category_name: "Motherboard",
      route_name: "motherboard",
    },
    {
      id: 3,
      image_url: "/images/ram_image1.png",
      category_name: "RAM",
      route_name: "ram",
    },
    {
      id: 4,
      image_url: "/images/psu_image1.png",
      category_name: "Power Supply",
      route_name: "powersupply",
    },
    {
      id: 5,
      image_url: "/images/storage_image1.png",
      category_name: "Storage Device",
      route_name: "storagedevice",
    },

    {
      id: 6,
      image_url: "/images/monitor_image1.png",
      category_name: "Monitor",
      route_name: "monitor",
    },
    // {
    //   id: 7,
    //   image_url: "/images/keyboard_image1.png",
    //   category_name: "Keyboard",
    //   route_name: "keyboard",
    // },
    // {
    //   id: 8,
    //   image_url: "/images/mouse_image1.png",
    //   category_name: "Mouse",
    //   route_name: "mouse",
    // },
  ],
};

const FeaturedCategories = ({ featuredProducts }) => {
  const { Meta } = Card;

  const [arrow, setArrow] = useState("Show");

  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <>
      <h1
        style={{
          textAlign: "left",
          margin: "40px 0 20px 0",
          color: "#450A0B",
        }}
        className="lg:text-4xl md:text-2xl text-xl "
      >
        Choose From Our Featured Categories
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
        {categories.data?.map((category) => (
          <Col
            key={category?.id}
            className="gutter-row"
            //   span={6}

            xs={24}
            sm={12}
            md={8}
            lg={6}
            xl={6}
          >
            <Card
              hoverable
              cover={
                <Image
                  src={category?.image_url}
                  width={500}
                  height={200}
                  responsive
                  alt="component image"
                />
              }
            >
              <Tooltip
                placement="top"
                title={category?.category_name}
                arrow={mergedArrow}
              >
                <Meta title={category?.category_name} />
              </Tooltip>{" "}
              <Link href={`/${category?.route_name}`}>
                <Button
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "#450A0B",
                    color: "white",
                    width: "100%",
                    padding: "2px 5px ",
                    fontWeight: "300",
                    letterSpacing: "3px",
                    textAlign: "center",
                  }}
                >
                  View All <ArrowRightOutlined />
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default FeaturedCategories;
