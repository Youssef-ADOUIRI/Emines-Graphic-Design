import React, { useEffect, useState } from "react";
import "./News.css";
import axios from "axios";

function News() {
  const api_url_blog = "/api/blogs/getall/-1";
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlog = async () => {
      setLoading(true);
      const resp = await axios
        .get(api_url_blog)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      setBlogs(resp);
    };
    getBlog();
  }, []);
  if (blogs.length > 0 || !loading) {
    return (
      <div className="container UpdatesRec">
        <div className="row title__updates">Latest updates</div>
        <div className="row">
          <div className="col mx-3 my-3">
            <h2>{blogs[0].title}</h2>
            <p className="lead py-2">{blogs[0].date}</p>
          </div>
          <div className="col mx-3 my-3">
            <h2>{blogs[1].title}</h2>
            <p className="lead">{blogs[1].date}</p>
          </div>
          <div className="col mx-3 my-3">
            <h2>{blogs[2].title}</h2>
            <p className="lead">{blogs[2].date}</p>
          </div>
        </div>
        <div className="row">
          <div className="col mx-3 my-3">
            <h2>{blogs[3].title}</h2>
            <p className="lead">{blogs[3].date}</p>
          </div>
          <div className="col mx-3 my-3">
            <h2>{blogs[4].title}</h2>
            <p className="lead">{blogs[4].date}</p>
          </div>
          <div className="col mx-3 my-3">
            <h2>{blogs[5].title}</h2>
            <p className="lead">{blogs[5].date}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
