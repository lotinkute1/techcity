import React, { Component } from 'react';
import './style.css'
class Payment extends Component {
    render() {
        return (
          
               <section className='section'>
                  <main role="main" className='payment'> 
  <div className="container mt-4">
    <form className="needs-validation" name="frmthanhtoan" method="post" action="#">
      <input type="hidden" name="kh_tendangnhap" defaultValue="dnpcuong" />
      <div className="py-5 text-center">
        <i className="fa fa-credit-card fa-4x" aria-hidden="true" />
        <h2>Thanh toán</h2>
        <p className="lead">Vui lòng kiểm tra thông tin Khách hàng, thông tin Giỏ hàng trước khi Đặt hàng.</p>
      </div>
      <div className="row">
        <div className="col-md-4 order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">Giỏ hàng</span>
            <span className="badge badge-secondary badge-pill">2</span>
          </h4>
          <ul className="list-group mb-3">
            <input type="hidden" name="sanphamgiohang[1][sp_ma]"  />
            <input type="hidden" name="sanphamgiohang[1][gia]"  />
            <input type="hidden" name="sanphamgiohang[1][soluong]"  />
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Apple Ipad 4 Wifi 16GB</h6>
                <small className="text-muted">11800000.00 x 2</small>
              </div>
              <span className="text-muted">23600000</span>
            </li>
            <input  name="sanphamgiohang[2][sp_ma]"  />
            <input type="hidden" name="sanphamgiohang[2][gia]"  />
            <input type="hidden" name="sanphamgiohang[2][soluong]" defaultValue={8} />
            <li className="list-group-item d-flex justify-content-between lh-condensed">
              <div>
                <h6 className="my-0">Apple iPhone 5 16GB White</h6>
                <small className="text-muted">14990000.00 x 8</small>
              </div>
              <span className="text-muted">119920000</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Tổng thành tiền</span>
              <strong>143520000</strong>
            </li>
          </ul>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Mã khuyến mãi" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-secondary">Xác nhận</button>
            </div>
          </div>
        </div>
        <div className="col-md-8 order-md-1">
          <h4 className="mb-3">Thông tin khách hàng</h4>
          <div className="row">
            <div className="col-md-12">
              <label htmlFor="kh_ten">Họ tên</label>
              <input type="text" className="form-control" name="kh_ten" id="kh_ten" defaultValue="Nguyễn Đình Tín" />
            </div>
            <div className="col-md-12">
              <label htmlFor="kh_gioitinh">Giới tính</label>
              <input type="text" className="form-control" name="kh_gioitinh" id="kh_gioitinh" defaultValue="Nam" />
            </div>
            <div className="col-md-12">
              <label htmlFor="kh_diachi">Địa chỉ</label>
              <input type="text" className="form-control" name="kh_diachi" id="kh_diachi" defaultValue="130 Duy Tân" />
            </div>
            <div className="col-md-12">
              <label htmlFor="kh_dienthoai">Điện thoại</label>
              <input type="text" className="form-control" name="kh_dienthoai" id="kh_dienthoai" defaultValue={12333333} />
            </div>
            <div className="col-md-12">
              <label htmlFor="kh_email">Email</label>
              <input type="text" className="form-control" name="kh_email" id="kh_email" defaultValue="tinn@ctu.edu.vn" />
            </div>
            <div className="col-md-12">
              <label htmlFor="kh_ngaysinh">Ngày sinh</label>
              <input type="text" className="form-control" name="kh_ngaysinh" id="kh_ngaysinh" defaultValue="11/6/2000" />
            </div>
            <div className="col-md-12">
              <label htmlFor="kh_cmnd">CMND</label>
              <input type="text" className="form-control" name="kh_cmnd" id="kh_cmnd" defaultValue={362209685} />
            </div>
          </div>
          <h4 className="mb-3">Hình thức thanh toán</h4>
          <div className="d-block my-3">
            <div className="custom-control custom-radio">
              <input id="httt-1" name="httt_ma" type="radio" className="custom-control-input" required defaultValue={1} />
              <label className="custom-control-label" htmlFor="httt-1">Tiền mặt</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="httt-2" name="httt_ma" type="radio" className="custom-control-input" required defaultValue={2} />
              <label className="custom-control-label" htmlFor="httt-2">Chuyển khoản</label>
            </div>
            <div className="custom-control custom-radio">
              <input id="httt-3" name="httt_ma" type="radio" className="custom-control-input" required defaultValue={3} />
              <label className="custom-control-label" htmlFor="httt-3">Ship COD</label>
            </div>
          </div>
          <hr className="mb-4" />
          <button className="btn btn-primary btn-lg btn-block" type="submit" name="btnDatHang">Đặt
            hàng</button>
        </div>
      </div>
    </form>
  </div>

</main>
               </section>

      
        );
    }
}

export default Payment;