import { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./myProduct.scss";
import ModalDetailProduct from "./DetailProduct/ModalDetailProduct";
import CreateProductModal from "./CreateProductModal/CreateProductModal";
import Paging from "./Paging/Paging";
import { Button } from "antd";
import localStorageHelper from "../../helper/localStorageHelper";
import moment from "moment";

const MyProduct = () => {
  const myProducts = [
    {
      id: 1,
      name: "Granola siêu hạt ăn kiêng 15% yến mạch",
      imageUrl: "src/assets/image/image 2.png",
      rate: 3.5,
      price: "133.000 VNĐ",
      sale: 30,
      status: "còn hàng",
      classify: ["Nhỏ", "Vừa", "Lớn"],
      description:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      createdAt: new Date("2024-05-01"),
    },
    {
      id: 2,
      name: "Hạnh nhân rang muối biển, 240g, hũ",
      price: "150.000 VNĐ",
      imageUrl: "src/assets/image/image 3.png",
      description:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      rate: 3.5,
      sale: 30,
      classify: ["Nhỏ", "Vừa", "Lớn"],
      createdAt: new Date("2024-01-02"),
    },
    {
      id: 3,
      name: "Ngũ hạt thập cẩm, 135g, hũ",
      price: "42.000 VNĐ",
      imageUrl: "src/assets/image/image 4.png",
      description:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      rate: 3.5,
      sale: 30,
      classify: ["Nhỏ", "Vừa", "Lớn"],
      createdAt: new Date("2024-06-03"),
    },
    {
      id: 4,
      name: "Đậu hà lan wasabi, 150g, hũ",
      price: "42.000 VNĐ",
      imageUrl: "src/assets/image/image 4.png",
      description:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      rate: 3.5,
      sale: 30,
      classify: ["Nhỏ", "Vừa", "Lớn"],
      createdAt: new Date("2024-11-04"),
    },
    {
      id: 5,
      name: "Nước cốt dâu tằm, 300ml, chai",
      price: "54.000 VNĐ",
      imageUrl: "src/assets/image/image 5.png",
      description:
        "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
      rate: 3.5,
      sale: 30,
      classify: ["Nhỏ", "Vừa", "Lớn"],
      createdAt: new Date("2024-01-02"),
    },
    {
      id: 6,
      name: "Trà sencha hoa hồng, 86g, hộp",
      price: "109.000 VNĐ",
      imageUrl: "src/assets/image/image 6.png",
      createdAt: new Date("2022-01-01"),
    },
    {
      id: 7,
      name: "Bột trà xanh matcha túi 4g",
      price: "36.000 VNĐ",
      imageUrl: "src/assets/image/image 7.png",
      createdAt: new Date("2024-01-01"),
    },
    {
      id: 8,
      name: "Bột rau má, 100g, bịch",
      price: "100.000 VNĐ",
      imageUrl: "src/assets/image/image 8.png",
      createdAt: new Date("2024-01-01"),
    },
  ];

  localStorageHelper.set("products", myProducts);

  const listProduct = localStorageHelper.get("products");

  console.log(listProduct.map((p) => p.name));

  const onClickProduct = (item) => {
    // alert(`Product name:${item.name}, \nProduct price: ${item.price}`)
    showModal();
    setCurrentItem(item);
  };
  const sortProduct = (data) =>
    // data.sort((a, b) => moment(b.createdAt).diff(a.createdAt));
    data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  console.log(
    sortProduct(listProduct).map((el) => el.createdAt),
    listProduct.map((el) => el.createdAt)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [newProduct, setNewProduct] = useState({});
  const [productsState, setProductsState] = useState(listProduct);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCreateProduct = (product) => {
    setNewProduct(product);
    setProductsState((pre) => [
      ...pre,
      { id: productsState.length + 1, ...product },
    ]);
    console.log("sản phẩm đã thêm mới", product);
    setIsCreateModalOpen(false);
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
        {productsState.map((item, index) => (
          <div key={index} className="product-item">
            <img
              src={item.imageUrl}
              alt={item.name}
              onClick={() => onClickProduct(item)}
            />
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <button className="cart-button">
                <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                {/* <QuestionOutlined /> */}
              </button>
            </div>
            <p>
              {item.price} {moment(item.createdAt).format("HH:MM DD-MM-yyyy")}
            </p>
          </div>
        ))}
        <Paging />
      </div>

      <ModalDetailProduct
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
        item={currentItem}
      />
      <CreateProductModal
        isModalOpen={isCreateModalOpen}
        handleOk={handleCreateProduct}
        handleCancel={() => {
          setIsCreateModalOpen(false);
        }}
      />
    </div>
  );
};

export default MyProduct;
