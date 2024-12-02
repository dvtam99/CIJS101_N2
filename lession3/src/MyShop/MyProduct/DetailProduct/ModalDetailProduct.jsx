import { Modal } from "antd";
import ComponnentDetai from "./ComponnentDetai";
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
        <ComponnentDetai item={item} />
      </Modal>
    </div>
  );
};

export default ModalDetailProduct;
