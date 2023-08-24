import { Button, Card, Col, Row, Tooltip, message } from "antd";
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
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cart/cartSlice";

const Component = ({ specificComponents, categoryName }) => {
  const { Meta } = Card;

  const dispatch = useDispatch();

  const [messageApi, contextHolder] = message.useMessage();
  const success = (component) => {
    messageApi.open({
      type: "success",
      content: `${component.product_name} Added To Cart`,
    });
  };

  const handleAddProduct = (component) => {
    success(component);

    dispatch(addToCart(component));
  };

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
      {contextHolder}

      <h1
        style={{
          textAlign: "center",
          margin: "10px 0 20px 0",
          color: "#450A0B",
        }}
        className="lg:text-4xl md:text-2xl text-xl"
      >
        <VerticalRightOutlined /> Our Available {categoryName}{" "}
        <VerticalLeftOutlined />
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
        {specificComponents?.map((component) => (
          <Col
            key={component?._id}
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
                  src={component?.image_url}
                  width={500}
                  height={200}
                  responsive
                  alt="component image"
                />
              }
            >
              <Tooltip
                placement="top"
                title={component?.product_name}
                arrow={mergedArrow}
              >
                <Meta title={component?.product_name} />
              </Tooltip>
              <div
                className="line"
                style={{
                  height: "3px",
                  margin: "20px 0",
                  background: "#450A0B",
                  width: "100%",
                }}
              ></div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  color: "gray",
                  margin: "10px 0px",
                  fontSize: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    color: "gray",
                    margin: "10px 0px",
                    fontSize: "12px",
                  }}
                >
                  <span className="text-green-600">
                    <DollarOutlined /> {component?.price}
                  </span>
                  <span
                    className={
                      component?.status && component?.status === "In Stock"
                        ? "text-green-600"
                        : "text-red-500"
                    }
                  >
                    <TagsOutlined />
                    {component?.status}
                  </span>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    color: "gray",
                    margin: "10px 0px",
                    fontSize: "12px",
                  }}
                >
                  <span className="text-blue-800">
                    <ProfileOutlined /> {component?.category}
                  </span>
                  <span className="text-orange-500">
                    <StarOutlined /> {component?.average_rating}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "12px" }}>
                {component?.description.length > 100
                  ? component?.description.slice(0, 70) + "..."
                  : component?.description}
              </p>
              <Button
                style={{
                  fontSize: "15px",
                  marginTop: "20px",
                  backgroundColor: "white",
                  color: "black",
                  width: "100%",
                  padding: "2px 5px ",
                  fontWeight: "400",
                  letterSpacing: "3px",
                  textAlign: "center",
                }}
                className="hover:border-red-800 hover:text-green-700"
                variant="default"
                onClick={() => handleAddProduct(component)}
              >
                Add to cart
              </Button>
              <Link href={`/products/${component?._id}`}>
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
                  Details <ArrowRightOutlined />
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Component;
