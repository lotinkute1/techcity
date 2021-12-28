import React, { Component } from 'react';
import '../profile.css'
class Procart extends Component {
    render() {
        return (
            <div className="main">
            <div className="app__container">
              <div className="grid">
                <div className="grid__row app__content">
                <div className="grid__column-2">
                    <div className="profile__user-info">
                      <img className="profile__user-img" src="https://lh3.googleusercontent.com/proxy/vRgO8jNfM1Vq8C9FX8wmSV2Ll0Akop_yGNBmt4AhO9b6e7_BYf-PK6aP3WMCeIqjwY5Td5gCAsN0oxhes9AnqfAYKSzjVvYm0FNgZ9rpSQ" alt="" />
                      <div className="profile__user-description">
                        <div className="profile__user-name">
                          Lê Hữu Đạt
                        </div>
                        <div className="profile__user-edit">
                          Sửa hồ sơ
                        </div>
                      </div>
                    </div>
                    <ul className="profile__sub-nav-list">
                      <li id="my-profile" className="profile__sub-nav-item">
                        <div className="profile__sub-nav-header">
                        <i className="fas fa-user profile__sub-nav-img"></i>
                          <div className="profile__sub-nav-name">Tài Khoản Của Tôi</div>
                        </div>
                        <ul className="profile__sub-nav-body">
                          <li className="profile__sub-nav-body-item "><a href="profile.html">Hồ Sơ</a></li>
                          <li className="profile__sub-nav-body-item"><a href="address.html">Địa Chỉ</a></li>
                          <li className="profile__sub-nav-body-item"><a href="password.html">Đổi Mật Khẩu</a></li>
                        </ul>
                      </li>
                      <li className="profile__sub-nav-item">
                        <div className="profile__sub-nav-header">
                        <i className="fas fa-history profile__sub-nav-img"></i>
                          <a href="cart.html" className="profile__sub-nav-name">Lịch Sử Mua Hàng</a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="grid__column-10">
                    <div className="profile__history-cart">
                      <div className="profile__history-cart-item">
                        <div className="history-cart-item-header">
                          <div className="history-cart-name">Tên Shop</div>
                          <button className="history-cart-view-shop-btn btn-primary">
                            <i className="far fa-store" />
                            Xem Shop</button>
                          <div className="history-cart-date-buy">
                            <div className="date-buy">Ngày đặt hàng:</div>
                            <div className="history-cart-date">14/11/2021</div>
                          </div>
                        </div>
                        <a href className="history-cart-item-body">
                          <div className="history-cart-img">
                            <img className="cart-img" src="https://go-korea.com/wp-content/uploads/2021/10/iphone-13-pro-max-silver-2.jpg" alt="" />
                          </div>
                          <div className="history-cart-info">
                            <div className="history-cart-info-name">Tên Sản Phẩm</div>
                            <div className="history-cart-info-des">Hàng nóng</div>
                            <div className="history-cart-info-quantily">x1</div>
                          </div>
                          <div className="history-cart-price">
                            <div className="history-cart-old-price">120000 đ</div>
                            <div className="history-cart-new-price">100000 đ</div>
                          </div>
                        </a>
                        <div className="history-cart-item-footer">
                          <div className="total-price">Tổng số tiền:</div>
                          <div className="history-cart-total-price">140000 đ</div>
                        </div>
                      </div>
                      <div className="profile__history-cart-item">
                        <div className="history-cart-item-header">
                          <div className="history-cart-name">Tên Shop</div>
                          <button className="history-cart-view-shop-btn btn-primary">
                            <i className="far fa-store" />
                            Xem Shop</button>
                          <div className="history-cart-date-buy">
                            <div className="date-buy">Ngày đặt hàng:</div>
                            <div className="history-cart-date">14/11/2021</div>
                          </div>
                        </div>
                        <a href className="history-cart-item-body">
                          <div className="history-cart-img">
                            <img className="cart-img" src="https://cdn.tgdd.vn/Products/Images/42/228744/iphone-12-pro-max-512gb-bac-4-org.jpg" alt="" />
                          </div>
                          <div className="history-cart-info">
                            <div className="history-cart-info-name">Tên Sản Phẩm</div>
                            <div className="history-cart-info-des">Hàng nóng</div>
                            <div className="history-cart-info-quantily">x1</div>
                          </div>
                          <div className="history-cart-price">
                            <div className="history-cart-old-price">120000 đ</div>
                            <div className="history-cart-new-price">100000 đ</div>
                          </div>
                        </a>
                        <div className="history-cart-item-footer">
                          <div className="total-price">Tổng số tiền:</div>
                          <div className="history-cart-total-price">140000 đ</div>
                        </div>
                      </div>
                      <div className="profile__history-cart-item">
                        <div className="history-cart-item-header">
                          <div className="history-cart-name">Tên Shop</div>
                          <button className="history-cart-view-shop-btn btn-primary">
                            <i className="far fa-store" />
                            Xem Shop</button>
                          <div className="history-cart-date-buy">
                            <div className="date-buy">Ngày đặt hàng:</div>
                            <div className="history-cart-date">14/11/2021</div>
                          </div>
                        </div>
                        <a href className="history-cart-item-body">
                          <div className="history-cart-img">
                            <img className="cart-img" src="https://cdn.tgdd.vn/Products/Images/42/229949/samsung-galaxy-z-flip-3-black-gc-org.jpg" alt="" />
                          </div>
                          <div className="history-cart-info">
                            <div className="history-cart-info-name">Tên Sản Phẩm</div>
                            <div className="history-cart-info-des">Hàng nóng</div>
                            <div className="history-cart-info-quantily">x1</div>
                          </div>
                          <div className="history-cart-price">
                            <div className="history-cart-old-price">120000 đ</div>
                            <div className="history-cart-new-price">100000 đ</div>
                          </div>
                        </a>
                        <div className="history-cart-item-footer">
                          <div className="total-price">Tổng số tiền:</div>
                          <div className="history-cart-total-price">140000 đ</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>  
            </div>
          </div>
          
        );
    }
}

export default Procart;