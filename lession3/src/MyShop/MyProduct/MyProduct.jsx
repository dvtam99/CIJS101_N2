import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./myProduct.scss";

import image1 from "../../assets/image/image 2.png";
import image2 from "../../assets/image/image 3.png";
import image3 from "../../assets/image/image 4.png";
import image4 from "../../assets/image/image 5.png";
import image5 from "../../assets/image/image 6.png";
import image6 from "../../assets/image/image 7.png";
import image7 from "../../assets/image/image 8.png";
import image8 from "../../assets/image/image 9.png";
import ModalDetailProduct from "./ModalDetailProduct";
import CreateProductModal from "./CreateProductModal/CreateProductModal";
import { Button } from "antd";

const MyProduct = () => {
  const myProducts = [
    {
      id: 1,
      name: "Granola siêu hạt ăn kiêng 15% yến mạch",
      imageUrl: image1,
      rate: 3.5,
      price: "133.000 VNĐ",
      sale: 30,
      status: "còn hàng",
      classify: ["Nhỏ", "Vừa", "Lớn"],
      description:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      createdAt: "",
    },
    {
      id: 2,
      name: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VNĐ",
      imageUrl: image2,
      description:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      rate: 3.5,
      sale: 30,
      classify: ["Nhỏ", "Vừa", "Lớn"],
    },
    {
      id: 3,
      name: "Ngũ hạt thập cẩm, 135g, hũ",
      price: "42.000 VNĐ",
      imageUrl: image3,
      description:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      rate: 3.5,
      sale: 30,
      classify: ["Nhỏ", "Vừa", "Lớn"],
    },
    {
      id: 4,
      name: "Đậu hà lan wasabi, 150g, hũ",
      price: "42.000 VNĐ",
      imageUrl: image4,
      description:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      rate: 3.5,
      sale: 30,
      classify: ["Nhỏ", "Vừa", "Lớn"],
    },
    {
      id: 5,
      name: "Nước cốt dâu tằm, 300ml, chai",
      price: "54.000 VNĐ",
      imageUrl: image5,
      description:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      rate: 3.5,
      sale: 30,
      classify: ["Nhỏ", "Vừa", "Lớn"],
    },
    {
      id: 6,
      name: "Trà sencha hoa hồng, 86g, hộp",
      price: "109.000 VNĐ",
      imageUrl: image6,
    },
    {
      id: 7,
      name: "Bột trà xanh matcha túi 4g",
      price: "36.000 VNĐ",
      imageUrl: image7,
    },
    {
      id: 8,
      name: "Bột rau má, 100g, bịch",
      price: "100.000 VNĐ",
      imageUrl: image8,
    },
  ];

  const onClickProduct = (item) => {
    // alert(`Product name:${item.name}, \nProduct price: ${item.price}`)
    showModal();
    setCurrentItem(item);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [newProduct, setNewProduct] = useState({});
  const [productsState, setProductsState] = useState(myProducts);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="product-container">
      <div className="d-flex">
        <div className="float-left product-hero-text">Quà Tặng</div>
        <Button
          className="float-right product-create-button"
          onClick={() => setIsCreateModalOpen(true)}
        >
          Tạo
        </Button>
      </div>
      <div className="product-items">
        {productsState.map((item) => (
          <div
            key={item.id}
            className="product-item"
            onClick={() => onClickProduct(item)}
          >
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <button className="cart-button">
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                {/* <QuestionOutlined /> */}
              </button>
            </div>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <ModalDetailProduct
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
        item={currentItem}
      />
      <CreateProductModal
        isModalOpen={isCreateModalOpen}
        handleOk={(product) => {
          setNewProduct(product);
          setProductsState((pre) => [
            ...pre,
            { id: productsState.length + 1, product },
          ]);
          console.log("sản phẩm đã thêm mới", product);
          setIsCreateModalOpen(false);
        }}
        handleCancel={() => {
          setIsCreateModalOpen(false);
        }}
      />
    </div>
  );
};

export default MyProduct;
