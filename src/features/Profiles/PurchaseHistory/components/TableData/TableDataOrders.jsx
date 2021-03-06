import classNames from "classnames";
import { getDatabase, onValue, push, ref } from "firebase/database";
import PropTypes from "prop-types";
import NumberFormat from "react-number-format";
import { useEffect, useState } from "react";
import StorageKeys from "../../../../../constants";
// import "./css/owl.carousel.min.css";
//  Bootstrap CSS
// import "./css/bootstrap.min.css";
// Style
import "./css/style.css";
import "./fonts/icomoon/style.css";
// import "./js/popper.min.js";
// import "./js/bootstrap.min.js";
// import "./js/jquery-3.3.1.min.js";
import "./js/main";
import orderApi from "../../../../../api/orderApi";

TableDataOrders.propTypes = {
  onEditClick: PropTypes.func,
  onClick: PropTypes.func,
  onRemoveClick: PropTypes.func,
  onToggleBtn: PropTypes.func,
};
export default function TableDataOrders({
  onRemoveClick = null,
  onToggleBtn = null,
}) {
  const [orders, setOrders] = useState([]);
  const db = getDatabase();

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem(StorageKeys.USER))
  );

  // all orders of current user
  const orderOfCurrenUser = orders.filter(
    (order) => order.user_id === loggedInUser.id
  );

  const getAllOrders = async () => {
    try {
      const response = await orderApi.getAll();
      const {data}= response;
      setOrders(data);
    } catch (err) {
      console.log('Fail to get api orders')
    }
  };

  console.log(orderOfCurrenUser);
  useEffect(() => {
    getAllOrders();
  }, []);

  const renderOrders = orderOfCurrenUser.map((order, index) => (
    <tr key={index}>
      <td width={"80px"} className="">
        {order.id}
      </td>

      <td width={"100px"} className="">
        <div className="d-flex align-items-center justify-content-center">
          <a href="/#" className="name">
            {order.user_id}
          </a>
        </div>
      </td>

      <td width={"120px"} className="">
        {order.recipient_name}
      </td>

      <td width={"200px"} className="">
        {order.recipient_address}
      </td>
      <td width={"200px"} className="">
        {order.recipient_phone_number}
      </td>

      <td width={"200px"} className="">
        <div
          className={
            "orders-btn-wrapper " +
            (order.status === 0
              ? "cancel"
              : order.status === 1
              ? "progressing"
              : "confirmed")
          }
        >
          <button type="button" className="btn btn-cancel">
            cancel
          </button>
          <button type="button" className="btn btn-progressing">
            progressing
          </button>
          <button type="button" className="btn btn-confirmed">
            confirmed
          </button>
        </div>
      </td>

      <td width={"150px"} className="">
        <NumberFormat
          value={order.total}
          className=""
          displayType={"text"}
          thousandSeparator={"."}
          decimalSeparator={","}
          prefix={"???"}
          renderText={(value, props) => <span {...props}>{value}</span>}
        />
      </td>

      <td width={"130px"} className="">
        {order.created_at}
      </td>

      {/* <td width={"60px"} className="">
        <button
          onClick={() => {
            handleRemoveClick(order);
          }}
          type="button"
          className="btn btn-danger"
        >
          X
        </button>
      </td> */}
    </tr>
  ));

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th scope="col">Oder ID</th>
              <th scope="col">User ID</th>
              <th scope="col">name</th>
              <th scope="col">address</th>
              <th scope="col">phone number</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
              <th scope="col">Create Date</th>
            </tr>
          </thead>
          <tbody>{renderOrders}</tbody>
        </table>
      </div>
    </>
  );
}
