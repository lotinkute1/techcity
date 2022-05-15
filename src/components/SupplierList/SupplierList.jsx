import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
export default function SupplierList({ suppliers }) {
  const renderSuppliers = () =>
    suppliers?.map((supplier) => {
      return (
        <div key={supplier.id} className="supplier__link">
          <div className="supplier__ava">
            <Link to={'/supplier/' + supplier.id}>
              <img src={supplier.ava} alt="" />
            </Link>
          </div>
          <Link to={'/supplier/' + supplier.id}>
            <p className="supplier__name">{supplier.name}</p>
          </Link>
          <div className="supplier__number-sold">
            {supplier.total_products_sold} sold
          </div>
        </div>
      );
    });
  return (
    <section className="section supplier-list">
      <div className="supplier-list__title">TOP SHOP</div>
      <div className="suppliers__wrapper">{renderSuppliers()}</div>
    </section>
  );
}
