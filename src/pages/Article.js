import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Article.css";

export default function Article() {
  const url = "http://localhost:3000/articles/";
  const { id } = useParams();
  const { data: article, isPending, error } = useFetch(url + id);

  return (
    <div className="article">
      <h2>Article</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h3>{article.title}</h3>
          {article.author && <p>By: {article.author}</p>}
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
