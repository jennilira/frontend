import React, { useState } from "react";
import "../Modal/modal";
import Modal from "../Modal/modal";
import CreateProduct from "./CreateProduct";
import List from "./list2";
import "./CreateProduct.css";

function CreateProduct2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="">
      <div className="container-butaoo">
        <div className=" btn butao-top " onClick={() => setIsOpen(true)}>
          New Products
        </div>
      </div>

      <div>{isOpen && <Modal setIsOpen={setIsOpen} />}</div>

      <div></div>
    </div>
  );
}

export default CreateProduct2;
