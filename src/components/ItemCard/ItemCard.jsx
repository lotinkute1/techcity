import React from "react";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addToCart } from "./itemsCardSlice";

export default function ItemCard({
  itemID,
  productName,
  productImage,
  defaultPrice,
}) {
  
  // const data= useSelector((state)=>state.itemCard.data);
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    if(localStorage.getItem("userLogged")){

      dispatch(
        addToCart({
          itemID,
          productName,
          productImage,
          defaultPrice,
        })
      );
      toast.success("Thêm vào giỏ hàng thành công");
    }else{
      toast.error("Vui lòng đăng nhập");
    }
  };

  return (
    <div className="carousel-box">
      {/* notification */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Link
        to={"/product_info-" + itemID}
        alt=""
        className="carousel-item__image"
      >
        <img src={productImage} alt="" />
      </Link>
      <div className="carousel-item__bot-wrapper">
        <Link to={"/product_info-" + itemID} className="carousel-item__title">
          <h3 className="text-wrap">{productName}</h3>
        </Link>
        <div className="carousel-item__raiting">
          <div className="raiting-starts">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
            <i className="far fa-star" />
          </div>
        </div>
        <div className="carousel-item__price">
          <NumberFormat
            value={defaultPrice}
            className=""
            displayType={"text"}
            thousandSeparator={"."}
            decimalSeparator={","}
            prefix={"₫"}
            renderText={(value, props) => <span {...props}>{value}</span>}
          />

          <span>
            <i className="fas fa-truck" />
          </span>
        </div>
        <div className="carousel-item__add-to-cart">
          <div onClick={() => addToCartHandler()} className="btn btn-buy">
            Thêm vào giỏ
          </div>
        </div>
      </div>
    </div>
  );
}
