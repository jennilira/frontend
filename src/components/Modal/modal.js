import React from "react";
import "../product/CreateProduct2";
import "./modalstyle.css"
import CreateProduct from "../product/CreateProduct";
import { SlClose } from "react-icons/sl";

const Modal = ({ setIsOpen }) => {
  return (
    <div className="telainteira" >
      <div className="centered">
       
        <div className="modal2">
       
 <div className="x-butao" onClick={() => setIsOpen(false)} > 
 <SlClose className="x-icon"/>
 </div>
       
 
           <div className="conteudo-container">
            
           <CreateProduct />
       
          </div>
        <div className="butao-container">
       
        <div className="butao-modal">
      
         
          {/* <button className="btn"onClick={() => setIsOpen(false)} > fechar</button> */}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

//quero passar as informacoes do create procuct para ca entende,como componente dentro modal


//modal e o createproduct