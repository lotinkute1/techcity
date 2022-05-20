import { Tooltip } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import orderApi from '../../api/orderApi';
import shipApi from '../../api/shipApi';
import StorageKeys from '../../constants';
import './style.css';
import discountApi from '../../api/discountApi';
export default function Payment() {
  let navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(() => {
    return JSON.parse(localStorage.getItem(StorageKeys.USER));
  });
  const [ships, setShips] = useState([]);
  const [isPaypalPayment, setIsPaypalPayment] = useState(false);
  const [shipCost, setShipCost] = useState(0);
  const [discountCode,setDiscountCode]=useState('');
  const [discountProducts,setDiscountProducts]=useState([]);
  // form paypal ref
  const formRef = useRef(null);

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
      total: total + shipCost,
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
      if (!isPaypalPayment) {
        toast.success('thanh toán thành công, hãy kiểm tra lịch sử mua hàng');

        navigate('/', { replace: true });
        const response = await orderApi.addOrder(order);
        const { data } = response;
      } else {
        for (let [key, value] of Object.entries(order)) {
          let input = document.createElement('input');
          input.setAttribute('type', 'hidden');
          input.setAttribute('name', key);
          if (key === 'order_detail') {
            input.setAttribute('value', JSON.stringify(value));
          } else input.setAttribute('value', value);
          formRef.current.append(input);
        }
        let emailInput = document.createElement('input');
        emailInput.setAttribute('type', 'hidden');
        emailInput.setAttribute('name', 'user');
        emailInput.setAttribute(
          'value',
          JSON.stringify({
            ...userLogin,
          })
        );
        formRef.current.append(emailInput);
        formRef.current.submit();
      }
    } catch (error) {
      console.log('Fail to get api order');
    }
  };

  const paymentBtnHandler = (e) => {
    if (localStorage.getItem(StorageKeys.USER)) {
      // add order to db
      addOrderHandler(order);
      // --------------------------------------
      localStorage.removeItem('cartItems' + userLogin.id);
    } else {
      toast.error('Vui lòng đăng nhập');
    }
  };
  const isDiscountOnProduct = (itemID)=>{
    return discountProducts?.map((product)=>product.product_id).includes(itemID)
  }
  const deCrePriceByPercent = (price,percent)=>{
    price = Number(price);
    percent = Number(percent);
    let result = (price*(100-percent))/100;
    return result;
  }
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
            renderText={(value, props) => <span  {...props}>{value} </span>}
          />
          x {item.number}
        </small>
      </div>
      <div className="text-right">
        <span className={"text-muted "+(isDiscountOnProduct(item.itemID)?'number_line_through':'')}>
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
        {isDiscountOnProduct(item.itemID)&&
        <>
          <p className="discount_percent_number" > -{discountProducts.find((product)=> product.product_id==item.itemID).discount_percent}%</p>
          <span className={"text-muted "}>
            <NumberFormat
              value={deCrePriceByPercent( item.defaultPrice * item.number,discountProducts.find((product)=> product.product_id==item.itemID).discount_percent)}
              className=""
              displayType={'text'}
              thousandSeparator={'.'}
              decimalSeparator={','}
              prefix={'₫'}
              renderText={(value, props) => <span {...props}>{value} </span>}
            />
          </span>
        </>
        }
        
      </div>
    </li>
  ));
  const getShips = async () => {
    let result = await shipApi.getAll();
    setOrder({
      ...order,
      total: total + result.data[0].ship_price
    })
    setShipCost(result.data[0].ship_price)
    setShips(result.data);
  };
  useEffect(() => {
    getShips();
  }, []);
  const btnSelectShip = (e) => {
    console.log(e.target.value);
    setShipCost(e.target.value);
    setOrder({
      ...order,
      total: total +Number( e.target.value)
    })
  }
  const renderShips = () =>
    ships.map((ship,index) => (
      <div key={index} className="d-block my-3">
        <div className="custom-control custom-radio">
          <input
            id={"shipRadioBtn"+index}
            name={"shipRadioBtn"}
            type="radio"
            value={ship.ship_price}
            defaultChecked={index==0}
            className={"custom-control-input"}
            onClick={(e)=>btnSelectShip(e)}
          />
          <label className="custom-control-label" htmlFor={"shipRadioBtn"+index}>
            {ship.ship_company}
          </label>
        </div>
      </div>
    ));
   
  
  const  applyDiscountCodeHandler=async () => {
    if(discountCode!=''){
      try{

        var result = await discountApi.checkDiscountCode(discountCode);
        console.log(result);
        // console.log(cartData);
        if(cartData.map((item)=>item.itemID).includes(result.data.product.id)){

          setDiscountCode('');
          if(!isDiscountOnProduct(result.data.product.id)){

            let newDiscountProduct ={
              'product_id':result.data.product.id,
              'discount_percent':result.data.discount.discount_percent,
              'discount_price':deCrePriceByPercent(result.data.product.price,result.data.discount.discount_percent)
            }
            setTotal((preTotal)=>preTotal-((result.data.product.price/100)*result.data.discount.discount_percent))
            let newOrderDetail = order.order_detail.find(item=>item.product_id==result.data.product.id);
            newOrderDetail.price = newDiscountProduct.discount_price;
            let newOrderDetailWithout = order.order_detail.filter(item=>item.product_id!=result.data.product.id);
            // let newOrderDetails =[...order.order_detail] 
            console.log(total-((result.data.product.price/100)*result.data.discount.discount_percent) + shipCost);
            setOrder({
              ...order,
              order_detail:[...newOrderDetailWithout,newOrderDetail],
              total: total-((result.data.product.price/100)*result.data.discount.discount_percent) + shipCost
            })
            setDiscountProducts((pre)=>[...pre,newDiscountProduct])
            
            toast.success(`áp dụng mã giảm giá [${discountCode}] cho sản phẩm ${result.data.product.name} thành công !`);
          }else toast.error(`Mã giảm giá này đã được bạn sử dụng cho sản phẩm ${result.data.product.name}`);
          // console.log(order);
        }else toast.error(`Mã giảm giá [${discountCode}] không dùng dược cho các sản phẩm hiện tại !`);

      }catch(err){
        toast.error(`Mã giảm giá [${discountCode}] không hợp lệ !`);
      }
    }
  }



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
                    <span>Tổng giá sản phẩm</span>
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
                  <li className="list-group-item d-flex justify-content-between discount-field">
                    <span>Nhập mã giảm giá</span>
                    <input type="text" value={discountCode} className="discount-code-input" onChange={(e)=>setDiscountCode(e.target.value)}/>
                    <input type="button" onClick={() =>applyDiscountCodeHandler()} value="giảm" className="btn btn-add-code"/>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    Phí ship
                    <NumberFormat
                      value={shipCost }
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
                  
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Tổng thành tiền</span>
                    <NumberFormat
                      value={Number( total) +Number( shipCost)}
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
                        order.recipient_name
                          ? ''
                          : 'vui lòng nhập tên người nhận'
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
                <hr className="mb-4" />
                <h4 className="my-4">Hình thức giao hàng</h4>
                  {renderShips()}
                <h4 className="my-4">Hình thức thanh toán</h4>
                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="httt-1"
                      name="httt_ma"
                      type="radio"
                      className="custom-control-input"
                      checked={!isPaypalPayment}
                      onClick={() => setIsPaypalPayment(false)}
                    />
                    <label className="custom-control-label" htmlFor="httt-1">
                      Thanh toán khi nhận hàng
                    </label>
                  </div>
                </div>

                <div className="d-block my-3">
                  <div className="custom-control custom-radio">
                    <input
                      id="httt-2"
                      name="httt_ma"
                      type="radio"
                      className="custom-control-input"
                      checked={isPaypalPayment}
                      onClick={() => setIsPaypalPayment(true)}
                    />
                    <label className="custom-control-label" htmlFor="httt-2">
                      Paypal
                    </label>
                  </div>
                </div>

                <hr className="mb-4" />
                <form
                  ref={formRef}
                  action="http://127.0.0.1:8000/api/paypal"
                  method="post"
                ></form>
                <button
                  className="btn btn-lg btn-block"
                  type="button"
                  name="btnDatHang"
                  disabled={
                    order.recipient_phone_number &&
                    order.recipient_address &&
                    order.recipient_name
                      ? false
                      : true
                  }
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
