import "./Blog.css";
import Time from "../Svgs/Time/Time";

function Blog() {
  return (
    <div className="central">
      <div className="blog">
        <h2 className="title__section2">BLOG</h2>
      </div>
      <section className="blog__section1">
        <div className="info__blog">
          <h4 className="h4__blog">CIUDAD</h4>
          <h3 className="h3__blog">Artículo de puente</h3>
          <p className="p__blog">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <div className="time__blog">
            <Time />
            <p className="time__text">Hace 2m</p>
          </div>
        </div>
      </section>
      <section className="blog__section2">
        <div className="info__blog">
          <h4 className="h4__blog">AVENTURA</h4>
          <h3 className="h3__blog">Artículo de bosque</h3>
          <p className="p__blog">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          </p>
          <div className="time__blog">
            <Time />
            <p className="time__text">Hace 15m</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
