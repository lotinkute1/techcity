import {
  equalTo,
  getDatabase,
  limitToLast,
  onValue,
  orderByChild,
  query,
  ref
} from "firebase/database";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import queryString from 'query-string'
import { useLocation, useNavigate, useParams } from "react-router-dom";
import categoryApi from "../../api/categoryApi";
import productApi from "../../api/productApi";
import ItemCard from "../../components/ItemCard/ItemCard";
import ProductSkeleton from "./components/ProductSkeleton";
import "./style.css";

ShowAllProduct.propTypes = {};

function ShowAllProduct(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  
  const [categoryList,setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [productListByCategoryId,setProductListByCategoryId] = useState([]);
  const [loading, setLoading] = useState(true);
  const searchValue = useSelector((state) => state.search);

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
    };
  }, [location.search]);
  // console.log('queryParams :');
  // console.log(queryParams);

  // const [filters,setFilters] = useState({
  //   ...
  // })
  
  const getProductBySearchValue = async () => {
    try {
      const { data } = await productApi.getProductFilter(queryString.stringify(queryParams));
      setProductList(data);
    } catch (error) {
      console.log("Failed to search product list: ", error);
    }
  };

  useEffect(() => {
    if (location.search) {
      getProductBySearchValue();
    } else {
      getAllProduct();
    }
  }, [location.search]);

  const getAllProduct = async () => {
    try {
      const response = await productApi.getAll();
      const {data} = response;
      setProductList(data);
    } catch (error) {
      console.log("Fail to get all product");
    }
  };
  const getProductsByCategoryId = () => {
      const array = productList.filter((product) => product.category_id == id);
      setProductListByCategoryId(array);
  };

  useEffect(() => {
    getProductsByCategoryId();
  }, [id,productList]);
  const getAllCategory = async () => {
    try {
      const response = await categoryApi.getAll();
      const {data} = response;
      setCategoryList(data);
    } catch (error) {
      console.log("Fail to get all category");
    }
  };

  //  get productList, categoryList
  useEffect(() => {
    // getAllProduct();
    getAllCategory();
    setLoading(false);
  }, []);

  const hanleFilterCategory = (e, categoryId) => {
    navigate(`/show-all-product/${categoryId}`);
  };

  // // get data when typing search
  // useEffect(() => {
  //   const searchValueLowerCase = searchValue?.toLowerCase();
  //   const objSearch = {
  //     filterType: 'name',
  //     filterVal: searchValueLowerCase
  //   };
  // }, [searchValue]);

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
                {!loading && id
                  ? productListByCategoryId.map((product, index) => (
                      <div key={index} className="col-sm-3 carousel-items">
                        <ItemCard
                          itemID={product.id}
                          productName={product.name}
                          productImage={product.img}
                          defaultPrice={product.price}
                        />
                      </div>
                    ))
                  : productList.map((product, index) => (
                      <div key={index} className="col-sm-3 carousel-items">
                        <ItemCard
                          itemID={product.id}
                          productName={product.name}
                          productImage={product.img}
                          defaultPrice={product.price}
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
