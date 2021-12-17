import React from "react";
import slide1 from "../../assets/images/slides/slide1.webp";
import slide2 from "../../assets/images/slides/slide2.webp";
import slide3 from "../../assets/images/slides/slide3.webp";
import slide4 from "../../assets/images/slides/slide4.webp";
export default function Main() {
    
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
        <section className="section banner">
          <div className="slides">
            <div className="slides__leftBtn">
              <i className="fas fa-chevron-left" />
            </div>
            <div className="slides__rightBtn">
              <i className="fas fa-chevron-right" />
            </div>
            <div className="slides__slide active">
              <img
                src={slide1}
                alt=""
                className="slide-pic"
              />
            </div>
            <div className="slides__slide ">
              <img
                src={slide2}
                alt=""
                className="slide-pic"
              />
            </div>
            <div className="slides__slide ">
              <img
                src={slide3}
                alt=""
                className="slide-pic"
              />
            </div>
            <div className="slides__slide ">
              <img
                src={slide4}
                alt=""
                className="slide-pic"
              />
            </div>
            <div className="dots">
              <span className="active" />
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>
        <section className="section items">
          <div className="section-title">
            <h2>Sản phẩm nổi bật</h2>
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
        <section className="section items">
          <div className="section-title">
            <h2>Điện thoại</h2>
            <div>
              <a href ="/#">Điện thoại theo hãng </a>
              <a href ="/#">Điện thoại chơi game </a>
              <a href ="/#">Phụ kiện điện thoại </a>
              <a href ="/#">
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
        <section className="section items">
          <div className="section-title">
            <h2>Máy tính sách tay</h2>
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
        <section className="section items">
          <div className="section-title">
            <h2>loa, tai nghe, audio</h2>
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
      </div>
    </main>
  );
}
