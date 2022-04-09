import React, { useEffect } from "react";
import Slider from "react-slick";
import ItemCard from "../ItemCard/ItemCard";
import { sliderItemsCrouselSetting } from "../settings/slickSetting";
import { Link } from "react-router-dom";
// import GetProductsData from "../../api/GetProductsData";
export default function ItemsCarousel({title, itemData , categoryID}) {
  //   const itemData = GetProductsData(categoryID) || [];
  //   console.log(itemData);
  const renderItems = itemData.map((item) => {
    if (item.category_id == categoryID) {
      return (
        <ItemCard
          key={item.id}
          itemID={item.id}
          productName={item.name}
          productImage={item.img}
          defaultPrice={item.price}
        />
      );
    }
    if(!categoryID){
      return (<ItemCard
          key={item.id}
          itemID={item.id}
          productName={item.name}
          productImage={item.img}
          defaultPrice={item.price}
        />)
    }
  });

  return (
    <section className="section items">
      <div className="section-title">
        <h2>{title}</h2>
        <div>
          <Link to={`/show-all-product/${categoryID}`}>
            xem tất cả <i className="fas fa-angle-double-right" />
          </Link>
        </div>
      </div>
      {/* <div
        className="main-carousel"
        data-flickity='{ "groupCells": true,"contain": true, "pageDots": false,"adaptiveHeight": true,"autoPlay": 4000 ,"imagesLoaded": true,"lazyLoad": 2}'
      >
        {renderItems}
      </div> */}
      <Slider {...sliderItemsCrouselSetting}>{renderItems}</Slider>
    </section>
  );
}
