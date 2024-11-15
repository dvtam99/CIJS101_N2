import React, { useState } from "react";
import { Modal, Input, Typography, Button } from "antd";

// Thực hiện tạo Nút Tạo trên Quà tặng.
//  Khi bấm nút Tạo, sẽ hiển thị một modal bao gồm các thông tin input:
//  Tên sản phẩm,
//   hình ảnh (Link hình ảnh bất kỳ),
//    rating, giá, giảm giá, trạng thái, phân loại, danh mục, mô tả, ngày thêm (ngày hiện tại, không cần hiển thị input này).

const CreateProductModal = ({ isModalOpen, handleOk, handleCancel }) => {
  //   let data = {
  //     id: 1,
  //     name: "Granola siêu hạt ăn kiêng 15% yến mạch",
  //     // imageUrl: image1,
  //     rate: 3.5,
  //     price: 133.0,
  //     sale: 30,
  //     status: "còn hàng",
  //     classify: ["Nhỏ", "Vừa", "Lớn"],
  //     description:
  //       "Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với mọi nhà",
  //     createdAt: "",
  //   };

  const [product, setProduct] = useState({});

  const onHandelProductChange = (value, key) => {
    console.log(value, key);

    // setProduct((preProduct) => ({ ...preProduct, [key]: value }));
    let temp = product;
    temp[key] = value;
    setProduct(temp);
    // console.log(temp);
  };
  return (
    <Modal
      open={isModalOpen}
      onOk={() => handleOk(product)}
      okText="Lưu sản phẩm"
      onCancel={handleCancel}
      width={800}
      //   footer={<Button onClick={}>Lưu sản phẩm</Button>}
      title="Create new product"
    >
      {/* <label>Name</label> <input type="text"></input> */}
      <div>
        {/*
       option 1----------
        <b>Name</b>
        <Input type="text"></Input>
        <b>price</b>
        <Input type="text"></Input>
        <b>Rate</b>
        <Input type="text"></Input> 
        */}

        {/* option 2 */}
        {fileds.map((el) => (
          <div key={el.key}>
            {el.isHidden ? (
              <></>
            ) : (
              <div className="d-flex pb-10px">
                <div className="w-200px">
                  <p>{el.title}</p>
                </div>
                <Input
                  type={el.type || "text"}
                  onChange={(event) =>
                    onHandelProductChange(event.target.value, el.key)
                  }
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default CreateProductModal;
const fileds = [
  { title: "Tên sản phẩm", key: "name", type: "text" },
  { title: "Link ảnh", key: "imageUrl", type: "text" },
  { title: "Đánh giá", key: "rate", type: "number" },
  { title: "Giá", key: "price", type: "number" },
  { title: "Giảm giá (%)", key: "sale", type: "number" },
  { title: "Trạng thái", key: "status", type: "text" },
  { title: "Phân Loại", key: "classify", type: "text" },
  { title: "Mô tả", key: "description", type: "text" },
  { title: "Ngày tạo", key: "createdAt", type: "date", isHidden: true },
];
