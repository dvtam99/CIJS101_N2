import { Routes, Route } from "react-router-dom";
import MyShop from "./MyShop/MyShop";
import "./app.scss";
import PageDetailProduct from "./MyShop/MyProduct/DetailProduct/PageDetailProduct";
function App() {
  return (
    <>
      <Routes>
        {/* <MyShop /> */}
        {/* <Route path="/" element={<div>Hello</div>} /> */}

        <Route path="/" element={<MyShop />} />
        {/* <Route path="/product/:pageSize/:page" element={<MyShop />} /> */}
        <Route path="/product" element={<MyShop />} />

        {/* pageSize: 10 => trang hien thi 10 sp
        page: 0 => trang dau tien
        page: 1 => trang thu 2 */}
        <Route
          path="/productDetail/:productId"
          element={<PageDetailProduct />}
        />
        <Route path="/signin" element={<div>Sign in</div>} />
        <Route path="/signup" element={<div>Sign up</div>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
}

export default App;
