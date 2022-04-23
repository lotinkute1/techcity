import React, { useEffect, useMemo, useRef, useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import { toast, ToastContainer } from "react-toastify";
import GetCategoriesData from "../../api/GetCategoriesData";
import GetRaitingsData from "../../api/GetRaitingsData";
import GetUsersData from "../../api/GetUsersData";
import adsImage from "../../assets/images/ads/ad1.jpg";

import productApi from "../../api/productApi";
import userApi from "../../api/userApi";
import ratingApi from "../../api/ratingApi";
import categoryApi from "../../api/categoryApi";
import loadingImage from "../../assets/images/loading/Spinner-1s-200px.gif";
import "../../assets/js/incre_decre_option.js";
import { addToCart } from "../../components/ItemCard/itemsCardSlice";
import { setclearData } from "./productSlice";
import ItemsCarousel from "../../components/ItemsCarousel/ItemsCarousel";
import Comment from "./components/Comment";
import AdsBanner from "../../components/AdsBanner/AdsBanner";
import RaitingStars from "./components/RaitingStars";
import StorageKeys from "../../constants";

export default function ProductInfo(props) {
  const navigate = useNavigate();
  // nhan id san pham tu url
  const { id } = useParams();
  const [productList, setProductList] = useState([]);
  const [product, setProduct] = useState({
    img: loadingImage,
    img1: loadingImage,
    img2: loadingImage,
    img3: loadingImage,
    img4: loadingImage,
  });
  // const [productNumber, setProductNumber] = useState(0);
  const [category, setCategory] = useState(null);
  const [supplier, setSupplier] = useState({
    ava: loadingImage,
  });

  const [stars, setStars] = useState(0);
  const [ratingOfProduct, setRatingOfProduct] = useState([]);
  const countRatingOfProduct = useMemo(
    () => ratingOfProduct.length,
    [ratingOfProduct]
  );
  const [commentVal, setCommentVal] = useState("");

  // console.log("countRatingOfProduct: ", countRatingOfProduct);

  // const [productList, setProductList] = useState([]);
  // const [product,setProduct]= useState(null);

  // const product = productList.find((product) => product.id === id);

  // const getAllProduct = async () => {
  //   try {
  //     const response = await productApi.getAll();
  //     const {data} = response;
  //     setProductList(data);
  //   } catch (error) {
  //     console.log("Fail to get all product");
  //   }
  // };
  // useEffect(()=>{
  //   getAllProduct();
  // },[])
  // useEffect(()=>{
  //    const productSelected = productList.find((product)=> product.id === id);
  //    setProduct(productSelected)
  // },[id])
  // console.log(category);
  const getAllProduct = async () => {
    try {
      const response = await productApi.getAll();
      const { data } = response;
      let currentPorduct = data.find((product) => product.id == id);
      setProductList(data);
      setProduct(currentPorduct);
      getCategory(currentPorduct.category_id);
      getSupplier(currentPorduct.user_id);
    } catch (error) {
      console.log("Fail to get all product");
      console.log(error);
    }
  };
  // const getProduct = async () => {
  //   try {
  //     const response = await productApi.getById(id);
  //     const { data } = response;
  //     setProduct(data);
  //   } catch (err) {
  //     console.log("Fail to get product by id");
  //   }
  // };
  const getCategory = async (id) => {
    try {
      const response = await categoryApi.getById(id);
      const { data } = response;
      setCategory(data);
    } catch (err) {
      console.log("Fail to get product by id");
    }
  };
  const getSupplier = async (id) => {
    try {
      const response = await userApi.getUserById(id);
      const { data } = response;
      setSupplier(data);
    } catch (err) {
      console.log("Fail to get api user by id");
    }
  };
  const getRaitingsByProductID = async () => {
    try {
      const response = await ratingApi.getRatingById(id);
      const { data } = response;
      setRatingOfProduct(data);
    } catch (err) {
      console.log("Fail to get api ratings by id");
    }
  };

  useEffect(() => {
    // getProduct();
    getAllProduct();
    getRaitingsByProductID();
  }, [id]);
  const startChangeHandler = (starts) => {
    // console.log(starts);
    setStars(starts);
  };
  // useEffect(() => {
  //   if (product.category_id) getCategory();
  //   if (product.user_id) getSupplier();
  // }, [product]);

  // useEffect(()=>{
  //   if(product.id && ratings && ratings.length > 0){
  //     getRatingsByProductId();
  //   }
  // },[product, ratings])

  // const { category_name } = category[0] ?? { category_name: "" };

  // product images
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const tempRef1 = useRef(null);
  const tempRef2 = useRef(null);
  useEffect(() => {
    setNav1(tempRef1.current);
    setNav2(tempRef2.current);
  }, []);

  // scroll top and delete data after render
  useEffect(() => {
    clearData();
    window.scrollTo(0, 0);
  }, [id]);

  const clearData = () => {
    setProduct({
      img: loadingImage,
      img1: loadingImage,
      img2: loadingImage,
      img3: loadingImage,
      img4: loadingImage,
    });
    setSupplier({ ava: loadingImage });
    setRatingOfProduct(0);
  };
  // increment and decrement quantily option
  // useEffect(() => {
  //   const increQuantilyBtnOp = document.querySelector(
  //     ".quantily-wrapper .btn-option:last-child"
  //   );
  //   const decreQuantilyBtnOp = document.querySelector(
  //     ".quantily-wrapper .btn-option:first-child"
  //   );
  //   const quantilyInputOp = document.querySelector(".quantily-options__number");
  //   if (increQuantilyBtnOp && decreQuantilyBtnOp && quantilyInputOp) {
  //     increQuantilyBtnOp.onclick = () => {
  //       let numberOption = Number(quantilyInputOp.value);
  //       if (numberOption < 999) {
  //         numberOption += 1;
  //         quantilyInputOp.value = numberOption;
  //       }
  //     };
  //     decreQuantilyBtnOp.onclick = () => {
  //       let numberOption = Number(quantilyInputOp.value);
  //       if (numberOption > 0 && numberOption <= 999) {
  //         numberOption -= 1;
  //         quantilyInputOp.value = numberOption;
  //       }
  //     };
  //     quantilyInputOp.oninput = (e) => {
  //       if (Number.isInteger(Number(e.target.value))) {
  //         console.log(Number(e.target.value));
  //         if (Number(e.target.value) < 999 && Number(e.target.value) >= 0) {
  //           quantilyInputOp.value = Number(e.target.value);
  //         } else quantilyInputOp.value = 999;
  //       } else quantilyInputOp.value = 0;
  //       // if(e.target.value>=999 || e.target.value<0){
  //       //     quantilyInputOp.value=0;
  //       // }else quantilyInputOp.value=e.target.value;
  //     };
  //   }
  // }, []);

  // pagination active button
  // useEffect(() => {
  //   const cmtPaginationBtn = document.querySelectorAll(".pagination li");
  //   for (let i = 0; i < cmtPaginationBtn.length; i++) {
  //     cmtPaginationBtn[i].onclick = (e) => {
  //       e.preventDefault();
  //       for (let j = 0; j < cmtPaginationBtn.length; j++) {
  //         if (cmtPaginationBtn[j])
  //           cmtPaginationBtn[j].classList.remove("active");
  //       }
  //       e.target.closest("li").classList.add("active");
  //     };
  //   }
  // }, []);
  const renderComments = () => {
    if (ratingOfProduct && ratingOfProduct.length > 0) {
      return ratingOfProduct.map((comment, index) => {
        // console.log(comment.raiting_stars);
        return (
          <Comment
            key={index}
            content={comment.comment_content}
            create_date={comment.created_at}
            starts={comment.raiting_stars}
            user_id={comment.user_id}
            currentUser={comment?.currentUser}
          />
        );
      });
    }
  };
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    if (localStorage.getItem("userLogged")) {
      dispatch(
        addToCart({
          itemID: product.id,
          productName: product.name,
          productImage: product.img,
          defaultPrice: product.price,
        })
      );
      toast.success("Thêm vào giỏ hàng thành công");
    } else {
      toast.error("Vui lòng đăng nhập");
    }
  };
  const buyNowHandler = () => {
    if (localStorage.getItem("userLogged")) {
      dispatch(
        addToCart({
          itemID: product.id,
          productName: product.name,
          productImage: product.img,
          defaultPrice: product.price,
        })
      );
      navigate("/cart");
    } else {
      toast.error("Vui lòng đăng nhập");
    }
  };
  // const incre_incre = (e) => {
  //   if (e.target.name == "incre") {
  //     if (productNumber < 999) {
  //       setProductNumber((x) => x + 1);
  //     }
  //   } else {
  //     if (productNumber > 0) {
  //       setProductNumber((x) => x - 1);
  //     }
  //   }
  // };
  useEffect(() => {
    const localStorageSetHandler = function (e) {
      setTimeout(() => {
        setCurrentUser(JSON.parse(localStorage.getItem(StorageKeys.USER)));
      }, 1000);
    };
    document.addEventListener("itemInserted", localStorageSetHandler);
  }, []);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem(StorageKeys.USER))
  );
  const commentHandlerBtn = async (e) => {
    if (!currentUser) {
      toast.error("Vui lòng đăng nhập");
      return;
    }
    // console.log(ratingOfProduct );
    // console.log(commentVal);
    const currentComment = {
      comment_content: commentVal,
      product_id: id,
      raiting_stars: stars,
      user_id: currentUser.id,
      currentUser: currentUser,
    };
    // console.log(currentComment);
    try {
      await ratingApi.addRating(currentComment);
    } catch (err) {
      console.log(err);
    }
    // console.log(currentComment);
    setRatingOfProduct((prev) => [...prev, currentComment]);
    setCommentVal("");
    setStars(0);
  };

  return (
    <>
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
      <section className="section product-info">
        {/* 40% */}
        <div className="product-info__left">
          <div className="product-info__left-wrapper">
            {/* main product info slide */}
            <Slider arrows={false} asNavFor={nav2} ref={tempRef1}>
              <div className="item-img-info carousel-cell">
                <img src={product.img} alt="" />
              </div>
              <div className="item-img-info carousel-cell">
                <img src={product.img1} alt="" />
              </div>
              <div className="item-img-info carousel-cell">
                <img src={product.img2} alt="" />
              </div>
              <div className="item-img-info carousel-cell">
                <img src={product.img3} alt="" />
              </div>
              <div className="item-img-info carousel-cell">
                <img src={product.img4} alt="" />
              </div>
            </Slider>

            {/* sub product info slide */}
            <Slider
              asNavFor={nav1}
              ref={tempRef2}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div className=" item-img-info-mini carousel-cell">
                <img src={product.img} alt="" />
              </div>
              <div className="item-img-info-mini carousel-cell">
                <img src={product.img1} alt="" />
              </div>

              <div className="item-img-info-mini carousel-cell">
                <img src={product.img2} alt="" />
              </div>
              <div className="item-img-info-mini carousel-cell">
                <img src={product.img3} alt="" />
              </div>
              <div className="item-img-info-mini carousel-cell">
                <img src={product.img4} alt="" />
              </div>
            </Slider>
          </div>
        </div>
        {/* 60% */}
        <div className="product-info__right">
          <div className="product-info__title">
            <h1>{product.name}</h1>
          </div>
          <div className="product-info__rating">
            <div className="raiting-starts">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
              <i className="far fa-star" />
            </div>
            <div className="raiting-count">
              {countRatingOfProduct} <span>Đánh giá</span>
            </div>
            <div className="products-sold">
              71 <span>Đã mua</span>
            </div>
          </div>
          <div className="carousel-item__price">
            <NumberFormat
              value={product.price}
              className=""
              displayType={"text"}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"₫"}
              renderText={(value, props) => <h1 {...props}>{value}</h1>}
            />
            <span>
              <i className="fas fa-truck" />
            </span>
          </div>
          <div className="product-info__product-options">
            {/* <div className="color-options">
              <div>Color</div>
              <div className="color-wrapper">
                <input
                  type="button"
                  defaultValue="Silver"
                  className="btn btn-option"
                />
                <input
                  type="button"
                  defaultValue="black"
                  className="btn btn-option"
                />
              </div>
            </div> */}

            {/* <div className="quantily-options">
              <div>Số lượng</div>
              <div className="quantily-wrapper">
                <input
                  type="button"
                  defaultValue="-"
                  name="decre"
                  className="btn btn-option"
                  onClick={(e) =>incre_incre(e)}
                />
                <input
                  type="text"
                  defaultValue={productNumber}
                  className="quantily-options__number"
                  // placeholder={0}
                />
                <input
                  type="button"
                  defaultValue="+"
                  name="incre"
                  className="btn btn-option"
                  onClick={(e) =>incre_incre(e)}
                />
              </div>
            </div> */}
          </div>
          <div className="product-info__buy-or-addtocart">
            <input
              onClick={() => addToCartHandler()}
              type="button"
              defaultValue="Thêm vào giỏ hàng"
              className="btn btn-buy"
            />
            <input
              onClick={() => buyNowHandler()}
              type="button"
              defaultValue="Mua ngay"
              className="btn btn-buy"
            />
          </div>
        </div>
      </section>
      {/* thông tin shop */}
      <section className="section shop-info">
        <div className="shop-info__left-content">
          <div className="shop-info__ava">
            <a href="/#">
              <img src={supplier?.ava} alt="" />
            </a>
          </div>
          <div className="shop-info__info">
            <div className="shop-info__name">{supplier?.name}</div>
            <div>
              <input
                type="button"
                defaultValue="Chat ngay"
                className="btn btn-contract"
              />
              <input
                type="button"
                defaultValue="Xem shope"
                className="btn btn-contract"
              />
            </div>
          </div>
        </div>
        <div className="shop-info__right-content">
          <div className="shop-info__raiting">
            <span>Đánh giá</span> 22.000
          </div>
          <div className="shop-info__join-date">
            3 <span>Năm trước</span>{" "}
          </div>
          <div className="shop-info__products">
            173 <span>Sản phẩm</span>
          </div>
          <div className="shop-info__followers">
            333 <span>Người theo dõi</span>
          </div>
        </div>
      </section>
      <section className="section product-more-info">
        <div className="product-more-info__top">
          <h2 className="product-more-info__top__title">chi tiết sản phẩm</h2>
          <div className="product-more-info__top__category">
            <div className="product-more-info__top__category__title">
              Danh Mục
            </div>
            <div className="product-more-info__top__category__wrapper">
              <div>{category?.category_name || ""}</div>
            </div>
          </div>
          <div className="product-more-info__top__info">
            <div>Thương hiệu</div>
            <div>{product.brand}</div>
          </div>
          <div className="product-more-info__top__info">
            <div>Hạn bảo hành</div>
            <div>12 tháng</div>
          </div>
          <div className="product-more-info__top__info">
            <div>Loại bảo hành</div>
            <div>bảo hành nhà sản xuất</div>
          </div>
        </div>
        <div className="product-more-info__bottom">
          <h2 className="product-more-info__bottom__title">mô tả sản phẩm</h2>
          <div className="product-more-info__bottom__content">
            {product.name}
            <br />
            MÔ TẢ SẢN PHẨM:
            <br />
            {product.description}
            <br />
            Thiết kế vô cùng tinh xảo.
            <br />
            <br />
            Để bạn có thể tiến xa trong công việc, dù đi bất kỳ nơi đâu.
            <br />
          </div>
        </div>
      </section>
      {/* comments */}
      <section className="section comments">
        <div className="comments__title">Bình luận</div>
        <div className="comments__wrapper">
          {/* comment */}
          {renderComments()}
          <div className="comments__area">
            <textarea
              className="comments__input"
              onChange={(e) => setCommentVal(e.target.value)}
              name=""
              id=""
              cols="30"
              rows="5"
              value={commentVal}
            ></textarea>
            <div className="comments__controls">
              <button
                onClick={(e) => commentHandlerBtn(e)}
                className="btn btn-cmt"
              >
                gửi
              </button>
              <RaitingStars stars={stars} startChange={startChangeHandler} />
            </div>
          </div>
        </div>
        {/* <div className="comments__pagination">
          <ul className="pagination">
            <li>
              <a href="/#">1</a>
            </li>
            <li>
              <a href="/#">2</a>
            </li>
            <li>
              <a href="/#">3</a>
            </li>
            <li>
              <a href="/#">4</a>
            </li>
          </ul>
        </div> */}
      </section>
      {/* sản phẩm liên quan */}

      <ItemsCarousel
        categoryID={product.category_id}
        itemData={productList}
        title="sản phẩm liên quan"
      />
      {/* banner quản cáo */}
      <AdsBanner
        adsImg={adsImage}
        adsHref="https://www.lg.com/vn/tro-giup/bao-hanh?fbclid=IwAR2d9nPyurT1Q3bhTler2Ln7ONkmkqVHR-_k6tNPTrBP23tynFJGqm4iIMU"
      />
      {/* <section className="section ads">
        <div>
          <a
            title="ads"
            href="https://www.lg.com/vn/tro-giup/bao-hanh?fbclid=IwAR2d9nPyurT1Q3bhTler2Ln7ONkmkqVHR-_k6tNPTrBP23tynFJGqm4iIMU"
          >
            <img src="./assets/images/ads/ad1.7680967e.jpg" alt="" />
          </a>
        </div>
      </section> */}
    </>
  );
}
