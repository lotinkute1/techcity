import React, { Component } from 'react';
import '../profile.css'
class Password extends Component {
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
                    <div className="profile__content profile__content-active">
                      <div className="profile__content-header">
                        <h1 className="profile__content-header-title">Mật khẩu của tôi</h1>
                        <div className="profile__content-header-des">Để bảo mật tài khoản,
                          vui lòng không chia sẻ mật khẩu cho người khác</div>
                      </div>
                      <div className="profile__content-password-body">
                        <div className="password-body-item">
                          <div className="password-body-left">
                            <label>Mật khẩu hiện tại</label>
                          </div>
                          <div className="password-body-right">
                            <div className="input__wrapper">
                              <input type="password" className="current-password" />
                            </div>
                            <button className="forgot-password">Quên mật khẩu</button>
                          </div>
                        </div>
                        <div className="password-body-item">
                          <div className="password-body-left">
                            <label>Mật khẩu Mới</label>
                          </div>
                          <div className="password-body-right">
                            <div className="input__wrapper">
                              <input type="password" className="current-password" />
                            </div>
                          </div>
                        </div>
                        <div className="password-body-item">
                          <div className="password-body-left">
                            <label>Xác Nhận Mật Khẩu Mới</label>
                          </div>
                          <div className="password-body-right">
                            <div className="input__wrapper">
                              <input type="password" className="current-password" />
                            </div>
                          </div>
                        </div>
                        <div className="password-body-item">
                          <div className="password-body-left">
                          </div>
                          <div className="password-body-right">
                            <button className="password-btn-change btn btn--primary">Thay Đổi</button>
                          </div>
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

export default Password;