import * as React from "react";

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditProduct from "./components/product/EditProduct";

import CreateProduct from "./components/product/CreateProduct";
import List from "./components/product/list2";
// import Modal from "./components/Modal/modal";
// import Dashboard from "./pages/dashboard/dashboard";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Sidebar from "./components/Sidebar/Sidebar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import CreateProduct2 from "./components/product/CreateProduct2";

function App() {
  const [activeSidebar, setActiveSidebar] = React.useState(false);

  return (
    <Router>
      {/* <Sidebar4/> */}
      {/* <Modal /> */}
      {/* <Sidebar2/> */}
      <Sidebar
        activeSidebar={activeSidebar}
        setActiveSidebar={setActiveSidebar}
      />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainLayout activeSidebar={activeSidebar} children={<p>aaa</p>} />
          }
        />
        <Route
          path="/listproducts"
          element={
            <MainLayout activeSidebar={activeSidebar} children={<List />} />
          }
        />
        <Route
          path="/product/create"
          element={
            <MainLayout
              activeSidebar={activeSidebar}
              children={<CreateProduct />}
            />
          }
        />
        <Route
          path="/product/create2"
          element={
            <MainLayout
              activeSidebar={activeSidebar}
              children={<CreateProduct2/>}
            />
          }
        />
        <Route
          path="/product/edit/:id"
          element={
            <MainLayout
              activeSidebar={activeSidebar}
              children={<EditProduct />}
            />
          }
        />
        {/* <Route exact path="/" element={<Dashboard />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
