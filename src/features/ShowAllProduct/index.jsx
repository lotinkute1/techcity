import {
  equalTo,
  getDatabase,
  limitToLast,
  onValue,
  orderByChild,
  query,
  ref,
} from "firebase/database";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import GetCategoriesData from "../../api/GetCategoriesData";
import GetProductsData from "../../api/GetProductsData";
import ItemCard from "../../components/ItemCard/ItemCard";
import ProductSkeleton from "./components/ProductSkeleton";
import "./style.css";

ShowAllProduct.propTypes = {};

function ShowAllProduct(props) {
  const navigate = useNavigate();
  const { id } = useParams();

  const products = GetProductsData();
  const categoryList = GetCategoriesData();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchValue = useSelector((state) => state.search);

  console.log(id);

  //  get productList
  useEffect(() => {
    if (products) {
      setProductList(products);
    }
    setLoading(false);
  }, [products]);

  // useEffect(() => {
  //   const db = getDatabase();
  //   const productFilteredRef = query(
  //     ref(db, "products"),
  //     orderByChild("category_id"),
  //     equalTo(id)
  //   );

  //   const temp = [];
  //   onValue(productFilteredRef, (snapshot) => {
  //     snapshot.forEach((item) => {
  //       temp.push(item.val());
  //     });
  //   });
  //   setProductList(temp);
  // }, [id]);

  // useEffect(() => {
  //   const db = getDatabase();
  //   const productFilteredRef = query(
  //     ref(db, "products"),
  //     orderByChild("category_id"),
  //     equalTo(id)
  //   );

  //   const temp = [];
  //   onValue(productFilteredRef, (snapshot) => {
  //     snapshot.forEach((item) => {
  //       temp.push(item.val());
  //     });
  //   });

  //   setProductList(temp);
  // }, [id]);

  const hanleFilterCategory = (e, categoryId) => {
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

    setProductList(temp);
    navigate(`/show-all-product/${categoryId}`);
  };

  // get data when typing search
  useEffect(() => {
    const searchValueLowerCase = searchValue?.toLowerCase();
    const db = getDatabase();
    const productFilteredRef = query(
      ref(db, "products"),
      orderByChild("product_name")
    );

    const temp = [];
    onValue(productFilteredRef, (snapshot) => {
      snapshot.forEach((item) => {
        const productName = item.val().product_name?.toLowerCase();
        if (
          productName
            ?.slice(0, searchValueLowerCase.length)
            .indexOf(searchValueLowerCase) !== -1
        ) {
          temp.push(item.val());
        }
      });
    });
    setProductList(temp);
  }, [searchValue]);

  const handlePagination = () => {
    const db = getDatabase();
    const productFilteredRef = query(ref(db, "products"), limitToLast(10));
    const temp = [];
    onValue(productFilteredRef, (snapshot) => {
      snapshot.forEach((item) => {
        temp.push(item.val());
      });
    });
    setProductList(temp);
  };

  return (
    <section className="section">
      <div className="show-all">
        <div className="container allproduct">
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
                        hanleFilterCategory(e, category.id);
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
                        productImage={product.product_img?.main_img}
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
