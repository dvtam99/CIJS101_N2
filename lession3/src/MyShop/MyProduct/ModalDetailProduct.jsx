import { useState } from "react";
import { Button, Modal, Rate } from "antd";

const ModalDetailProduct = ({ isModalOpen, handleCancel, handleOk, item }) => {
  return (
    <div>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1035}
        footer={[]}
      >
        <div className="detail-item">
          <div className="d-flex">
            <img className="detail-image" src={item.imageUrl} alt={item.name} />
            <div className="pl-46px">
              <div>
                <div className="detail-name">{item.name}</div>
                <div>
                  <Rate allowHalf defaultValue={item.rate} disabled={true} />
                </div>
                <div className="detail-price">
                  {/* <span> */}
                  <div style={{ whiteSpace: "pre" }}>Giá: {item.price}</div>
                  <div className="detail-discount">{item.sale}</div>
                  {/* </span> */}

                </div>
              </div>
            </div>
          </div>
          <p>{item.description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDetailProduct;
