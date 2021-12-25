import React, { useEffect } from "react";
import Slider from "react-slick";
import ItemCard from "../ItemCard/ItemCard";
// import GetProductsData from "../../api/GetProductsData";
export default function ItemsCarousel(props) {
  //   const itemData = GetProductsData(props.categoryID) || [];
  //   console.log(itemData);

  var settings = {
    dots: false,
    infinite: false,
    rows: 1,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    adaptiveHeight: false,
    lazyLoad: true,
  };

  const renderItems = props.itemData.map((item) => {
    if(item.category_id.indexOf(props.categoryID)>=0){
      
      return (
        <ItemCard
          key={item.id}
          itemID={item.id}
          productName={item.product_name}
          productImage={item.product_img.main_img}
          defaultPrice={item.default_price}
        />
      )
    }
  });

  return (
    <section className="section items">
      <div className="section-title">
        <h2>{props.title}</h2>
        <div>
          <a href="/#">
            xem tất cả <i className="fas fa-angle-double-right" />
          </a>
        </div>
      </div>
      {/* <div
        className="main-carousel"
        data-flickity='{ "groupCells": true,"contain": true, "pageDots": false,"adaptiveHeight": true,"autoPlay": 4000 ,"imagesLoaded": true,"lazyLoad": 2}'
      >
        {renderItems}
      </div> */}
      <Slider {...settings}>
        {renderItems}
      </Slider>
    </section>
  );
}
