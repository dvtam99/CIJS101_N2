import { useEffect, useState } from "react";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import "./myProduct.scss";
import ModalDetailProduct from "./DetailProduct/ModalDetailProduct";
import CreateProductModal from "./CreateProductModal/CreateProductModal";
import Paging from "./Paging/Paging";
import { Button, Spin, Modal } from "antd";
import localStorageHelper from "../../helper/localStorageHelper";
import moment from "moment";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios"
const URL = "https://6752f223f3754fcea7ba314c.mockapi.io/api/shop/product"
const MyProduct = () => {
  // const listProduct = localStorageHelper.get("products");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState({});
  const [productsState, setProductsState] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);


  const [pageSize, page] = [
    searchParams.get("pageSize") || 8,
    searchParams.get("page") || 0,
  ];
  const onClickProduct = (item) => {
    // alert(`Product name:${item.name}, \nProduct price: ${item.price}`)
    showModal();
    setCurrentItem(item);
  };
  // const sortProduct = (data) =>
  //   // data.sort((a, b) => moment(b.createdAt).diff(a.createdAt));
  //   data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCreateProduct = async (product) => {
    setProductsState((pre) => [
      ...pre,
      { id: productsState.length + 1, ...product },
    ]);
    console.log("sản phẩm đã thêm mới", product);

    setIsLoading(true)
    await axios.post(URL, { id: productsState.length + 1, ...product })
    setIsLoading(false)

    setIsCreateModalOpen(false);


  };
  const getCurrentPageProducts = async (page, pageSize) => {
    setIsLoading(true)


    // fetch('https://6752f223f3754fcea7ba314c.mockapi.io/api/shop/product', {
    //   method: 'GET',
    //   headers: { 'content-type': 'application/json' },
    // }).then(async res => {
    //   if (res.ok) {
    //     let listProduct = await res.json()
    //     const startIndex = Number(page);
    //     const endIndex = Number(page) + Number(pageSize);
    //     let tem = listProduct?.slice(startIndex, endIndex) || [];
    //     setProductsState(tem);
    //     setIsLoading(false)

    //   }
    // })

    let resFetch = await fetch(URL, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
    let listProduct = await resFetch.json()
    const startIndex = Number(page);
    const endIndex = Number(page) + Number(pageSize);
    let tem = listProduct?.slice(startIndex, endIndex) || [];
    setProductsState(tem);
    setIsLoading(false)
  };

  const onPageChange = (page, pageSize) => {
    setSearchParams({ page, pageSize });
    getCurrentPageProducts(page, pageSize);
  };

  const handleDeleteProduct = async (id) => {
    console.log("Delete product", id)
    setIsLoading(true)
    await axios.delete(URL + "/" + id)
    setIsLoading(false)
    getCurrentPageProducts(page || 0, pageSize || 8);
  }
  useEffect(() => {
    // fetchProduct()
    getCurrentPageProducts(page || 0, pageSize || 8);
  }, []);

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
      {isLoading == true ?
        <Modal
          open={isLoading}
          footer={null}
          closable={false}
          centered
          bodyStyle={{
            textAlign: 'center',
            padding: '30px',
          }}
        >
          <Spin size="large" />
          <p style={{ marginTop: '20px' }}>{'Loading...'}</p>
        </Modal>

        :
        <div className="product-items">
          {
            ((productsState?.length > 0) ?
              productsState.map((item, index) => {
                {/* item.imageUrl = "https://bizweb.dktcdn.net/thumb/1024x1024/100/447/785/products/granola-sieu-hat-an-kieng-ngu-coc-giam-can-dinh-duong-eat-clean-khong-duong-them-hat-macca-tu-nong-san-sach-giot-nang-2-ba9c31d4-23c7-4399-b87e-259215958292.jpg?v=1700278891453" */ }
                return (
                  <div key={index} className="product-item">
                    <img
                      className="pointer img-cus"
                      src={item.imageUrl}
                      alt={item.name}
                      onClick={() => onClickProduct(item)}
                    />
                    <div className="item-details">
                      <Link to={`/productDetail/${item.id}`}>
                        <span className="item-name">{item.name}</span>
                      </Link>

                      <button className="cart-button">
                        <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                        <DeleteOutlined style={{ fontSize: "20px" }} onClick={() => handleDeleteProduct(item.id)} />
                        {/* <QuestionOutlined /> */}
                      </button>
                    </div>
                    <p>
                      {item.price} {moment(item.createdAt).format("HH:MM DD-MM-yyyy")}
                    </p>
                  </div>
                )
              }) : <div>Not Found Product</div>)
          }
        </div>}
      <Paging
        page={page}
        pageSize={pageSize}
        // total={listProduct?.length || 0}
        onPageChange={onPageChange}
      />

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
