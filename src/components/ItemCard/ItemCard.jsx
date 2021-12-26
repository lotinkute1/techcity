import React from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
export default function ItemCard(props) {
  return (
    <div className="carousel-box">
      <Link to={"/product_info-"+ props.itemID} alt="" className="carousel-item__image">
        <img src={props.productImage} alt="" />
      </Link>
      <div className="carousel-item__bot-wrapper">
        <Link to={"/product_info-"+ props.itemID} className="carousel-item__title">
          <h3 className="text-wrap">{props.productName}</h3>
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
            value={props.defaultPrice}
            className=""
            displayType={"text"}
            thousandSeparator={'.'} 
            decimalSeparator={','}
           
            prefix={"₫"}
            renderText={(value, props) => <span {...props}>{value}</span>}
          />

          <span>
            <i className="fas fa-truck" />
          </span>
        </div>
        <div className="carousel-item__add-to-cart">
          <div className="btn btn-buy">Thêm vào giỏ</div>
        </div>
      </div>
    </div>
  );
}
