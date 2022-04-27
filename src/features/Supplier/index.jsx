import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { useParams } from 'react-router-dom';
import productApi from '../../api/productApi';
import userApi from '../../api/userApi';
import loadingImage from '../../assets/images/loading/Spinner-1s-200px.gif';
import ItemCard from '../../components/ItemCard/ItemCard';

import './style.css';

export default function Supplier() {
  const { id } = useParams();
  const [supplier, setSupplier] = useState({
    id: '',
    name: '',
    phone_number: '',
    email: '',
    address: null,
    ava: loadingImage,
    status: '1',
    role: 0,
    email_verified_at: null,
    created_at: '',
    updated_at: '',
  });
  const [products, setProducts] = useState([]);
  const getSupplier = async () => {
    try {
      const response = await userApi.getUserById(id);
      const { data } = response;
      setSupplier(data);
      console.log(data);
    } catch (err) {
      console.log('Fail to get api user by id');
    }
  };
  const getProductOfSupplier = async () => {
    try {
      const response = await productApi.getProductFilter(
        `filterType=user_id&filterVal=${id}`
      );
      const { data } = response;
      setProducts(data);
      console.log(data);
    } catch (err) {
      console.log('Fail to get Product Of Supplier');
    }
  };
  const [filterType, setFilterType] = useState(0);
  const renderProductOfSupplier = () => {
    let productFilter=[]
    debugger
    if (filterType != 0) {
      productFilter = products.filter(
        (product) => product.category_id == filterType
      );
    } else productFilter = products;
    if(productFilter.length==0) return(
      <div id="Supplier-product-msg">
        không có sản phẩm nào ở danh mục này cả
      </div>
    )
    return productFilter.map((product, index) => {
      return (
        <ItemCard
          key={index}
          itemID={product.id}
          productName={product.name}
          productImage={product.img}
          defaultPrice={product.price}
        />
      );
    });
  };
  const changeProductCategory = (e) => {
    e.preventDefault();
    switch (e.target.id) {
      case 'supProAll':
        setFilterType(0)
        break;
      case 'supProPhone':
      setFilterType(1)  
      break;
      case 'supProLap':
      setFilterType(2)  
      break;
      case 'supProWatch':
      setFilterType(6)  
      break;
      case 'supProTab':
      setFilterType(3)  
      break;
      case 'supProPCAcc':
      setFilterType(4)  
      break;
      case 'supProPhoneAcc':
      setFilterType(5)  
      break;
      default:
        break;
    }
  };
  useEffect(() => {
    getSupplier();
    getProductOfSupplier();
    window.scrollTo({top:0,behavior:'smooth'})
  }, []);
  return (
    <section className="section">
      <div className="full-supp">
        <div className="supplier">
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-4">
                <div className="info-supp ">
                  {/* <div className="bgblack" /> */}
                  <div className="shop">
                    <div className="info-shop">
                      <a href="/#" className="mr-3">
                        <img src={supplier.ava} alt="" />
                      </a>
                      <div className="name-shop mt-1">
                        <h5>{supplier.name}</h5>
                        <p style={{ fontSize: '13px' }}>Online 13 giờ trước</p>
                      </div>
                    </div>
                    <div className="function-supp">
                      {/* <div className="btn btn-contract mr-2">
                        <span>Theo dõi</span>
                      </div> */}
                      <div className="btn btn-contract">
                        <span>Chat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <p>
                  <i className="fas fa-store mr-1" /> Sản phẩm: <span>70</span>
                </p>
                <p>
                  <i className="fas fa-user  mr-1" /> Đang theo dõi:{' '}
                  <span>70</span>
                </p>
                {/* <p><i className="fas fa-comment-dots mr-1" />Tỷ lệ phản hội: <span>89%</span></p> */}
              </div>
              <div className="col-md-4">
                {/* <p><i className="fas fa-users mr-1" />Người theo dõi: <span>6.1k</span></p> */}
                <p>
                  <i className="fas fa-star mr-1" />
                  Đánh giá: <span>4.7</span>
                </p>
                <p>
                  <i className="fas fa-user-check mr-1" />
                  Tham gia: <span>8 tháng trước</span>
                </p>
              </div>
            </div>
          </div>
          <div className="container suppliter-nav">
            <div className="row menu-supp">
              <ul>
                <li className={filterType==0 ?'active':''}>
                  <a
                    onClick={(e) => changeProductCategory(e)}
                    id="supProAll"
                    href="/#"
                  >
                    Tất cả
                  </a>
                </li>
                <li className={filterType==1 ?'active':''}>
                  <a
                    onClick={(e) => changeProductCategory(e)}
                    id="supProPhone"
                    href="/#"
                  >
                    Điện thoại
                  </a>
                </li>
                <li className={filterType==2 ?'active':''}>
                  <a
                    onClick={(e) => changeProductCategory(e)}
                    id="supProLap"
                    href="/#"
                  >
                    Laptop
                  </a>
                </li>
                <li className={filterType==6 ?'active':''}>
                  <a
                    onClick={(e) => changeProductCategory(e)}
                    id="supProWatch"
                    href="/#"
                  >
                    Đồng hồ
                  </a>
                </li>
                <li className={filterType==3 ?'active':''}>
                  <a
                    onClick={(e) => changeProductCategory(e)}
                    id="supProTab"
                    href="/#"
                  >
                    Tablet
                  </a>
                </li>
                <li className={filterType==4 ?'active':''}>
                  <a
                    onClick={(e) => changeProductCategory(e)}
                    id="supProPCAcc"
                    href="/#"
                  >
                    Linh Kiện PC
                  </a>
                </li>
                <li className={filterType==5 ?'active':''}>
                  <a
                    onClick={(e) => changeProductCategory(e)}
                    id="supProPhoneAcc"
                    href="/#"
                  >
                    Phụ kiện điện thoại
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="show-product mt-3">
  <div className="suggest-product">
    <div className="container">
      <span>GỢI Ý CHO BẠN</span>
      <div className="row suggest mt-1">
        <div className="col-sm-3 carousel-items">
          <div className="col-sm-12">
            <a href ="/#" className="carousel-itemimage"><img src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/17/637647989512049638_asus-vivobook-a515-bac-1.jpg" alt="" /></a>
            <div className="carousel-itembot-wrapper">
              <a href ="/#" className="carousel-itemtitle">
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
</div> */}
        <div className="show-all">
          <div className="container showsp">
            <div className="row product-filter py-3">
              <h5>
                <a
                  href="/#"
                  style={{ color: 'rgba(128, 128, 128, 0.637) !important' }}
                >
                  Tất cả sản phẩm
                </a>
              </h5>
              {/* <div className="filter">
                <span className="mr-1">Hiển thị 1–12 trong 28 kết quả</span>
                <select name="product" id="product">
                  <option value="volvo">Thứ tự mặc định</option>
                  <option value="saab">Thứ tự theo mức độ phổ biến</option>
                  <option value="mercedes">Mới nhất</option>
                  <option value="audi">Thứ tự theo điểm đánh giá</option>
                </select>
              </div> */}
            </div>
            <div className="row all-product">
              {/* <div className="col-md-3 shop-bar">
                <div
                  className="col-sm-12"
                  style={{ color: 'red', fontWeight: 700 }}
                >
                  Danh mục sản phẩm
                </div>
                <div className="col-sm-12 option bg">
                  <a href ="/#">Phụ kiện điện thoại</a>
                </div>
                <div className="col-sm-12 option">
                  <a href ="/#">Phụ kiện điện thoại</a>
                </div>
                <div className="col-sm-12 option bg">
                  <a href ="/#">Phụ kiện điện thoại</a>
                </div>
                <div className="col-sm-12 option">
                  <a href ="/#">Phụ kiện điện thoại</a>
                </div>
                <div className="col-sm-12 option bg">
                  <a href ="/#">Phụ kiện điện thoại</a>
                </div>
                <div className="col-sm-12 option">
                  <a href ="/#">Phụ kiện điện thoại</a>
                </div>
              </div> */}
              <div className="col-md-12 all-item">
                <div className="row">
                  {/* <div className="col-sm-3 carousel-items">
                    <div className="col-sm-12">
                      <a href="/#" className="carousel-itemimage">
                        <img
                          src="https://images.fpt.shop/unsafe/fit-in/585x390/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/8/17/637647989512049638_asus-vivobook-a515-bac-1.jpg"
                          alt=""
                        />
                      </a>
                      <div className="carousel-itembot-wrapper">
                        <a href="/#" className="carousel-itemtitle">
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
                          <span>
                            <i className="fas fa-truck" />
                          </span>
                        </div>
                        <div className="carousel-itemadd-to-cart">
                          <div className="btn btn-buy">Thêm vào giỏ</div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {renderProductOfSupplier()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
