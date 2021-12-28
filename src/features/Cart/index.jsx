import React, { Component } from "react";
import "./style.css";
class Cart extends Component {
  render() {
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
            <tbody>
              <tr>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs">
                      <img
                        src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/shopping_cart/images/090.jpg"
                        alt="Sản phẩm 1"
                        className="img-responsive"
                        width={100}
                      />
                    </div>
                    <div className="col-sm-10">
                      <h4 className="nomargin">Sản phẩm 1</h4>
                      <p>Mô tả của sản phẩm 1</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">200.000 đ</td>
                <td data-th="Quantity">
                  <input
                    className="form-control text-center"
                    defaultValue={1}
                    type="number"
                  />
                </td>
                <td data-th="Subtotal" className="text-center">
                  200.000 đ
                </td>
                <td className="actions" data-th>
                  <button className="btn btn-info btn-sm">
                    <i className="fa fa-edit" />
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <i className="fas fa-trash" />
                  </button>
                </td>
              </tr>
              <tr>
                <td data-th="Product">
                  <div className="row">
                    <div className="col-sm-2 hidden-xs">
                      <img
                        src="http://hocwebgiare.com/thiet_ke_web_chuan_demo/shopping_cart/images/090.jpg"
                        alt="Sản phẩm 2"
                        className="img-responsive"
                        width={100}
                      />
                    </div>
                    <div className="col-sm-10">
                      <h4 className="nomargin">Sản phẩm 2</h4>
                      <p>Mô tả của sản phẩm 2</p>
                    </div>
                  </div>
                </td>
                <td data-th="Price">300.000 đ</td>
                <td data-th="Quantity">
                  <input
                    className="form-control text-center"
                    defaultValue={1}
                    type="number"
                  />
                </td>
                <td data-th="Subtotal" className="text-center">
                  300.000 đ
                </td>
                <td className="actions" data-th>
                  <button className="btn btn-info btn-sm">
                    <i className="fa fa-edit" />
                  </button>
                  <button className="btn btn-danger btn-sm">
                    <i className="fas fa-trash" />
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="visible-xs">
                <td className="text-center">
                  <strong>Tổng 200.000 đ</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <a href className="btn btn-warning">
                    <i className="fa fa-angle-left" /> Tiếp tục mua hàng
                  </a>
                </td>
                <td colSpan={2} className="hidden-xs" />
                <td className="hidden-xs text-center">
                  <strong>Tổng tiền 500.000 đ</strong>
                </td>
                <td>
                  <a
                    href
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
}

export default Cart;
