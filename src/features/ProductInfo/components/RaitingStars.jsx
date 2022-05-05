import React from "react";
import "./raitingStarts.css";
export default function RaitingStars({stars, startChange }) {
  const startOnclick = (e) => {
    startChange(e.target.value);
  };
  return (
    <>
      <div id="full-stars-example-two">
        <div className="rating-group">
          <input
            disabled
            className="rating__input rating__input--none"
            name="rating3"
            id="rating3-none"
            defaultValue={0}
            checked={stars==0 ? true : false}
            type="radio"
          />
          <label
            aria-label="1 star"
            className="rating__label"
            htmlFor="rating3-1"
          >
            <i className="rating__icon rating__icon--star fa fa-star" />
          </label>
          <input
            onClick={(e) => startOnclick(e)}
            className="rating__input"
            name="rating3"
            id="rating3-1"
            defaultValue={1}
            type="radio"
          />
          <label
            aria-label="2 stars"
            className="rating__label"
            htmlFor="rating3-2"
          >
            <i className="rating__icon rating__icon--star fa fa-star" />
          </label>
          <input
            onClick={(e) => startOnclick(e)}
            className="rating__input"
            name="rating3"
            id="rating3-2"
            defaultValue={2}
            type="radio"
          />
          <label
            aria-label="3 stars"
            className="rating__label"
            htmlFor="rating3-3"
          >
            <i className="rating__icon rating__icon--star fa fa-star" />
          </label>
          <input
            onClick={(e) => startOnclick(e)}
            className="rating__input"
            name="rating3"
            id="rating3-3"
            defaultValue={3}
            type="radio"
          />
          <label
            aria-label="4 stars"
            className="rating__label"
            htmlFor="rating3-4"
          >
            <i className="rating__icon rating__icon--star fa fa-star" />
          </label>
          <input
            onClick={(e) => startOnclick(e)}
            className="rating__input"
            name="rating3"
            id="rating3-4"
            defaultValue={4}
            type="radio"
          />
          <label
            aria-label="5 stars"
            className="rating__label"
            htmlFor="rating3-5"
          >
            <i className="rating__icon rating__icon--star fa fa-star" />
          </label>
          <input
            onClick={(e) => startOnclick(e)}
            className="rating__input"
            name="rating3"
            id="rating3-5"
            defaultValue={5}
            type="radio"
          />
        </div>
      </div>
    </>
  );
}
