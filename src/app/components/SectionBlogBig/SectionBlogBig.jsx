
import Time from "../Svgs/Time/Time";
import "./SectionBlogBig.css";

function SectionBlogBig({ category, title, description, timeAgo }) {
  return (
    <section>
      <div className="info__blog">
        <h4 className="h4__blog">{category}</h4>
        <h3 className="h3__blog">{title}</h3>
        <p className="p__blog">{description}</p>
        <div className="time__blog">
          <Time />
          <p className="time__text">{timeAgo}</p>
        </div>
      </div>
    </section>
  );
}

export default SectionBlogBig