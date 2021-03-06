import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import StorageKeys from "../../constants";

export default function HeaderCartPopup() {
  const [userLogin, setUserLogin] = useState(() => {
    return JSON.parse(localStorage.getItem(StorageKeys.USER));
  });
  const [items, setItems] = useState(() => {
    if (userLogin) {
      return JSON.parse(localStorage.getItem("cartItems" + userLogin.id));
    }
    return JSON.parse(localStorage.getItem("cartItems"));
  });

  const renderCardItems = () => {
    // to unique array
    // const unique = items?.filter(
    //   (v, i, a) => a.findIndex((t) => t.itemID === v.itemID) === i
    // );

    return items?.map((item, index) => {
      return (
        <Link key={index} to={"/product_info-" + item.itemID}>
          <div className="header__cart__item">
            <div className="header__cart__item-img">
              <img src={item.productImage} alt="" />
            </div>
            <div className="header__cart__item-name ">
              <div className="text-wrap1">{item.productName}</div>
              <div className="pt-1">{"x " + item.number}</div>
            </div>
            <div className="header__cart__item-price">
              <NumberFormat
                value={item.defaultPrice}
                className=""
                displayType={"text"}
                thousandSeparator={"."}
                decimalSeparator={","}
                prefix={"₫"}
                renderText={(value, props) => <span {...props}>{value}</span>}
              />
            </div>
          </div>
        </Link>
      );
    });
  };

  useEffect(() => {

    //lắng nghe sự kiện update local
    const localStorageSetHandler = function (e) {
      setTimeout(() => {
        let userLog=JSON.parse(localStorage.getItem(StorageKeys.USER));

        if (localStorage.getItem(StorageKeys.USER)) {
          if (JSON.parse(localStorage.getItem("cartItems" + userLog.id))) {
            setItems(
              JSON.parse(localStorage.getItem("cartItems" + userLog.id))
            );
          } else {
            setItems([]);
          }
        } else {
          setItems(JSON.parse(localStorage.getItem("cartItems")));
        }
      }, 1000);
    };
    document.addEventListener("itemInserted", localStorageSetHandler);

    
    //lắng nghe sự kiện xóa local
    const localStorageSetHandler2 = function (e) {
      setTimeout(() => {

        let userLog=JSON.parse(localStorage.getItem(StorageKeys.USER));

        if (localStorage.getItem(StorageKeys.USER)) {
          if (JSON.parse(localStorage.getItem("cartItems" + userLog.id))) {
            setItems(
              JSON.parse(localStorage.getItem("cartItems" + userLog.id))
            );
          } else {
            setItems([]);
          }
        } else {
          setItems(JSON.parse(localStorage.getItem("cartItems")));
        }
      }, 1000);
    };
    document.addEventListener("itemDeleted", localStorageSetHandler2);

  }, []);

  return (
    <div className="header__cart">
      <div className="header__cart__number">{items?.length ?? 0}</div>
      <i className="fas fa-shopping-cart" />
      <div className="header__cart__popup">
        <div>
          <h3 className="header__cart__title">Giỏ hàng</h3>
          {renderCardItems()}

          {(items === null)||(items.length === 0) ? (
            <img
              style={{ width: 200 + "px" }}
              src="https://www.bazarhat99.com/public/not-found.jpg"
              alt=""
            />
          ) : (
            <Link
              name="tocart"
              id="tocart"
              className="btn btn-tocart"
              to="/Cart"
              role="button"
            >
              Đến giỏ hàng
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
