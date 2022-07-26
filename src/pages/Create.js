import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const Navigate = useNavigate();

  const { data, isPending, error, postData } = useFetch(
    "http://localhost:3000/articles",
    "POST"
  );

  const handleCreate = (e) => {
    e.preventDefault();
    postData({ title, author, body });
  };

  useEffect(() => {
    if (data) Navigate("/");
  }, [data, Navigate]);

  const handleCancel = () => {
    Navigate("/");
  };

  const handleReset = () => {
    setTitle("");
    setAuthor("");
    setBody("");
  };

  return (
    <div className="form">
      <h2>Create a Blog</h2>
      <form onSubmit={handleCreate}>
        <label>
          <span>Article Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Author:</span>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
        <label>
          <span>Article Body:</span>
          <textarea
            value={body}
            cols="30"
            rows="10"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </label>
        <div className="formBtns">
          <button>Create</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
