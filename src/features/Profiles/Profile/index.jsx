import React, { Component } from 'react';
import '../profile.css'
class Profile extends Component {
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
              <h1 className="profile__content-header-title">Hồ Sơ Của Tôi</h1>
              <div className="profile__content-header-des">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
            </div>
            <div className="profile__content-edit">
              <form style={{width: '60%'}}>
                <div className="form-item">
                  <div className="form__item-left">
                    <label>Tên</label>
                  </div>
                  <div className="form__item-right">
                    <div className="input__wrapper">
                      <input type="text" placeholder="Lê Hữu Đạt" className="input__name" />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <div className="form__item-left">
                    <label>Email</label>
                  </div>
                  <div className="form__item-right">
                    <div className="form__user-email">
                      <div className="user-email">datlehuu1411@gmail.com</div>
                      <button className="btn-edit-email">Thay đổi</button>
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <div className="form__item-left">
                    <label>Số Điện Thoại</label>
                  </div>
                  <div className="form__item-right">
                    <div className="form__user-phone">
                      <div className="user-phone">0332794082</div>
                      <button className="btn-edit-phone">Thay đổi</button>
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <div className="form__item-left">
                    <label>Tên Shop</label>
                  </div>
                  <div className="form__item-right">
                    <div className="input__wrapper">
                      <input type="text" className="input__shopname" />
                    </div>
                  </div>
                </div>
                <div className="form-item">
                  <div className="form__item-left">
                    <label>Ngày Tham Gia</label>
                  </div>
                  <div className="form__item-right">
                    <div className="form__join-date">14/11/2021</div>
                  </div>
                </div>
                <div className="form-item">
                  <div className="form__item-left">
                  </div>
                  <div className="form__item-right">
                    <button className="form__btn-save btn btn--primary">Lưu</button>
                  </div>
                </div>
              </form>
              <div className="profile__content-upload-img">
                <div className="box-upload-img">
                  <img src="./assets/img/avt.jfif" alt="" className="upload-img" />
                  <input type="file" className="upload-input" name id="input-img" accept=".jpg,.png,.jpeg" />
                  <button className="btn-upload btn">Chọn ảnh</button>
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

export default Profile;