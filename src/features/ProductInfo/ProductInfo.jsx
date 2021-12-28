import React, { useEffect, useRef, useState } from "react";
import NumberFormat from "react-number-format";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import GetProductsDatatData from "../../api/GetProductsData";
import ItemsCarousel from "../../components/ItemsCarousel/ItemsCarousel";
import "../../assets/js/incre_decre_option.js";
import loadingImage from "../../assets/images/loading/Spinner-1s-200px.gif";
import GetCategoriesData from "../../api/GetCategoriesData";
import { set } from "firebase/database";
export default function ProductInfo() {
  // nhan id san pham tu url
  const { id } = useParams();

  const productsData = GetProductsDatatData("");

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
  const { category_name } = category[0] ?? { category_name: "" };

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
  return (
    <>
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
            <div className="color-options">
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
            </div>
            <div className="quantily-options">
              <div>Số lượng</div>
              <div className="quantily-wrapper">
                <input
                  type="button"
                  defaultValue="-"
                  name="decre"
                  className="btn btn-option"
                />
                <input
                  type="text"
                  defaultValue={0}
                  className="quantily-options__number"
                  placeholder={0}
                />
                <input
                  type="button"
                  defaultValue="+"
                  name="incre"
                  className="btn btn-option"
                />
              </div>
            </div>
          </div>
          <div className="product-info__buy-or-addtocart">
            <input
              type="button"
              defaultValue="Thêm vào giỏ hàng"
              className="btn btn-buy"
            />
            <input
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
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8ODg4AAAAICAjh4eF9fX0zMzNOTk7X19cqKiphYWGsrKwKCgr7+/vm5uZ0dHS8vLzu7u5DQ0OdnZ3Nzc1TU1OTk5O/v7+GhoZJSUl5eXlYWFi2trZmZmbx8fEmJiZubm45OTkeHh4YGBjIyMijo6Ourq6YmJiDg4OqYIa4AAAEDUlEQVR4nO3cWWOiMBQFYLmIomLdWxds1S76/3/hAC4VSpxOPc690vM985AjCTcJkVqNiIiIiIiIiIiIiIiIiIiIiIiIiIiIiOiXCTtBoN2GGxr3JPGi3Yyb6bdEIs/zX7UbciNhQ8RLSUO7KbexO+RLEja123ILz41jviThXLs1N1CXz4CevGs3B68uvneWMNRuD9xzLmAk2u3Ba5110UoOwyAXsIKdNCwEbGk3CK5RSNjXbhBavxCwehOaVtVH4bgQsHorp16+UlTvMVNLl0snvgy02wOXKxW+1LXbg9c5n3FXMWCyKjwbg9Xroon2adlbwadoZnHYuJBh5ergwUL8dHdtMdZuyM2s5HUYxM/azaDvCePRNAge4wsDrt4Jmpuk067b0/jOKsfgvSmf2nG35JqnbL9b/CiK9pfN3/57O3/qLY33WdnTAMtC68OdSG4Ct79sVPZTmDNuSH79sC8P0fZU4LudRjHeKaT9ncVuuyTffhIqs04y2Ab9pTguyTK2jA/Isbvx6Y3cc1+RXfShHeKSUWnn+0cy1Y7hFly+Pd+OaHbKCgqYRHzUjlJuiwqYRDRZGp9wAZPHjcHC+Ix4yBwDvlgsGU1gH11qhynTBwa0WS1yrwSvC2jzQfoOu4Wy085SDnYLZaIdpRysUvgWy0RqApvNmCz1aS1EBWxrR3H4gCW0ug2+BCWUlXYSF9SEzewL4QfQLfQ32klcULXC6GymhlsYitm3GT1UQqPVHrZwijztIE4bzKRUZtpBnEDFwubCN4NK2NMO4lT5GQ0soeFeCko41A7iBBqHhg98+6iJt9mKv678rG1R+Zk36p2T3dOmI9gmhsXXFSnYXqLV3eBaHbfhbfVpikto9f02qlzYHYk7XEKjj1Pky0Ob/2QbIF/h2zz3BdrH2EfsaKcpMwXeRE9G2nFKvCET2tzOAB41SSMaPKC4gt5ET2RqbXaD7aZZRmtLKWw39QzuD0OfplnCWDtSAW59cUxobSDWZuBnjb2KgTx86dl84f0KnLl5staOU6IDnbk9accpgzueaPXMAvAmmisVB7CRaPb7ZrhdRaPn92A10fDHv0CHo+RBO4jbIyKiuVVFTuv6iFY3FA8A/dTqpvDR1Yf2Zasd4W+uPPJt+LjCUfeqyVskd/A1gvCam2i31p+7Yn5q9C9PX/z4vb4stJv+Xc6z+5GffUXBFdD+U+akXRIx+zbEZjZptuTL9xTuLmDJwegk1Co+zjcH/d7Xv+Wb/b+MQ6fwZYxh8fOI8TqXUUy+cbroYSL7ypgOvXnZTCxcHbpr2n/bhtcTTmGQfSdi03N+3bLbn6/TS5rbe8yX6Q6s/lWLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIfq8/tzAurNL1lJsAAAAASUVORK5CYII="
                alt=""
              />
            </a>
          </div>
          <div className="shop-info__info">
            <div className="shop-info__name">apple_flagship_store</div>
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
              <div>{category_name}</div>
            </div>
          </div>
          <div className="product-more-info__top__info">
            <div>Thương hiệu</div>
            <div>Apple</div>
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
            Để bạn có thể tiến xa trong công việc, dù đi bất kỳ nơi đâu.
            <br />
            {/* Tính năng nổi bật
              <br />
              • Chip M1 do Apple thiết kế tạo ra một cú nhảy vọt về hiệu năng
              máy học, CPU và GPU
              <br />
              • Làm được nhiều việc hơn với thời lượng pin lên đến 20 giờ, thời
              lượng pin lâu nhất trong các dòng máy tính Mac từ trước đến nay.
              <br />
              • CPU 8 lõi cho hiệu năng nhanh hơn đến 2.8x, xử lý các luồng công
              việc nhanh hơn bao giờ hết1
              <br />
              • GPU 8 lõi với tốc độ xử lý đồ họa nhanh gấp 5x cho các ứng dụng
              và game có đồ họa khủng1
              <br />• Neural Engine 16 lõi cho công nghệ máy học hiện đại */}
          </div>
        </div>
      </section>
      {/* comments */}
      <section className="section comments">
        <div className="comments__title">Bình luận</div>
        <div className="comments__wrapper">
          {/* comment */}
          <div className="comments__comment">
            <div className="comment__ava">
              <img
                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-1/p320x320/184357069_1631277223738759_263572131023011701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9-dgjOIhmfkAX-dYycP&tn=lFI0VGOfIpxrWGC-&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-nRt3IjQsd19nOU0agm0JIL5vl-C7e2mOotrAQXPySEQ&oe=61EC2E82"
                alt=""
              />
            </div>
            <div className="comment__main">
              <div className="comment__name">Huydeptrai1</div>
              <div className="raiting-starts">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <i className="far fa-star" />
              </div>
              <div className="comment__content">
                hàng dùng ok, chất lượng tốt, chơi pikachu mượt nhưng có một
                điểm trừ là hệ điều hành lại là MacOS tôi thích Window hơn -.-
              </div>
              <div className="comment__time">12-12-2021 10:39</div>
              <div className="comment__actions">
                <div className="btn btn-like">
                  <i className="fas fa-thumbs-up" />
                </div>
                <div className="comment__actions__like-count">0</div>
              </div>
            </div>
          </div>
          {/* comment */}
          <div className="comments__comment">
            <div className="comment__ava">
              <img
                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-1/p320x320/184357069_1631277223738759_263572131023011701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9-dgjOIhmfkAX-dYycP&tn=lFI0VGOfIpxrWGC-&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-nRt3IjQsd19nOU0agm0JIL5vl-C7e2mOotrAQXPySEQ&oe=61EC2E82"
                alt=""
              />
            </div>
            <div className="comment__main">
              <div className="comment__name">Huydeptrai2</div>
              <div className="raiting-starts">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <i className="far fa-star" />
              </div>
              <div className="comment__content">
                hàng dùng ok, chất lượng tốt, chơi pikachu mượt nhưng có một
                điểm trừ là hệ điều hành lại là MacOS tôi thích Window hơn -.-
              </div>
              <div className="comment__time">12-12-2021 10:39</div>
              <div className="comment__actions">
                <div className="btn btn-like">
                  <i className="fas fa-thumbs-up" />
                </div>
                <div className="comment__actions__like-count">0</div>
              </div>
            </div>
          </div>
          {/* comment */}
          <div className="comments__comment">
            <div className="comment__ava">
              <img
                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-1/p320x320/184357069_1631277223738759_263572131023011701_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=9-dgjOIhmfkAX-dYycP&tn=lFI0VGOfIpxrWGC-&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-nRt3IjQsd19nOU0agm0JIL5vl-C7e2mOotrAQXPySEQ&oe=61EC2E82"
                alt=""
              />
            </div>
            <div className="comment__main">
              <div className="comment__name">Huydeptrai3</div>
              <div className="raiting-starts">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
                <i className="far fa-star" />
              </div>
              <div className="comment__content">
                hàng dùng ok, chất lượng tốt, chơi pikachu mượt nhưng có một
                điểm trừ là hệ điều hành lại là MacOS tôi thích Window hơn -.-
              </div>
              <div className="comment__time">12-12-2021 10:39</div>
              <div className="comment__actions">
                <div className="btn btn-like">
                  <i className="fas fa-thumbs-up" />
                </div>
                <div className="comment__actions__like-count">0</div>
              </div>
            </div>
          </div>
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
