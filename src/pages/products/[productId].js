import {
  Col,
  Divider,
  Image,
  List,
  Rate,
  Row,
  Tooltip,
  Typography,
} from "antd";
import {
  UserOutlined,
  DollarOutlined,
  StarOutlined,
  ProfileOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import RootLayout from "@/components/Layouts/RootLayout";
import { useMemo, useState } from "react";

const ProductDetailPage = ({ product }) => {
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
  //   console.log(component, "chekcing");
  return (
    <>
      <Row style={{ marginTop: "20px", alignItems: "center" }}>
        <Col sm={24} md={12}>
          <Image
            alt="example"
            src={product?.image_url}
            className="w-full mb-20"
          />
        </Col>
        <Col sm={24} md={12} style={{ paddingLeft: "20px" }}>
          <h1 style={{ fontSize: "30px" }}>{product?.product_name}</h1>
          <span
            style={{
              display: "block",
              fontSize: "20px",
            }}
            className="text-blue-800"
          >
            <ProfileOutlined /> {product?.category}
          </span>
          <div
            className="line"
            style={{
              height: "5px",
              margin: "20px 0",
              background: "#000",
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
              fontSize: "16px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                color: "gray",
                margin: "10px 0px",
              }}
            >
              <span className="text-green-600">
                <span className="text-black font-semibold">Price:</span>{" "}
                <DollarOutlined /> {product?.price}
              </span>

              <span
                className={
                  product?.status && product?.status === "In Stock"
                    ? "text-green-600"
                    : "text-red-500"
                }
              >
                <span className="text-black">Availablity:</span>{" "}
                <TagsOutlined /> {product?.status}
              </span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                color: "gray",
                margin: "10px 0px",
              }}
            >
              <span className="text-orange-500">
                <span className="text-black">Individual Rating:</span>{" "}
                <StarOutlined /> {product?.individual_rating}
              </span>
              <span className="text-orange-500">
                <span className="text-black">Average Rating:</span>{" "}
                <StarOutlined /> {product?.average_rating}
              </span>
            </div>
          </div>

          <p style={{ fontSize: "20px", fontWeight: "lighter" }}>
            {product?.description}
          </p>

          <Divider orientation="left"></Divider>
        </Col>
      </Row>
      <Row>
        <List
          className="w-full mb-10"
          header={<div className="font-semibold ">Key Features</div>}
          //   footer={<div>Footer</div>}
          bordered
          dataSource={[product]}
          renderItem={(item) => (
            <>
              <List.Item>
                <Typography.Text className="font-semibold">
                  Brand:
                </Typography.Text>{" "}
                {item?.key_features?.brand}
              </List.Item>
              <List.Item
                className={item?.key_features?.model ? "block" : "hidden"}
              >
                <Typography.Text className="font-semibold">
                  Model:
                </Typography.Text>{" "}
                {item?.key_features?.model}
              </List.Item>
              <List.Item
                className={
                  item?.key_features?.specification ? "block" : "hidden"
                }
              >
                <Typography.Text className="font-semibold">
                  Specification:
                </Typography.Text>{" "}
                {item?.key_features?.specification}
              </List.Item>
              <List.Item
                className={item?.key_features?.socket ? "block" : "hidden"}
              >
                <Typography.Text className="font-semibold">
                  Socket:
                </Typography.Text>{" "}
                {item?.key_features?.socket}
              </List.Item>
              <List.Item
                className={item?.key_features?.clock_speed ? "block" : "hidden"}
              >
                <Typography.Text className="font-semibold">
                  Clock Speed:
                </Typography.Text>{" "}
                {item?.key_features?.clock_speed}
              </List.Item>
              <List.Item
                className={item?.key_features?.tdp ? "block" : "hidden"}
              >
                <Typography.Text className="font-semibold">
                  TDP:
                </Typography.Text>{" "}
                {item?.key_features?.tdp}
              </List.Item>
              <List.Item
                className={item?.key_features?.form_factor ? "block" : "hidden"}
              >
                <Typography.Text className="font-semibold">
                  Form Factor:
                </Typography.Text>{" "}
                {item?.key_features?.form_factor}
              </List.Item>
              <List.Item
                className={
                  item?.key_features?.memory_slots ? "block" : "hidden"
                }
              >
                <Typography.Text className="font-semibold">
                  Memory Slots:
                </Typography.Text>{" "}
                {item?.key_features?.memory_slots}
              </List.Item>
              <List.Item
                className={
                  item?.key_features?.storage_slots ? "block" : "hidden"
                }
              >
                <Typography.Text className="font-semibold">
                  Storage Slots:
                </Typography.Text>{" "}
                {item?.key_features?.storage_slots}
              </List.Item>
              <List.Item
                className={item?.key_features?.usb_ports ? "block" : "hidden"}
              >
                <Typography.Text className="font-semibold">
                  USB Ports:
                </Typography.Text>{" "}
                {item?.key_features?.usb_ports}
              </List.Item>
              <List.Item
                className={item?.key_features?.networking ? "block" : "hidden"}
              >
                <Typography.Text className="font-semibold">
                  Networking:
                </Typography.Text>{" "}
                {item?.key_features?.networking}
              </List.Item>
              <List.Item
                className={
                  item?.key_features?.rgb_lighting ? "block" : "hidden"
                }
              >
                <Typography.Text className="font-semibold">
                  RGB Lighting:
                </Typography.Text>{" "}
                {item?.key_features?.rgb_lighting}
              </List.Item>
              {item?.key_features && item?.key_features?.type && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Type:
                  </Typography.Text>{" "}
                  {item?.key_features?.type}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.capacity && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Capacity:
                  </Typography.Text>{" "}
                  {item?.key_features?.capacity}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.speed && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Speed:
                  </Typography.Text>{" "}
                  {item?.key_features?.speed}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.cas_latency && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Cas Latency:
                  </Typography.Text>{" "}
                  {item?.key_features?.cas_latency}
                </List.Item>
              )}
              {item?.key_features && item?.key_features.wattage && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Wattage:
                  </Typography.Text>{" "}
                  {item?.key_features?.wattage}
                </List.Item>
              )}
              {item?.key_features && item?.key_features.efficiency && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Efficiency:
                  </Typography.Text>{" "}
                  {item?.key_features?.efficiency}
                </List.Item>
              )}
              {item?.key_features && item?.key_features.modular && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Modular:
                  </Typography.Text>{" "}
                  {item?.key_features?.modular}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.fan_size && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Fan Size:
                  </Typography.Text>{" "}
                  {item?.key_features?.fan_size}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.connectors && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Connectors:
                  </Typography.Text>{" "}
                  {item?.key_features?.connectors}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.interface && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Interface:
                  </Typography.Text>{" "}
                  {item?.key_features?.interface}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.read_speed && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Read Speed:
                  </Typography.Text>{" "}
                  {item?.key_features?.read_speed}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.write_speed && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Write Speed:
                  </Typography.Text>{" "}
                  {item?.key_features?.write_speed}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.screen_size && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Screen Size:
                  </Typography.Text>{" "}
                  {item?.key_features?.screen_size}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.resolution && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Resolution:
                  </Typography.Text>{" "}
                  {item?.key_features?.resolution}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.panel_type && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Panel Type:
                  </Typography.Text>{" "}
                  {item?.key_features?.panel_type}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.refresh_rate && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Refresh Rate:
                  </Typography.Text>{" "}
                  {item?.key_features?.refresh_rate}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.response_time && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Response Time:
                  </Typography.Text>{" "}
                  {item?.key_features?.response_time}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.adaptive_sync && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Adaptive Sync:
                  </Typography.Text>{" "}
                  {item?.key_features?.adaptive_sync}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.adaptive_sync && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Adaptive Sync:
                  </Typography.Text>{" "}
                  {item?.key_features?.adaptive_sync}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.memory_bus && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Memory Bus:
                  </Typography.Text>{" "}
                  {item?.key_features?.memory_bus}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.cuda_cores && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Cuda Cores:
                  </Typography.Text>{" "}
                  {item?.key_features?.cuda_cores}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.base_clock && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Base Clock:
                  </Typography.Text>{" "}
                  {item?.key_features?.base_clock}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.boost_clock && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Boost Clock:
                  </Typography.Text>{" "}
                  {item?.key_features?.boost_clock}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.boost_clock && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Boost Clock:
                  </Typography.Text>{" "}
                  {item?.key_features?.boost_clock}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.sensor && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Sensor:
                  </Typography.Text>{" "}
                  {item?.key_features?.sensor}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.buttons && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Buttons:
                  </Typography.Text>{" "}
                  {item?.key_features?.buttons}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.battery_life && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Battery Life:
                  </Typography.Text>{" "}
                  {item?.key_features?.battery_life}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.dpi_range && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Dpi Range:
                  </Typography.Text>{" "}
                  {item?.key_features?.dpi_range}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.grip_style && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Grip Style:
                  </Typography.Text>{" "}
                  {item?.key_features?.grip_style}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.connectivity && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Connectivity:
                  </Typography.Text>{" "}
                  {item?.key_features?.connectivity}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.switch_type && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Switch Type:
                  </Typography.Text>{" "}
                  {item?.key_features?.switch_type}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.backlighting && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Backlighting:
                  </Typography.Text>{" "}
                  {item?.key_features?.backlighting}
                </List.Item>
              )}
              {item?.key_features && item?.key_features?.media_keys && (
                <List.Item>
                  <Typography.Text className="font-semibold">
                    Media Keys:
                  </Typography.Text>{" "}
                  {item?.key_features?.media_keys}
                </List.Item>
              )}
            </>
          )}
        />
      </Row>
      <Row>
        <Col className="w-full mb-10">
          <List
            header={<div className="font-semibold ">Product Reviews</div>}
            itemLayout="horizontal"
            dataSource={product?.reviews}
            renderItem={(review, index) => (
              <Tooltip
                color="white"
                placement="top"
                title={
                  <span className="text-black">
                    {<Rate value={review.rating} disabled />} {review?.rating}{" "}
                    out of 5
                  </span>
                }
                arrow={mergedArrow}
              >
                <List.Item className="bg-slate-50 mb-2 p-2">
                  <List.Item.Meta
                    title={
                      <span>
                        Rating: {review.rating}{" "}
                        {<Rate value={review.rating} disabled />}
                      </span>
                    }
                    description={<span>Review: {review.comment}</span>}
                  />
                </List.Item>
              </Tooltip>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  //   if (typeof window === "undefined") {
  //     return {
  //       paths: [],
  //       fallback: false,
  //     };
  //   }
  const res = await fetch(`${process.env.URL}/api/products`);

  const products = await res.json();

  const paths = products?.data.map((product) => ({
    params: { productId: product._id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  //   if (typeof window === "undefined") {
  //     return {
  //       props: {
  //         component: {},
  //       },
  //     };
  //   }
  const { params } = context;
  const productId = params.productId;

  const res = await fetch(`${process.env.URL}/api/products/${productId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      product: data.data,
    },
  };
};
