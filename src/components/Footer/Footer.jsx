import React from "react";
import verify from "../../assets/images/footerimg/verify.png"
import truck from "../../assets/images/footerimg/truck.png"
import box from "../../assets/images/footerimg/box.png"
import info_round_button from "../../assets/images/footerimg/info-round-button.png"
export default function Footer() {
  return (
    <div id="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <a href="/#">
            <div className="footer-top__item">
              <div className="footer-top__item-icon">
                <img src={verify} alt="" />
              </div>
              <div className="footer-top__item-title">
                <h4>Chính hãng</h4>
                <span>Sản phẩm chính hãng</span>
              </div>
            </div>
          </a>
          <a href="/#">
            <div className="footer-top__item">
              <div className="footer-top__item-icon">
                <img src={truck} alt="" />
              </div>
              <div className="footer-top__item-title">
                <h4>Miễn phí vận chuyển</h4>
                <span>Theo chính sách giao hàng</span>
              </div>
            </div>
          </a>
          <a href="/#">
            <div className="footer-top__item">
              <div className="footer-top__item-icon">
                <img src={box} alt="" />
              </div>
              <div className="footer-top__item-title">
                <h4>Công nghệ đóng gói</h4>
                <span>Đóng gói theo công nghệ mới</span>
              </div>
            </div>
          </a>
          <a href="/#">
            <div className="footer-top__item">
              <div className="footer-top__item-icon">
                <img
                  src={info_round_button}
                  alt=""
                />
              </div>
              <div className="footer-top__item-title">
                <h4>Phân phối</h4>
                <span>Cộng tác nhiều nhà phân phối</span>
              </div>
            </div>
          </a>
        </div>
        <div className="footer-midle">
          <div className="footer-midle__item">
            <div className="footer-midle__item-title">TECHCITY VIETNAM</div>
            <div className="footer-midle__item-content">
              <ul>
                <li>
                  <a href="/#">Giới thiệu Techcity</a>
                </li>
                <li>
                  <a href="/#">Khách hàng thân thiết</a>{" "}
                </li>
                <li>
                  <a href="/#">Chính sách bảo hành</a>{" "}
                </li>
                <li>
                  <a href="/#">Hướng dẫn mua hàng</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-midle__item">
            <div className="footer-midle__item-title">Tổng đài hỗ trợ</div>
            <div className="footer-midle__item-content">
              <ul>
                <li>
                  <a href="/#">
                    Gọi mua : <strong> 1900 636 636</strong> (8h - 22h)
                  </a>
                </li>
                <li>
                  <a href="/#">
                    Kỹ thuật : <strong> 1900 636 642</strong> (8h -
                    22h)
                  </a>{" "}
                </li>
                <li>
                  <a href="/#">
                    Khiếu nại : <strong>1900 636 646</strong> (8h - 22h)
                  </a>{" "}
                </li>
                <li>
                  <a href="/#">
                    Bảo hành : <strong>1900 636 696</strong> (8h - 22h)
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-midle__item">
            <div className="footer-midle__item-title">HỆ THỐNG SHOWROOM</div>
            <div className="footer-midle__item-content">
              <ul>
                <li>
                  <a href="/#">Chi nhánh 1 : 03 Lê Lợi, P Chính Gián, Q Hải Châu, Đà Nẵng</a>
                </li>
                <li>
                  <a href="/#">Chi nhánh 2 : 52 Ngô Nại Thịnh, P An Hải, Q Sơn Trà, Đà Nẵng</a>{" "}
                </li>
                <li>
                  <a href="/#">Chi nhánh 3 : 20 Bạch Đằng, P Tân Chính, Q Hải Châu, Đà Nẵng</a>{" "}
                </li>
                <li>
                  <a href="/#">Chi nhánh 4 : 69 Lý Thái Tổ, P Thạc Gián, Q Thanh Khê, Đà Nẵng</a>{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-midle__item">
            <div className="footer-midle__item-title">ĐƯỢC CHỨNG NHẬN</div>
            <div className="footer-midle__item-content">
              <ul>
                <li>
                  <a href="/#">Giới thiệu</a>
                </li>
                <li>
                  <a href="/#">Khách hàng thân thiết</a>{" "}
                </li>
                <li>
                  <a href="/#">Chính sách bảo hành</a>{" "}
                </li>
                <li>
                  <a href="/#">Hướng dẫn mua hàng</a>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__title">
            Bản quyền © 2022 bởi TECHCITY VIET NAM
          </div>
          <div className="footer-bottom__content">
            Công ty Cổ Phần TECHCITY Việt Nam Giấy phép kinh doanh số 0107875xxx do
            sở kế hoạch và đầu tư thành phố Đà Nẵng cấp ngày 01/04/2022
            <br />
            Văn phòng Đà Nẵng: 69 Lý Thái Tổ, P Thạc Gián, Q Thanh Khê, TP Đà Nẵng
            <br />
            Hotline :1900 636 648 | Email: tech@city.media
          </div>
        </div>
      </div>
    </div>
  );
}