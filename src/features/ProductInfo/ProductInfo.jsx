import React from "react";

export default function ProductInfo() {
  return (
    <main id="main">
      <div className="scroll-top">
        <a href="#main">
          <i className="fas fa-chevron-circle-up" />
        </a>
      </div>
      <div className="scroll-call">
        <span>
          Tổng Đài CSKH
          <br />
          0784508270
        </span>
      </div>
      <div className="content">
        <section className="section product-info">
          {/* 40% */}
          <div className="product-info__left">
            <div className="product-info__left-wrapper">
              <div
                className="carousel carousel-main"
                data-flickity='{"pageDots": false ,"prevNextButtons": false}'
              >
                <div className="item-img-info carousel-cell">
                  <img
                    src="https://cf.shopee.vn/file/994228a247d6ede2b7c785449527ce2f"
                    alt=""
                  />
                </div>
                <div className="item-img-info carousel-cell">
                  <img
                    src="https://cf.shopee.vn/file/4c722e40a45534e124002892d31000c4"
                    alt=""
                  />
                </div>
                <div className="item-img-info carousel-cell">
                  <img
                    src="https://cf.shopee.vn/file/31b3e398725d2cffc93e5063ed06d3b2"
                    alt=""
                  />
                </div>
                <div className="item-img-info carousel-cell">
                  <img
                    src="https://cf.shopee.vn/file/b143bd9f05b6fa41dddd05d511f5d652"
                    alt=""
                  />
                </div>
                <div className="item-img-info carousel-cell">
                  <img
                    src="https://cf.shopee.vn/file/b22db0f2fdd9d326f8946aa01f354044"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="carousel carousel-nav"
                data-flickity='{ "asNavFor": ".carousel-main", "contain": true, "pageDots": false ,"groupCells": 3}'
              >
                <div className=" item-img-info-mini carousel-cell">
                  <img
                    src="https://cf.shopee.vn/file/994228a247d6ede2b7c785449527ce2f"
                    alt=""
                  />
                </div>
                <div className="item-img-info-mini carousel-cell">
                  <img
                    src="https://cf.shopee.vn/file/4c722e40a45534e124002892d31000c4"
                    alt=""
                  />
                </div>
                <div className="item-img-info-mini carousel-cell">
                  <img
                    src="https://cf.shopee.vn/file/31b3e398725d2cffc93e5063ed06d3b2"
                    alt=""
                  />
                </div>
                <div className="item-img-info-mini carousel-cell">
                  <img
                    src="https://cf.shopee.vn/file/b143bd9f05b6fa41dddd05d511f5d652"
                    alt=""
                  />
                </div>
                <div className="item-img-info-mini carousel-cell">
                  <img
                    src="https://cf.shopee.vn/file/b22db0f2fdd9d326f8946aa01f354044"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 60% */}
          <div className="product-info__right">
            <div className="product-info__title">
              <h1>
                Apple MacBook Pro (2020) M1 Chip, 13.3 inch, 8GB, 512GB SSD
              </h1>
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
              <h1>
                32.990.000 <span>₫</span>
              </h1>
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
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8ODg4AAAAICAjh4eF9fX0zMzNOTk7X19cqKiphYWGsrKwKCgr7+/vm5uZ0dHS8vLzu7u5DQ0OdnZ3Nzc1TU1OTk5O/v7+GhoZJSUl5eXlYWFi2trZmZmbx8fEmJiZubm45OTkeHh4YGBjIyMijo6Ourq6YmJiDg4OqYIa4AAAEDUlEQVR4nO3cWWOiMBQFYLmIomLdWxds1S76/3/hAC4VSpxOPc690vM985AjCTcJkVqNiIiIiIiIiIiIiIiIiIiIiIiIiIiIiOiXCTtBoN2GGxr3JPGi3Yyb6bdEIs/zX7UbciNhQ8RLSUO7KbexO+RLEja123ILz41jviThXLs1N1CXz4CevGs3B68uvneWMNRuD9xzLmAk2u3Ba5110UoOwyAXsIKdNCwEbGk3CK5RSNjXbhBavxCwehOaVtVH4bgQsHorp16+UlTvMVNLl0snvgy02wOXKxW+1LXbg9c5n3FXMWCyKjwbg9Xroon2adlbwadoZnHYuJBh5ergwUL8dHdtMdZuyM2s5HUYxM/azaDvCePRNAge4wsDrt4Jmpuk067b0/jOKsfgvSmf2nG35JqnbL9b/CiK9pfN3/57O3/qLY33WdnTAMtC68OdSG4Ct79sVPZTmDNuSH79sC8P0fZU4LudRjHeKaT9ncVuuyTffhIqs04y2Ab9pTguyTK2jA/Isbvx6Y3cc1+RXfShHeKSUWnn+0cy1Y7hFly+Pd+OaHbKCgqYRHzUjlJuiwqYRDRZGp9wAZPHjcHC+Ix4yBwDvlgsGU1gH11qhynTBwa0WS1yrwSvC2jzQfoOu4Wy085SDnYLZaIdpRysUvgWy0RqApvNmCz1aS1EBWxrR3H4gCW0ug2+BCWUlXYSF9SEzewL4QfQLfQ32klcULXC6GymhlsYitm3GT1UQqPVHrZwijztIE4bzKRUZtpBnEDFwubCN4NK2NMO4lT5GQ0soeFeCko41A7iBBqHhg98+6iJt9mKv678rG1R+Zk36p2T3dOmI9gmhsXXFSnYXqLV3eBaHbfhbfVpikto9f02qlzYHYk7XEKjj1Pky0Ob/2QbIF/h2zz3BdrH2EfsaKcpMwXeRE9G2nFKvCET2tzOAB41SSMaPKC4gt5ET2RqbXaD7aZZRmtLKWw39QzuD0OfplnCWDtSAW59cUxobSDWZuBnjb2KgTx86dl84f0KnLl5staOU6IDnbk9accpgzueaPXMAvAmmisVB7CRaPb7ZrhdRaPn92A10fDHv0CHo+RBO4jbIyKiuVVFTuv6iFY3FA8A/dTqpvDR1Yf2Zasd4W+uPPJt+LjCUfeqyVskd/A1gvCam2i31p+7Yn5q9C9PX/z4vb4stJv+Xc6z+5GffUXBFdD+U+akXRIx+zbEZjZptuTL9xTuLmDJwegk1Co+zjcH/d7Xv+Wb/b+MQ6fwZYxh8fOI8TqXUUy+cbroYSL7ypgOvXnZTCxcHbpr2n/bhtcTTmGQfSdi03N+3bLbn6/TS5rbe8yX6Q6s/lWLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIfq8/tzAurNL1lJsAAAAASUVORK5CYII=" alt="" />
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
                <div>shopee</div>
                <div>Computer &amp; Accessories</div>
                <div>Laptops</div>
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
              MacBook Pro (M1, 2020)
              <br />
              MÔ TẢ SẢN PHẨM
              <br />
              Macbook Pro 13 inch thay đổi ngoạn mục nhờ chip Apple M1, với sức
              mạnh xử lý tăng thêm đến 2.8x, tốc độ xử lý đồ họa nhanh hơn 5x.
              Và thời lượng pin lên đến 20 giờ – thời lượng pin lâu nhất trong
              các dòng máy tính Mac từ trước đến nay.
              <br />
              Để bạn có thể tiến xa trong công việc, dù đi bất kỳ nơi đâu.
              <br />
              Tính năng nổi bật
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
              <br />• Neural Engine 16 lõi cho công nghệ máy học hiện đại
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
                <img src="./assets/images/avatest.jfif" alt="" />
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
                <img src="./assets/images/avatest.jfif" alt=""  />
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
                <img src="./assets/images/avatest.jfif" alt=""  />
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
        <section className="section items">
          <div className="section-title">
            <h2>Sản phẩm liên quan</h2>
            <div>
              <a href="/#">
                xem tất cả <i className="fas fa-angle-double-right" />
              </a>
            </div>
          </div>
          <div
            className="main-carousel"
            data-flickity='{ "groupCells": true,"contain": true, "pageDots": false,"adaptiveHeight": true,"autoPlay": 3000 }'
          >
            <div className="carousel-cell">
              <div className="carousel-item">
                <a
                  href="./product_info.html"
                  alt=""
                  className="carousel-item__image"
                >
                  <img
                    src="https://philong.com.vn/media/product/250-26811-3.jpg"
                    alt=""
                  />
                </a>
                <div className="carousel-item__bot-wrapper">
                  <a
                    href="./product_info.html"
                    className="carousel-item__title"
                  >
                    <h3 className="text-wrap">
                      LAPTOP ASUS TUF GAMING FX516PM - HN002W
                    </h3>
                  </a>
                  <div className="carousel-item__raiting">
                    <div className="raiting-starts">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="carousel-item__price">
                    <span>
                      32.990.000 <span>₫</span>
                    </span>
                    <span>
                      <i className="fas fa-truck" />
                    </span>
                  </div>
                  <div className="carousel-item__add-to-cart">
                    <div className="btn btn-buy">Thêm vào giỏ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="carousel-item">
                <a
                  href="./product_info.html"
                  alt=""
                  className="carousel-item__image"
                >
                  <img
                    src="https://philong.com.vn/media/product/250-26811-3.jpg"
                    alt=""
                  />
                </a>
                <div className="carousel-item__bot-wrapper">
                  <a
                    href="./product_info.html"
                    className="carousel-item__title"
                  >
                    <h3 className="text-wrap">
                      LAPTOP ASUS TUF GAMING FX516PM - HN002W
                    </h3>
                  </a>
                  <div className="carousel-item__raiting">
                    <div className="raiting-starts">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="carousel-item__price">
                    <span>
                      32.990.000 <span>₫</span>
                    </span>
                    <span>
                      <i className="fas fa-truck" />
                    </span>
                  </div>
                  <div className="carousel-item__add-to-cart">
                    <div className="btn btn-buy">Thêm vào giỏ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="carousel-item">
                <a
                  href="./product_info.html"
                  alt=""
                  className="carousel-item__image"
                >
                  <img
                    src="https://philong.com.vn/media/product/250-26811-3.jpg"
                    alt=""
                  />
                </a>
                <div className="carousel-item__bot-wrapper">
                  <a
                    href="./product_info.html"
                    className="carousel-item__title"
                  >
                    <h3 className="text-wrap">
                      LAPTOP ASUS TUF GAMING FX516PM - HN002W
                    </h3>
                  </a>
                  <div className="carousel-item__raiting">
                    <div className="raiting-starts">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="carousel-item__price">
                    <span>
                      32.990.000 <span>₫</span>
                    </span>
                    <span>
                      <i className="fas fa-truck" />
                    </span>
                  </div>
                  <div className="carousel-item__add-to-cart">
                    <div className="btn btn-buy">Thêm vào giỏ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="carousel-item">
                <a
                  href="./product_info.html"
                  alt=""
                  className="carousel-item__image"
                >
                  <img
                    src="https://philong.com.vn/media/product/250-26811-3.jpg"
                    alt=""
                  />
                </a>
                <div className="carousel-item__bot-wrapper">
                  <a
                    href="./product_info.html"
                    className="carousel-item__title"
                  >
                    <h3 className="text-wrap">
                      LAPTOP ASUS TUF GAMING FX516PM - HN002W
                    </h3>
                  </a>
                  <div className="carousel-item__raiting">
                    <div className="raiting-starts">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="carousel-item__price">
                    <span>
                      32.990.000 <span>₫</span>
                    </span>
                    <span>
                      <i className="fas fa-truck" />
                    </span>
                  </div>
                  <div className="carousel-item__add-to-cart">
                    <div className="btn btn-buy">Thêm vào giỏ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="carousel-item">
                <a
                  href="./product_info.html"
                  alt=""
                  className="carousel-item__image"
                >
                  <img
                    src="https://philong.com.vn/media/product/250-26811-3.jpg"
                    alt=""
                  />
                </a>
                <div className="carousel-item__bot-wrapper">
                  <a
                    href="./product_info.html"
                    className="carousel-item__title"
                  >
                    <h3 className="text-wrap">
                      LAPTOP ASUS TUF GAMING FX516PM - HN002W
                    </h3>
                  </a>
                  <div className="carousel-item__raiting">
                    <div className="raiting-starts">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="carousel-item__price">
                    <span>
                      32.990.000 <span>₫</span>
                    </span>
                    <span>
                      <i className="fas fa-truck" />
                    </span>
                  </div>
                  <div className="carousel-item__add-to-cart">
                    <div className="btn btn-buy">Thêm vào giỏ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="carousel-item">
                <a
                  href="./product_info.html"
                  alt=""
                  className="carousel-item__image"
                >
                  <img
                    src="https://philong.com.vn/media/product/250-26811-3.jpg"
                    alt=""
                  />
                </a>
                <div className="carousel-item__bot-wrapper">
                  <a
                    href="./product_info.html"
                    className="carousel-item__title"
                  >
                    <h3 className="text-wrap">
                      LAPTOP ASUS TUF GAMING FX516PM - HN002W
                    </h3>
                  </a>
                  <div className="carousel-item__raiting">
                    <div className="raiting-starts">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="carousel-item__price">
                    <span>
                      32.990.000 <span>₫</span>
                    </span>
                    <span>
                      <i className="fas fa-truck" />
                    </span>
                  </div>
                  <div className="carousel-item__add-to-cart">
                    <div className="btn btn-buy">Thêm vào giỏ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="carousel-item">
                <a
                  href="./product_info.html"
                  alt=""
                  className="carousel-item__image"
                >
                  <img
                    src="https://philong.com.vn/media/product/250-26811-3.jpg"
                    alt=""
                  />
                </a>
                <div className="carousel-item__bot-wrapper">
                  <a
                    href="./product_info.html"
                    className="carousel-item__title"
                  >
                    <h3 className="text-wrap">
                      LAPTOP ASUS TUF GAMING FX516PM - HN002W
                    </h3>
                  </a>
                  <div className="carousel-item__raiting">
                    <div className="raiting-starts">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="carousel-item__price">
                    <span>
                      32.990.000 <span>₫</span>
                    </span>
                    <span>
                      <i className="fas fa-truck" />
                    </span>
                  </div>
                  <div className="carousel-item__add-to-cart">
                    <div className="btn btn-buy">Thêm vào giỏ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="carousel-item">
                <a
                  href="./product_info.html"
                  alt=""
                  className="carousel-item__image"
                >
                  <img
                    src="https://philong.com.vn/media/product/250-26811-3.jpg"
                    alt=""
                  />
                </a>
                <div className="carousel-item__bot-wrapper">
                  <a
                    href="./product_info.html"
                    className="carousel-item__title"
                  >
                    <h3 className="text-wrap">
                      LAPTOP ASUS TUF GAMING FX516PM - HN002W
                    </h3>
                  </a>
                  <div className="carousel-item__raiting">
                    <div className="raiting-starts">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="carousel-item__price">
                    <span>
                      32.990.000 <span>₫</span>
                    </span>
                    <span>
                      <i className="fas fa-truck" />
                    </span>
                  </div>
                  <div className="carousel-item__add-to-cart">
                    <div className="btn btn-buy">Thêm vào giỏ</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-cell">
              <div className="carousel-item">
                <a
                  href="./product_info.html"
                  alt=""
                  className="carousel-item__image"
                >
                  <img
                    src="https://philong.com.vn/media/product/250-26811-3.jpg"
                    alt=""
                  />
                </a>
                <div className="carousel-item__bot-wrapper">
                  <a
                    href="./product_info.html"
                    className="carousel-item__title"
                  >
                    <h3 className="text-wrap">
                      LAPTOP ASUS TUF GAMING FX516PM - HN002W
                    </h3>
                  </a>
                  <div className="carousel-item__raiting">
                    <div className="raiting-starts">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star-half-alt" />
                      <i className="far fa-star" />
                    </div>
                  </div>
                  <div className="carousel-item__price">
                    <span>
                      32.990.000 <span>₫</span>
                    </span>
                    <span>
                      <i className="fas fa-truck" />
                    </span>
                  </div>
                  <div className="carousel-item__add-to-cart">
                    <div className="btn btn-buy">Thêm vào giỏ</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* banner quản cáo */}
        <section className="section ad">
          <div>
            <a
              title="ads"
              href="https://www.lg.com/vn/tro-giup/bao-hanh?fbclid=IwAR2d9nPyurT1Q3bhTler2Ln7ONkmkqVHR-_k6tNPTrBP23tynFJGqm4iIMU"
            >
              <img src="./assets/images/ads/ad1.jpg" alt="" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}