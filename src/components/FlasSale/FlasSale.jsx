import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import discountApi from '../../api/discountApi';
import './style.css';
export default function FlasSale() {
  const [discounts, setDiscounts] = useState([]);
  const [discountsDetail, setDiscountsDetail] = useState([]);
  const getDiscountData = async () => {
    try {
      let result = await discountApi.getAll();
      var { data, message } = result;
      // console.log(result);
      setDiscounts(data);
    } catch (e) {
      console.log(message);
    }
  };
  const getDiscountDetails = async () => {
    try {
      let result = await discountApi.getAllDiscountDetail();
      var { data, message } = result;
      console.log(result);
      setDiscountsDetail(data);
    } catch (e) {
      console.log(message);
    }
  };
  useEffect(() => {
    getDiscountData();
    getDiscountDetails();
  }, []);
  //  console.log(discountsData[0].discount_img);
  const renderdiscountsDetail = (did) => {
    return discountsDetail?.map((item,index) => {
      if (item.discount_id == did) {
        // console.log(item);
        return (
          <div key={item.id} className="discount_ticket">
            <div className="circle_left"></div>
            <div className="circle_left"></div>
            <div className="circle_left"></div>
            <div className="circle_left"></div>
            <div className="circle_left"></div>
            <div className="circle_right"></div>
            <div className="circle_right"></div>
            <div className="circle_right"></div>
            <div className="circle_right"></div>
            <div className="circle_right"></div>
            <div className="circle_top"></div>
            <div className="circle_bottom"></div>

            <div className="discount_ticket_card">
              <div className="ticket_left">
                <div className="ticket_title">
                  <p>BIG</p> <p>SALE</p>
                </div>
                <p>Techcity coupon ticket</p>
                <strong>lllllllllllllllllll</strong>
              </div>
              <div className="ticket_right">
                <Link to={'/product_info-'+item.product_id} className="ticket_product_name">
                  {item.discount_product_name}
                </Link>
                <div className="ticket_percent">
                  <div>{item.discount_percent}</div>
                  <div>
                    <p>%</p>
                    <p>OFF</p>
                  </div>
                </div>

                <div className="ticket_code">
                  <div className="ticket_code_left">{item.discount_code}</div>
                  <input
                    onClick={(e) => copyHandler(e,item.discount_code)}
                    type="button"
                    className="ticket_code_right"
                    value={'Copy'}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  };
  const renderBannerImg = () =>
    discounts?.map((item) => {
      return (
        <div key={item.id} className="carousel-cell">
          <div className="discounts_img">
            <div className="carousel-cell">
              <a href="/#">
                <img src={item.discount_img} alt=""></img>
              </a>
            </div>
          </div>
          {renderdiscountsDetail(item.id)}
        </div>
      );
    });
  const copyHandler = (e,code) => {
    e.target.value = 'Copied!';
    navigator.clipboard.writeText(code);
  };
  return (
    <section className="section discounts">
      <div className="discounts_titles">
        <img
          src="https://thuvienmuasam.com/uploads/default/original/2X/1/175465a5ba777d6970c4cc24f3565eac5b6dd387.png"
          alt=""
        />
      </div>
      {renderBannerImg()}
      {/* <div className="discounts_img">
        <div className="carousel-cell">
          <a href="/#">
            <img
              src="https://fdn.gsmarena.com/imgroot/news/21/07/huawei-summer-sale/-1200/gsmarena_001.jpg"
              alt=""
            ></img>
          </a>
        </div>
      </div>
      <div className="discount_ticket">
        <div className="circle_left"></div>
        <div className="circle_left"></div>
        <div className="circle_left"></div>
        <div className="circle_left"></div>
        <div className="circle_left"></div>
        <div className="circle_right"></div>
        <div className="circle_right"></div>
        <div className="circle_right"></div>
        <div className="circle_right"></div>
        <div className="circle_right"></div>
        <div className="circle_top"></div>
        <div className="circle_bottom"></div>
        <div className="discount_ticket_card">
          <div className="ticket_left">
            <div className="ticket_title">
              <p>BIG</p> <p>SALE</p>
            </div>
            <p>Techcity coupon ticket</p>
            <strong>lllllllllllllllllll</strong>
          </div>
          <div className="ticket_right">
            <div className="ticket_percent">
              <div>40</div>
              <div>
                <p>%</p>
                <p>OFF</p>
              </div>
            </div>
            <div className="ticket_code">
              <div className="ticket_code_left">KJHDFDDFSDA</div>
              <input
                onClick={(e) => copyHandler(e)}
                type="button"
                className="ticket_code_right"
                value={'Copy'}
              ></input>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
