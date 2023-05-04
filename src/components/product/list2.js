import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import "./liststyle.css";
import Modal from "../Modal/modal";
//lsitar sabe
export default function List() {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get(`http://localhost:8000/api/products`).then(({ data }) => {
      setProducts(data);
    });
  };

  const deleteProduct = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    await axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        fetchProducts();
      })
      .catch(({ response: { data } }) => {
        Swal.fire({
          text: data.message,
          icon: "error",
        });
      });
  };

  return (
    <div className="container">
      {/* <div className=" butao-top">
          
          <Link
            className="btn "
            to={"/product/create"}
          >
            Create Product
          </Link>
        </div> */}

      <div className="tudo">
        {/* <div>
                  <div className="product-card">
                    <div className="product-image">
                      <img src="" alt="" />
                    </div>
                    <div className="product-details">
                      <h2 className="product-name">titulo</h2>
                      <p className="product-description">descrição</p>
                      <div className="product-actions">
                        <button className="btn ">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div> */}
        <div className="container">
          {products.length > 0 &&
            products.map((row, key) => (
              <div className="product-card">
                <div key={key}>
                  <div className="product-image">
                    <img
                      alt=""
                      width="50px"
                      src={`http://localhost:8000/storage/product/image/${row.image}`}
                    />
                  </div>
                  <div className="product-name">{row.title}</div>
                  <div className="product-description">{row.description}</div>
                  <div></div>
                  <div className="butoes">
                    <Link
                      to={`/product/edit/${row.id}`}
                      className="btn card-btn "
                    >
                      Edit
                    </Link>
                    <Button
                      className="btn card-btn "
                      onClick={() => deleteProduct(row.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
