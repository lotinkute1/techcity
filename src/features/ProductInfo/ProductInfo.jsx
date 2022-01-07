import React, { useEffect, useRef, useState } from "react";
import NumberFormat from "react-number-format";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import GetProductsData from "../../api/GetProductsData";
import ItemsCarousel from "../../components/ItemsCarousel/ItemsCarousel";
import "../../assets/js/incre_decre_option.js";
import loadingImage from "../../assets/images/loading/Spinner-1s-200px.gif";
import GetCategoriesData from "../../api/GetCategoriesData";
import GetUsersData from "../../api/GetUsersData";
import { set } from "firebase/database";
import GetRaitingsData from "../../api/GetRaitingsData";
import Comment from "./components/Comment";
import { useDispatch } from "react-redux";
import { addToCart } from "../../components/ItemCard/itemsCardSlice";
import { toast, ToastContainer } from "react-toastify";
export default function ProductInfo() {
  const navigate= useNavigate();
  // nhan id san pham tu url
  const { id } = useParams();

  const [productNumber,setProductNumber] = useState(0);

  const productsData = GetProductsData("");

  const product = productsData.find((product) => product.id === id);

  const [productM, setProductM] = useState({
    product_img: {
      main_img: loadingImage,
      sub_img: loadingImage,
      sub_img2: loadingImage,
      sub_img3: loadingImage,
      sub_img4: loadingImage,
    },
  });

  const category = GetCategoriesData(productM.category_id);
  const user = GetUsersData(productM.user_id);
  const raitings = GetRaitingsData(productM.id);
  // const { category_name } = category[0] ?? { category_name: "" };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  const tempRef1 = useRef(null);
  const tempRef2 = useRef(null);
  useEffect(() => {
    setNav1(tempRef1.current);
    setNav2(tempRef2.current);
  }, []);

  useEffect(() => {
    if (product) {
      setProductM(product);
    }
  }, [product]);

  // scroll top after render
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // increment and decrement quantily option
  useEffect(() => {
    const increQuantilyBtnOp = document.querySelector(
      ".quantily-wrapper .btn-option:last-child"
    );
    const decreQuantilyBtnOp = document.querySelector(
      ".quantily-wrapper .btn-option:first-child"
    );
    const quantilyInputOp = document.querySelector(".quantily-options__number");
    if (increQuantilyBtnOp && decreQuantilyBtnOp && quantilyInputOp) {
      increQuantilyBtnOp.onclick = () => {
        let numberOption = Number(quantilyInputOp.value);
        if (numberOption < 999) {
          numberOption += 1;
          quantilyInputOp.value = numberOption;
        }
      };
      decreQuantilyBtnOp.onclick = () => {
        let numberOption = Number(quantilyInputOp.value);
        if (numberOption > 0 && numberOption <= 999) {
          numberOption -= 1;
          quantilyInputOp.value = numberOption;
        }
      };
      quantilyInputOp.oninput = (e) => {
        if (Number.isInteger(Number(e.target.value))) {
          console.log(Number(e.target.value));
          if (Number(e.target.value) < 999 && Number(e.target.value) >= 0) {
            quantilyInputOp.value = Number(e.target.value);
          } else quantilyInputOp.value = 999;
        } else quantilyInputOp.value = 0;
        // if(e.target.value>=999 || e.target.value<0){
        //     quantilyInputOp.value=0;
        // }else quantilyInputOp.value=e.target.value;
      };
    }
  }, []);

  useEffect(() => {
    // pagination active button
    const cmtPaginationBtn = document.querySelectorAll(".pagination li");
    for (let i = 0; i < cmtPaginationBtn.length; i++) {
      cmtPaginationBtn[i].onclick = (e) => {
        e.preventDefault();
        for (let j = 0; j < cmtPaginationBtn.length; j++) {
          if (cmtPaginationBtn[j])
            cmtPaginationBtn[j].classList.remove("active");
        }
        e.target.closest("li").classList.add("active");
      };
    }
  }, []);
  const renderComments = () => {
    return raitings.map((comment, index) => {
      return (
        <Comment
          key={index}
          content={comment.content}
          create_date={comment.create_date}
          starts={comment.starts}
          user_id={comment.user_id}
        />
      );
    });
  };
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    if(localStorage.getItem("userLogged")){

      dispatch(
        addToCart({
          itemID: productM.id,
          productName: productM.product_name,
          productImage: productM.product_img.main_img,
          defaultPrice: productM.default_price,
        })
      );
      toast.success("Thêm vào giỏ hàng thành công");
    }else{
      toast.error("Vui lòng đăng nhập");
    }
    
  };
  const buyNowHandler = () => {
    if(localStorage.getItem("userLogged")){

      dispatch(
        addToCart({
          itemID: productM.id,
          productName: productM.product_name,
          productImage: productM.product_img.main_img,
          defaultPrice: productM.default_price,
        })
      );
      navigate('/cart');
    }else{
      toast.error("Vui lòng đăng nhập");
    }

  };
  const incre_incre=(e)=>{
    if(e.target.name=='incre'){
      if(productNumber<999){

        setProductNumber((x)=>x+1)
      }
    }else{
      if(productNumber>0){
        setProductNumber((x)=>x-1)
      }
    }
  }

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
                <img src={productM.product_img.main_img} alt="" />
              </div>
              <div className="item-img-info carousel-cell">
                <img src={productM.product_img.sub_img} alt="" />
              </div>
              <div className="item-img-info carousel-cell">
                <img src={productM.product_img.sub_img2} alt="" />
              </div>
              <div className="item-img-info carousel-cell">
                <img src={productM.product_img.sub_img3} alt="" />
              </div>
              <div className="item-img-info carousel-cell">
                <img src={productM.product_img.sub_img4} alt="" />
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
                <img src={productM.product_img.main_img} alt="" />
              </div>
              <div className="item-img-info-mini carousel-cell">
                <img src={productM.product_img.sub_img} alt="" />
              </div>

              <div className="item-img-info-mini carousel-cell">
                <img src={productM.product_img.sub_img2} alt="" />
              </div>
              <div className="item-img-info-mini carousel-cell">
                <img src={productM.product_img.sub_img3} alt="" />
              </div>
              <div className="item-img-info-mini carousel-cell">
                <img src={productM.product_img.sub_img4} alt="" />
              </div>
            </Slider>
          </div>
        </div>
        {/* 60% */}
        <div className="product-info__right">
          <div className="product-info__title">
            <h1>{productM.product_name}</h1>
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
              24 <span>Đánh giá</span>
            </div>
            <div className="products-sold">
              71 <span>Đã mua</span>
            </div>
          </div>
          <div className="carousel-item__price">
            <NumberFormat
              value={productM.default_price}
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
              <img src={user[0]?.user_ava} alt="" />
            </a>
          </div>
          <div className="shop-info__info">
            <div className="shop-info__name">{user[0]?.name}</div>
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
              <div>{category[0]?.category_name || ""}</div>
            </div>
          </div>
          <div className="product-more-info__top__info">
            <div>Thương hiệu</div>
            <div>{productM.brand}</div>
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
            {productM.product_name}
            <br />
            MÔ TẢ SẢN PHẨM:
            <br />
            {productM.description}
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
        </div>
        <div className="comments__pagination">
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
        </div>
      </section>
      {/* sản phẩm liên quan */}

      <ItemsCarousel
        categoryID=""
        itemData={productsData}
        title="sản phẩm liên quan"
      />
      {/* banner quản cáo */}
      <section className="section ads">
        <div>
          <a
            title="ads"
            href="https://www.lg.com/vn/tro-giup/bao-hanh?fbclid=IwAR2d9nPyurT1Q3bhTler2Ln7ONkmkqVHR-_k6tNPTrBP23tynFJGqm4iIMU"
          >
            <img src="./assets/images/ads/ad1.jpg" alt="" />
          </a>
        </div>
      </section>
    </>
  );
}
