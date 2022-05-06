import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Blogs from './Pages/Blogs/Blogs';
import ProductDetails from "./Pages/ProductDeails/ProductDetails";
import ManageInventory from "./Pages/ManageInventory/ManageInventory";
import AddProducts from './Pages/AddProducts/AddProducts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/inventory/:serviceId" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/manage-inventory" element={<ManageInventory></ManageInventory>}></Route>
        <Route path="/addproduct" element={<AddProducts></AddProducts>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
