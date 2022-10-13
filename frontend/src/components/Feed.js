import React from "react";
import ContentRec from "./ContentRec";
import axios from "axios";
import { useEffect, useState } from "react";

function Feed(props) {
  const n = props.number;
  const Url = "http://localhost:5000";
  let sections = [];

  const [loading, setLoading] = useState(true);
  const [homeProject, setHomeProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await axios.get(Url + "/API/1").then((resp) => {
        return resp.data;
      });
      setHomeProject(resp);
      setLoading(false);
      console.log(resp);
      console.log(homeProject);
    };
    fetchData();
  }, []);

  if (homeProject.length > 0) {
    return (
      <div>
        <ContentRec
          title="Empowering Moroccan creators/"
          color="2"
          isImg="1"
          imgUrl={toString((homeProject[0].imgs)[0].path_url)}
        />
      </div>
    );
  } else {
    return <div>Still loading</div>;
  }
}

export default Feed;
