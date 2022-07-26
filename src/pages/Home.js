import React from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Home.css";
import ArticlesList from "../components/ArticlesList";

export default function Home() {
  const url = "http://localhost:3000/articles";
  const { data: articles, isPending, error } = useFetch(url);

  return (
    <div>
      <div className="pageHead">
        <h2>Articles</h2>
        <Link to="/Create">Create New Blog</Link>
      </div>
      <div className="home">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {articles && <ArticlesList articles={articles} />}
      </div>
    </div>
  );
}
