import "./Blog.css";
import SectionBlogBig from "../SectionBlogBig/SectionBlogBig";
import SectionBlogSmall from "../SectionBlogSmall/SectionBlogSmall";
import smallImg1 from "../../assets/img/articulo_small_01.png";
import smallImg2 from "../../assets/img/articulo_small_02.png";
import smallImg3 from "../../assets/img/articulo_small_03.png";

function Blog() {
  return (
    <div className="central">
      <div className="blog">
        <h2 className="title__section2">BLOG</h2>
      </div>
      <div className="res__blog">
        <div className="res__big">
        <div className="blog__section1">
          <SectionBlogBig
            category="CIUDAD"
            title="Artículo de puente"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
            timeAgo="Hace 2m"
          />
        </div>
        <div className="blog__section2">
          <SectionBlogBig
            category="AVENTURA"
            title="Artículo de bosque"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam"
            timeAgo="Hace 15m"
          />
        </div>
        </div>
        <div className="section__small">
          <SectionBlogSmall
            img={smallImg1}
            title="Artículo de elefante"
            date="Hace 3h"
          />
          <SectionBlogSmall
            img={smallImg2}
            title="Artículo de loro"
            date="Hace 4h"
          />
          <SectionBlogSmall
            img={smallImg3}
            title="Artículo de camino"
            date="Hace 8h"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
