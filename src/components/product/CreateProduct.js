import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './CreateProduct.css'

export default function CreateProduct() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();
  const [validationError, setValidationError] = useState({});

  const changeHandler = (event) => {
    setImage(event.target.files[0]);
  };

  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    await axios
      .post(`http://localhost:8000/api/products`, formData)
      .then(({ data }) => {
        Swal.fire({
          icon: "success",
          text: data.message,
        });
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          setValidationError(response.data.errors);
        } else {
          Swal.fire({
            text: response.data.message,
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="container">
      <div className="">
        <div className="">
          <div className="">
            <div className="">
              <h4 className="card-title">Create Product</h4>
              <hr />
              <div className="">
                {Object.keys(validationError).length > 0 && (
                  <div className="title2">
                    <div className="">
                      <div className="">
                        <ul className="">
                          {Object.entries(validationError).map(
                            ([key, value]) => (
                              <li key={key}>{value}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
                <Form onSubmit={createProduct}>
                  <div>
                    <div>
                      <Form.Group  className="title"controlId="Name">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          type="text"
                          value={title}
                          onChange={(event) => {
                            setTitle(event.target.value);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <Form.Group className="title" controlId="Description">
                        <Form.Label >Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={description}
                          onChange={(event) => {
                            setDescription(event.target.value);
                          }}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Form.Group  className="title"controlId="Image" >
                        <Form.Label >Image</Form.Label>
                        <Form.Control type="file" onChange={changeHandler} />
                      </Form.Group>
                    </div>
                  </div>
                 
                    <div>
                    
                      <Form.Group  className="">
                      <div>
                        <select>
                          <option>Choose an option</option>
                          <option>One</option>
                          <option>Two</option>
                          <option>Three</option>
                        </select>
                        </div>
                      </Form.Group>
                   
                    </div>
                 

                 

                  <div className="butao-modal-container">
       
       <div className="butao-modal">
     
       <button  onClick={() => setIsOpen(false)}  className="btn butaoo" type="submit">
                    Save
                  </button>

       
       </div>
       </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// temos uma funçao...entao tipo quero passar ela
//
