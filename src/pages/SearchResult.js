import React from "react";
import { useLocation } from "react-router-dom";
import ArticlesList from "../components/ArticlesList";
import { useFetch } from "../hooks/useFetch";
import "./SearchResult.css";

export default function SearchResult() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");
  const url = "http://localhost:3000/articles?q=" + query;
  const { data, isPending, error } = useFetch(url);

  return (
    <div className="resultHead">
      {data && data.length === 0 && <h2>No Search Result for "{query}"</h2>}
      {(isPending || error) && !query && <h2>Search Result</h2>}
      {data && data.length !== 0 && <h2>Search Result for "{query}"</h2>}
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <ArticlesList articles={data} />}
    </div>
  );
}
