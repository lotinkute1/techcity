import React, { Component } from 'react';
import './style.css'
class Supplier extends Component {
    render() {
        return (
            <div className="full-supp">
  <div className="supplier">
    <div className="container pt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="info-supp pt-2 pl-3">
            <div className="bgblack" />
            <div className="shop">
              <div className="info-shop">
                <a href className="mr-3"><img src="https://cf.shopee.vn/file/71eb95486843b295eda662ee877d7bcd_tn" alt="" /></a>
                <div className="name-shop mt-1">
                  <h5>82X Online</h5>
                  <p style={{fontSize: '13px'}}>Online 13 giờ trước</p>
                </div>
              </div>
              <div className="function-supp">
                <div className="follow mr-2">
                  <span>Theo dõi</span>
                </div>
                <div className="follow">
                  <span>Chat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"> 
          <p><i className="fas fa-store mr-1" /> Sản phẩm: <span>70</span></p>
          <p><i className="fas fa-user  mr-1" /> Đang theo dõi: <span>70</span></p>
          <p><i className="fas fa-comment-dots mr-1" />Tỷ lệ phản hội: <span>89%</span></p>
        </div>
        <div className="col-md-4">
          <p><i className="fas fa-users mr-1" />Người theo dõi: <span>6.1k</span></p>
          <p><i className="fas fa-star mr-1" />Đánh giá: <span>4.7</span></p>
          <p><i className="fas fa-user-check mr-1" />Tham gia: <span>8 tháng trước</span></p>
        </div>
      </div>
    </div> 
    <hr />
    <div className="container">
      <div className="row menu-supp">
        <ul>
          <li className="active"><a href>Dạo</a></li>
          <li><a href>Tất cả sản phẩm</a></li>
          <li><a href>Webcam</a></li>
          <li><a href>Laptop</a></li>
          <li><a href>Điện thoại</a></li>
          <li><a href>Thêm</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="show-product mt-3">
    <div className="suggest-product">
      <div className="container">
        <span>GỢI Ý CHO BẠN</span>
        <div className="row suggest mt-1">
          <div className="col-sm-3 carousel-items">
            <div className="col-sm-12">
              <a href className="carousel-itemimage"><img src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/17/637647989512049638_asus-vivobook-a515-bac-1.jpg" alt="" /></a>
              <div className="carousel-itembot-wrapper">
                <a href className="carousel-itemtitle">
                  <h3 className="test-wrap">LAPTOP</h3>
                </a>
                <div className="carousel-itemraiting">
                  <div className="raiting-starts">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                  </div>
                </div>
                <div className="carousel-itemprice">
                  <span>32.900.000đ</span>
                  <span><i className="fas fa-truck" /></span>
                </div>
                <div className="carousel-itemadd-to-cart">
                  <div className="btn btn-buy">Thêm vào giỏ</div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  <div className="show-all">
    <div className="container showsp">
      <div className="row product-filter py-3">
        <h5><a href style={{color: 'rgba(128, 128, 128, 0.637) !important'}}>Tất cả sản phẩm</a></h5>
        <div className="filter">
          <span className="mr-1">Hiển thị 1–12 trong 28 kết quả</span>
          <select name="product" id="product">
            <option value="volvo">Thứ tự mặc định</option>
            <option value="saab">Thứ tự theo mức độ phổ biến</option>
            <option value="mercedes">Mới nhất</option>
            <option value="audi">Thứ tự theo điểm đánh giá</option>
          </select>
        </div>
      </div>
      <div className="row all-product">
        <div className="col-md-3 shop-bar">
          <div className="col-sm-12" style={{color: 'red', fontWeight: 700}}>
            Danh mục sản phẩm
          </div>
          <div className="col-sm-12 option bg">
            <a href>Phụ kiện điện thoại</a>
          </div>
          <div className="col-sm-12 option">
            <a href>Phụ kiện điện thoại</a>
          </div>
          <div className="col-sm-12 option bg">
            <a href>Phụ kiện điện thoại</a>
          </div>
          <div className="col-sm-12 option">
            <a href>Phụ kiện điện thoại</a>
          </div> 
          <div className="col-sm-12 option bg">
            <a href>Phụ kiện điện thoại</a>
          </div>
          <div className="col-sm-12 option">
            <a href>Phụ kiện điện thoại</a>
          </div>
        </div>
        <div className="col-md-9 all-item">
          <div className="row">
            <div className="col-sm-3 carousel-items">
              <div className="col-sm-12">
                <a href className="carousel-itemimage"><img src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/17/637647989512049638_asus-vivobook-a515-bac-1.jpg" alt="" /></a>
                <div className="carousel-itembot-wrapper">
                  <a href className="carousel-itemtitle">
                    <h3 className="test-wrap">LAPTOP</h3>
                  </a>
                  <div className="carousel-itemraiting">
                    <div className="raiting-starts">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                  </div>
                  <div className="carousel-itemprice">
                    <span>32.900.000đ</span>
                    <span><i className="fas fa-truck" /></span>
                  </div>
                  <div className="carousel-itemadd-to-cart">
                    <div className="btn btn-buy">Thêm vào giỏ</div>
                  </div>
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

export default Supplier;