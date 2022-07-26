import "./ArticlesList.css";
import { Link } from "react-router-dom";

export default function ArticlesList({ articles }) {
  return (
    <div className="articleList">
      {articles.map((article) => (
        <Link to={`/Article/${article.id}`} key={article.id}>
          <div className="articles">
            <div className="artHead">
              <h3>{article.title}</h3>
              {article.author && <p>By: {article.author}</p>}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
