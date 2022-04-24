import React, { useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';
import NumberFormat from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import GetUsersData from '../../api/GetUsersData';
import './style.css';
import StorageKeys from '../../constants';
import orderApi from '../../api/orderApi';
import { styled, Tooltip } from '@material-ui/core';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
export default function Payment() {
  let navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(() => {
    return JSON.parse(localStorage.getItem(StorageKeys.USER));
  });

  const [cartData, setCartData] = useState(() => {
    if (userLogin) {
      return JSON.parse(localStorage.getItem('cartItems' + userLogin.id));
    }
    return JSON.parse(localStorage.getItem('cartItems'));
  });

  const [total, setTotal] = useState(() => {
    return cartData.reduce((total, current) => {
      return total + current.defaultPrice * current.number;
    }, 0);
  });
  // overhere
  const [userData, setUserData] = useState({
    // email: userLogin.email,
    // join_date: "",
    // name: userLogin.name,
    // password: "",
    // phone: userLogin.phone,
    // user_address: userLogin.user_address,
    // user_ava: "",
    // user_status: 1,
    // user_type: "",

    id: '',
    email: userLogin.email,
    created_at: '',
    name: userLogin.name,
    phone: userLogin.phone_number,
    user_address: userLogin.address,
    ava: '',
    status: 1,
    role: '',
  });

  const getCurrentDay = () => {
    var today = new Date();
    var date =
      today.getDate() +
      '/' +
      (today.getMonth() + 1) +
      '/' +
      today.getFullYear();
    return date;
  };
  const [order, setOrder] = useState(() => {
    let orderDetail = [];

    JSON.parse(localStorage.getItem('cartItems' + userLogin.id)).forEach(
      (item) => {
        orderDetail.push({
          number: item.number,
          price: item.defaultPrice,
          product_id: item.itemID,
          product_name: item.productName,
        });
      }
    );
    return {
      recipient_address: userLogin.address,
      recipient_name: userLogin.name,
      recipient_phone_number: userLogin.phone_number,
      status: 1,
      total: total,
      user_id: userLogin.id, //userData.id here
      created_at: getCurrentDay(),
      updated_at: null,
      order_detail: orderDetail,
    };
  });

  const inputOnchangeHandler = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const addOrderHandler = async (order) => {
    try {
      const response = await orderApi.addOrder(order);
      const { data } = response;
    } catch (error) {
      console.log('Fail to get api order');
    }
  };

  const paymentBtnHandler = (e) => {
    if (localStorage.getItem(StorageKeys.USER)) {
      // add order to db
      addOrderHandler(order);
      // --------------------------------------
      toast.success('thanh toán thành công, hãy kiểm tra lịch sử mua hàng');
      localStorage.removeItem('cartItems' + userLogin.id);
      navigate('/', { replace: true });
    } else {
      toast.error('Vui lòng đăng nhập');
    }
  };

  const renderPaymentItems = cartData.map((item, index) => (
    <li
      key={index}
      className="list-group-item d-flex justify-content-between lh-condensed"
    >
      <div>
        <h6 className="my-0">{item.productName}</h6>
        <small className="text-muted">
          <NumberFormat
            value={item.defaultPrice}
            className=""
            displayType={'text'}
            thousandSeparator={'.'}
            decimalSeparator={','}
            prefix={'₫'}
            renderText={(value, props) => <span {...props}>{value} </span>}
          />
          x {item.number}
        </small>
      </div>
      <span className="text-muted">
        <NumberFormat
          value={item.defaultPrice * item.number}
          className=""
          displayType={'text'}
          thousandSeparator={'.'}
          decimalSeparator={','}
          prefix={'₫'}
          renderText={(value, props) => <span {...props}>{value} </span>}
        />
      </span>
    </li>
  ));

  return (
    <section className="section payment">
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
      <main role="main" className="payment">
        <div className="container mt-4">
          <form
            className="needs-validation"
            name="frmthanhtoan"
            method="post"
            action="#"
          >
            <input
              type="hidden"
              name="kh_tendangnhap"
              defaultValue="dnpcuong"
            />
            <div className="py-5 text-center">
              <i className="fa fa-credit-card fa-4x" aria-hidden="true" />
              <h2>Thanh toán</h2>
              <p className="lead">
                Vui lòng kiểm tra thông tin Khách hàng, thông tin Giỏ hàng trước
                khi Đặt hàng.
              </p>
            </div>
            <div className="row">
              <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Giỏ hàng</span>
                  <span className="badge badge-secondary badge-pill">
                    {cartData?.length ?? 0}
                  </span>
                </h4>
                <ul className="list-group mb-3">
                  {renderPaymentItems}

                  <li className="list-group-item d-flex justify-content-between">
                    <span>Tổng thành tiền</span>
                    <NumberFormat
                      value={total}
                      className=""
                      displayType={'text'}
                      thousandSeparator={'.'}
                      decimalSeparator={','}
                      prefix={'₫'}
                      renderText={(value, props) => (
                        <strong {...props}>{value}</strong>
                      )}
                    />
                  </li>
                </ul>
              </div>
              <div className="col-md-8 order-md-1">
                <h4 className="mb-3">Thông tin khách hàng</h4>
                <div className="row">
                  {/* name=========================================== */}
                  <div className="col-md-12">
                    <label htmlFor="receiver_name">Họ tên</label>
                    <Tooltip
                      title={
                        order.recipient_name ? '' : 'vui lòng nhập tên người nhận'
                      }
                      arrow
                    >
                      <input
                        type="text"
                        className={
                          'form-control ' +
                          (order.recipient_name ? '' : 'input-error')
                        }
                        name="recipient_name"
                        id="recipient_name"
                        defaultValue={order.recipient_name}
                        onChange={(e) => inputOnchangeHandler(e)}
                      />
                    </Tooltip>
                  </div>

                  {/* address=========================================== */}

                  <div className="col-md-12">
                    <label htmlFor="recipient_address">Địa chỉ</label>
                    <Tooltip
                      title={
                        order.recipient_address ? '' : 'vui lòng nhập địa chỉ'
                      }
                      arrow
                    >
                      <input
                        type="text"
                        className={
                          'form-control ' +
                          (order.recipient_address ? '' : 'input-error')
                        }
                        name="recipient_address"
                        id="recipient_address"
                        defaultValue={order.recipient_address}
                        onChange={(e) => inputOnchangeHandler(e)}
                      />
                    </Tooltip>
                  </div>
                  {/* phone=========================================== */}
                  <div className="col-md-12">
                    <label htmlFor="receiver_phone">Điện thoại</label>
                    <Tooltip
                      title={
                        order.recipient_phone_number
                          ? ''
                          : 'vui lòng nhập số điện thoại'
                      }
                      arrow
                    >
                      <input
                        type="text"
                        className={
                          'form-control ' +
                          (order.recipient_phone_number ? '' : 'input-error')
                        }
                        name="recipient_phone_number"
                        id="recipient_phone_number"
                        defaultValue={order.recipient_phone_number}
                        onChange={(e) => inputOnchangeHandler(e)}
                      />
                    </Tooltip>
                  </div>
                  {/* email=========================================== */}
                  <div className="col-md-12">
                    <label htmlFor="kh_email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="kh_email"
                      id="kh_email"
                      defaultValue={userData.email}
                      readOnly
                    />
                  </div>
                </div>
                <h4 className="my-4">Hình thức thanh toán</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="httt-1"
                      name="httt_ma"
                      type="radio"
                      className="custom-control-input"
                      required
                      defaultValue={1}
                      defaultChecked
                      readOnly
                    />
                    <label className="custom-control-label" htmlFor="httt-1">
                      Thanh toán khi nhận hàng
                    </label>
                  </div>
                </div>
                <hr className="mb-4" />
                <button
                  className="btn btn-lg btn-block"
                  type="button"
                  name="btnDatHang"
                  disabled = {(order.recipient_phone_number&&order.recipient_address&&order.recipient_name)?false:true}
                  onClick={(e) => paymentBtnHandler(e)}
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
}
