import React from "react";
import PropTypes from "prop-types";

import "../profile.css";
import TableDataOrders from "./components/TableData/TableDataOrders";

PurchaseHistory.propTypes = {};

function PurchaseHistory(props) {
  return (
    <div className="grid__column-10">
      <div className="table-orders">
        <TableDataOrders />
      </div>
    </div>
  );
}

export default PurchaseHistory;
