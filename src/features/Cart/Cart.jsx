import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

import "./style.css";

export default function Cart() {
  const [cartData, setCartData] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems"));
  });

  // useEffect(() => {
  //   const arr = [...cartData]
  //   const counts = arr.reduce(
  //     (acc, item) => ({
  //       ...acc,
  //       [item.itemID]: (acc[item.itemID] || 0) + 1,
  //     }),
  //     {}
  //   );

  //   console.log(counts);
  //   // const counter = {};

  //   // cartData.forEach(function (obj) {
  //   //   var key = JSON.stringify(obj);
  //   //   counter[key] = (counter[key] || 0) + 1;
  //   // });
  //   // console.log(counter);
  // }, []);

  const renderItemCart = () => {
    // lấy ra số lần lặp lại của item
    const arr = [...cartData]
    const counts = arr.reduce(
      (acc, item) => ({
        ...acc,
        [item.itemID]: (acc[item.itemID] || 0) + 1,
      }),
      {}
    );
    
    //lọc ra một mảng có các phần tử ko trùng
    const unique = cartData?.filter(
      (v, i, a) => a.findIndex((t) => t.itemID === v.itemID) === i
    );

    

    return unique.map((item, index) => {
      return (
        <tr key={index}>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs">
                <img
                  src={item.productImage}
                  alt="Sản phẩm 1"
                  className="img-responsive"
                  width={100}
                />
              </div>
              <div className="col-sm-10">
                <h4 className="nomargin">{item.productName}</h4>
              </div>
            </div>
          </td>
          <td data-th="Price">
            <NumberFormat
              value={item.defaultPrice}
              className=""
              displayType={"text"}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"₫"}
              renderText={(value, props) => <span {...props}>{value}</span>}
            />
          </td>
          <td data-th="Quantity">
            <input
              className="form-control text-center"
              defaultValue={counts[item.itemID]||1}
              type="number"
            />
          </td>
          <td data-th="Subtotal" className="text-center">
          <NumberFormat
              value={(counts[item.itemID]||1)*item.defaultPrice}
              className=""
              displayType={"text"}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"₫"}
              renderText={(value, props) => <span {...props}>{value}</span>}
            />

            
          </td>
          <td className="actions" data-th>
            <button className="btn btn-danger btn-sm">
              <i className="fas fa-trash" />
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="section cart">
      <div className="container" style={{ padding: "40px 0" }}>
        <table id="cart" className="table table-hover table-condensed">
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Tên sản phẩm</th>
              <th style={{ width: "10%" }}>Giá</th>
              <th style={{ width: "10%" }}>Số lượng</th>
              <th style={{ width: "22%" }} className="text-center">
                Thành tiền
              </th>
              <th style={{ width: "10%" }} />
            </tr>
          </thead>
          <tbody>{renderItemCart()}</tbody>
          <tfoot>
            {/* <tr className="visible-xs">
                <td className="text-center">
                  <strong>Tổng 200.000 đ</strong>
                </td>
              </tr> */}
            <tr>
              <td>
                <Link to="/" className="btn btn-warning">
                  <i className="fa fa-angle-left" /> Tiếp tục mua hàng
                </Link>
              </td>
              <td colSpan={2} className="hidden-xs" />
              <td className="hidden-xs text-center">
                <strong>Tổng tiền 500.000 đ</strong>
              </td>
              <td>
                <a
                  href="/#"
                  style={{ backgroundColor: "#fed700" }}
                  className="btn btn-success btn-block"
                >
                  Thanh toán <i className="fa fa-angle-right" />
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
