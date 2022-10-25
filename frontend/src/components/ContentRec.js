import React from "react";
import "./ContentRec.css";
import { Link } from "react-router-dom";

function ContentRec(props) {
  let color = "black",
    fColor = "white";

  //Get the color from index enum
  switch (props.color) {
    case "1":
      color = "black";
      fColor = "white";
      break;
    case "2":
      color = "green";
      fColor = "white";
      break;
    case "3":
      color = "purple";
      fColor = "white";
      break;
    case "4":
      color = "linear-gradient(180deg, #96CC39 0%, #07D764 98.96%)";
      fColor = "white";
      break;
    case "5":
      color = "linear-gradient(180deg, #7B61FF 0%, #9747FF 98.96%)";
      fColor = "white";
      break;
    default:
      color = "black";
      fColor = "white";
      break;
  }
  let Styles = { background: color, color: fColor, backgroundSize: "cover" };

  if (props.isImg === "1") {
    const url_img = props.imgUrl;
    const back_img = "url(" + url_img + ")";
    Styles.backgroundImage = back_img;
  }

  return (
    <Link to="/project/default" style={{ textDecoration: "none" }}>
      <div className="container RecContent" style={Styles}>
        <div className="row title__RecContent">{props.title}</div>
        <div className="row">
          <div className="col subtitle__RecContent">
            ELX is a creative design studio based in Rabat and Founded in 2020
            by El Houssaine CHAHBOUN.
          </div>
          <div className="col subtitle__RecContent">
            ELX is a creative design studio based in Rabat and Founded in 2020
            by El Houssaine CHAHBOUN.
          </div>
          <div className="col subtitle__RecContent">
            ELX is a creative design studio based in Rabat and Founded in 2020
            by El Houssaine CHAHBOUN.
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ContentRec;
