import React, { Component } from 'react';
import '../profile.css'
class Address extends Component {
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
                      <div className="profile__content-address-header">
                        <h1 className="address-header-title">Địa chỉ của tôi</h1>
                        <button className="address__btn-add btn btn--primary">
                          <i className="fal fa-plus" style={{marginRight: '5px'}} />
                          Thêm địa chỉ mới
                        </button>
                      </div>
                      <div className="profile__content-address-body">
                        <div className="address-body-box">
                          <div className="address-body-left">
                            <div className="address-body-item">
                              <div className="address-body-item-left">
                                <label>Họ Và Tên</label>
                              </div>
                              <div className="address-body-item-right">
                                <div className="address-body-name">Lê Hữu Đạt</div>
                              </div>
                            </div>
                            <div className="address-body-item">
                              <div className="address-body-item-left">
                                <label>Số Điện Thoại</label>
                              </div>
                              <div className="address-body-item-right">
                                <div className="address-body-add">0332794082</div>
                              </div>
                            </div>
                            <div className="address-body-item">
                              <div className="address-body-item-left">
                                <label>Địa Chỉ</label>
                              </div>
                              <div className="address-body-item-right">
                                <div className="address-body-add">
                                  K236/40 Trần Cao Vân
                                  <br />
                                  Phường Tam Thuận
                                  <br />
                                  Quận Thanh Khê
                                  <br />
                                  Đà Nẵng
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="address-body-right">
                            <button className="address_btn-edit">Sửa</button>
                            <button className="address_btn-remove">Xóa</button>
                          </div>
                        </div>
                        <div className="address-body-box">
                          <div className="address-body-left">
                            <div className="address-body-item">
                              <div className="address-body-item-left">
                                <label>Họ Và Tên</label>
                              </div>
                              <div className="address-body-item-right">
                                <div className="address-body-name">Lê Hữu Đạt</div>
                              </div>
                            </div>
                            <div className="address-body-item">
                              <div className="address-body-item-left">
                                <label>Số Điện Thoại</label>
                              </div>
                              <div className="address-body-item-right">
                                <div className="address-body-phone">0332794082</div>
                              </div>
                            </div>
                            <div className="address-body-item">
                              <div className="address-body-item-left">
                                <label>Địa Chỉ</label>
                              </div>
                              <div className="address-body-item-right">
                                <div className="address-body-add">
                                  K236/40 Trần Cao Vân
                                  <br />
                                  Phường Tam Thuận
                                  <br />
                                  Quận Thanh Khê
                                  <br />
                                  Đà Nẵng
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="address-body-right">
                            <button className="address_btn-edit">Sửa</button>
                            <button className="address_btn-remove">Xóa</button>
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

export default Address;