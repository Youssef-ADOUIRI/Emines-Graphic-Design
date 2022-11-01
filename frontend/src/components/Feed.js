import React from "react";
import ContentRec from "./ContentRec";
import axios from "axios";
import { useEffect, useState } from "react";

function Feed(props) {
  const n = props.number;
  const Url = "http://localhost:5000";

  const [loading, setLoading] = useState(true);
  const [homeProject, setHomeProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await axios.get(Url + "/api/projects/1").then((resp) => {
        return resp.data;
      });
      setHomeProject(resp);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (homeProject.length > 0 || !loading) {
    const url_path = homeProject[0].imgs[0].path_url;
    return (
      <div>
        <ContentRec title={homeProject[0].nom} color="5" isImg="0" />
        <ContentRec
          title={homeProject[0].nom}
          color="2"
          isImg="1"
          imgUrl={url_path}
        />
        <ContentRec title={homeProject[1].nom} color="3" isImg="0" />
        <ContentRec
          title={homeProject[1].nom}
          color="3"
          isImg="1"
          imgUrl={homeProject[1].imgs[0].path_url}
        />
      </div>
    );
  } else {
    return <div>Still loading</div>;
  }
}

export default Feed;
