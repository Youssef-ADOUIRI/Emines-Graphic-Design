import React from "react";
import { useParams } from "react-router-dom";

function Project() {
  const output = useParams();
  return <div>Project : {output.prjId}</div>;
}

export default Project;