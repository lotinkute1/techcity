import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";
import ItemCard from "../../components/ItemCard/ItemCard";
import GetProductsData from "../../api/GetProductsData";
import GetCategoriesData from "../../api/GetCategoriesData";
import ProductSkeleton from "./components/ProductSkeleton";
import Firebase from "../Firebase/Firebase";
import { useDispatch, useSelector } from "react-redux";

import {
  getDatabase,
  ref,
  push,
  child,
  onValue,
  get,
  limitToLast,
  limitToFirst,
  startAt,
  query,
  equalTo,
  orderByChild,
} from "firebase/database";

ShowAllProduct.propTypes = {};

function ShowAllProduct(props) {
  const products = GetProductsData();
  const categoryList = GetCategoriesData();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchValue = useSelector((state) => state.search);

  useEffect(() => {
    if (products) {
      const arr = [...products];
      setProductList(arr);
    }
    setLoading(false);
  }, [products]);

  const getProductFiltered = (categoryId) => {
    const db = getDatabase();
    const productFilteredRef = query(
      ref(db, "products"),
      orderByChild("category_id"),
      equalTo(categoryId)
    );

    const temp = [];
    onValue(productFilteredRef, (snapshot) => {
      snapshot.forEach((item) => {
        temp.push(item.val());
      });
    });
    return temp;
  };
  const hanleFilterCategory = async (e, category) => {
    const products = await getProductFiltered(category.id);
    setProductList(products);
  };

  // get data when typing search
  useEffect(() => {
    const searchValueLowerCase = searchValue.toLowerCase();
    const db = getDatabase();
    const productFilteredRef = query(
      ref(db, "products"),
      orderByChild("product_name")
    );

    const temp = [];
    onValue(productFilteredRef, (snapshot) => {
      snapshot.forEach((item) => {
        const productName = item.val().product_name.toLowerCase();
        if (
          productName
            .slice(0, searchValueLowerCase.length)
            .indexOf(searchValueLowerCase) !== -1
        ) {
          temp.push(item.val());
        }
      });
    });
    setProductList(temp);
  }, [searchValue]);

  // const handlePagination = () => {
  //   const db = getDatabase();
  //   const productFilteredRef = query(ref(db, "products"), limitToLast(10));
  //   const temp = [];
  //   onValue(productFilteredRef, (snapshot) => {
  //     snapshot.forEach((item) => {
  //       temp.push(item.val());
  //     });
  //   });
  //   setProductList(temp);
  // };

  console.log(productList);
  return (
    <section className="section">
      <div className="show-all">
        <div className="container allproduct">
          <div className="row product-filter py-3">
            <div className="breadcrumb">
              <a className="breadcrumb-item" href="/">
                <span>Trang chủ</span>
              </a>
              <span className="icon icon-next">
                <svg
                  width={6}
                  height={11}
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#808089"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.646447 0.646447C0.841709 0.451184 1.15829 0.451184 1.35355 0.646447L6.35355 5.64645C6.54882 5.84171 6.54882 6.15829 6.35355 6.35355L1.35355 11.3536C1.15829 11.5488 0.841709 11.5488 0.646447 11.3536C0.451184 11.1583 0.451184 10.8417 0.646447 10.6464L5.29289 6L0.646447 1.35355C0.451184 1.15829 0.451184 0.841709 0.646447 0.646447Z"
                  />
                </svg>
              </span>
              <a href="/" className="breadcrumb-item">
                <span title="iphone 13">iphone 13</span>
              </a>
            </div>
            <div className="filter">
              <span className="mr-1">Hiển thị 1–12 trong 28 kết quả</span>
              <select name="product" id="product">
                <option value="volvo">Thứ tự mặc định</option>
                <option value="saab">Thứ tự theo mức độ phổ biến</option>
                <option value="mercedes">Mới nhất</option>
                <option value="audi">Thứ tự theo điểm đánh giá</option>
              </select>
            </div>
          </div>
          <div className="row all-product">
            <div className="col-md-2 shop-bar">
              <div
                className="col-sm-12"
                style={{ color: "red", fontWeight: 700 }}
              >
                Danh mục sản phẩm
              </div>

              {categoryList
                ? categoryList.map((category) => (
                    <div
                      key={category.id}
                      className="col-sm-12 option bg"
                      onClick={(e) => {
                        hanleFilterCategory(e, category);
                      }}
                    >
                      {/* <a href="/">{category.category_name}</a> */}
                      <p>{category.category_name}</p>
                    </div>
                  ))
                : ""}
            </div>
            <div className="col-md-10 all-item">
              <div className="row ">
                <div className="col-sm-12 seacrch-result">
                  {searchValue && <h1>Kết quả tìm kiếm cho `{searchValue}`</h1>}

                  {loading && <ProductSkeleton length={12} />}
                </div>
                {loading ||
                  productList.map((product, index) => (
                    <div key={index} className="col-sm-3 carousel-items">
                      <ItemCard
                        itemID={product.id}
                        productName={product.product_name}
                        productImage={product.product_img.main_img}
                        defaultPrice={product.default_price}
                      />
                    </div>
                  ))}
              </div>
              <div className="row wrap-pagination">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <p className="page-link" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </p>
                    </li>
                    <li className="page-item">
                      <p className="page-link">1</p>
                    </li>
                    <li className="page-item">
                      <p className="page-link">2</p>
                    </li>
                    <li className="page-item">
                      <p className="page-link">3</p>
                    </li>
                    <li className="page-item">
                      <p className="page-link" aria-label="Next">
                        <span aria-hidden="true">»</span>
                        <span className="sr-only">Next</span>
                      </p>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShowAllProduct;
