import React from "react";
import "./ContentRec.css";
import { NavLink } from "react-router-dom";

function ContentRec(props) {
  //Get the color from index enum
  // switch (props.color) {
  //   case "1":
  //     color = "black";
  //     fColor = "white";
  //     break;
  //   case "2":
  //     color = "green";
  //     fColor = "white";
  //     break;
  //   case "3":
  //     color = "purple";
  //     fColor = "white";
  //     break;
  //   case "4":
  //     color = "linear-gradient(180deg, #96CC39 0%, #07D764 98.96%)";
  //     fColor = "white";
  //     break;
  //   case "5":
  //     color = "linear-gradient(180deg, #7B61FF 0%, #9747FF 98.96%)";
  //     fColor = "white";
  //     break;
  //   default:
  //     color = "black";
  //     fColor = "white";
  //     break;
  // }
  let Styles = {
    color: "white",
    backgroundSize: "cover",
    background:
      "linear-gradient(180deg," +
      props.hex1 +
      " 0%, " +
      props.hex2 +
      " 98.96%)",
  };

  if (props.isImg === true) {
    const url_img = props.imgUrl;
    console.log(props.imgUrl);
    const back_img = "url(" + url_img + ")";
    Styles.backgroundImage = back_img;
  }

  return (
    <NavLink to={"/project/" + props.title} style={{ textDecoration: "none" }}>
      <div
        className="RecContent container full-height d-flex flex-column"
        style={Styles}
      >
        <div className="row title__RecContent">{props.title}</div>
        <div className="row mt-auto">
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
    </NavLink>
  );
}

export default ContentRec;
