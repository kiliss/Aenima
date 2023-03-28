import React from "react";
import Image from "next/image";
import Time from "../Svgs/Time/Time";
import "./SectionBlogSmall.css";

function SectionBlogSmall({ img, title, date }) {
  return (
    <div>
      <div className="blog__small__container">
        <div className="blog__small__img">
          <Image src={img} alt="blog" width={352} height={210} />
        </div>
        <div className="blog__small__info">
          <h3 className="h3__blog__small">{title}</h3>
          <div className="time__blog__small">
            <Time />
            <p className="p__blog__small">{date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionBlogSmall;
