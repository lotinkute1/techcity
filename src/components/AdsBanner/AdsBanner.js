import React from "react";


export default function AdsBanner(props) {
  return (
    <section className="section ads">
      <div>
        <a
          title="ads"
          href={props.adsHref}
        >
          <img src={props.adsImg} alt="" />
        </a>
      </div>
    </section>
  );
}
