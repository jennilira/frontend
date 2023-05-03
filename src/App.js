import * as React from "react";
import Sidebar from "./components/Sidebar";

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditProduct from "./components/product/EditProduct";

import CreateProduct from "./components/product/CreateProduct";
import List from "./components/product/list2";
import Modal from "./components/modal";
import Dashboard from "./pages/dashboard/dashboard";
import Sidebar4 from "./components/SIdebari";

function App() {
  return (
    <Router>
      <Sidebar/>
      {/* <Sidebar4/> */}
        <Modal />
        {/* <Sidebar2/> */}

        <Routes>
          <Route path="/listproducts" element={<List />} />
          <Route path="/product/create" element={<CreateProduct />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
          <Route exact path="/" element={<Dashboard />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
   
   
    </Router>
  );
}

export default App;
