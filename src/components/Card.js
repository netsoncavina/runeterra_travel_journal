import Champion from "./Champion";
import info from "../data";
import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export default function Card(props) {
  let championsList = props.champions;
  let champions = props.champions
    ? Object.keys(championsList).map((key) => {
        return <Champion key={key} {...championsList[key]} />;
      })
    : null;

  return (
    <div>
      <div className="card">
        <img className="card--image" src={props.imageUrl} />
        <div>
          <div className="card--info">
            <div className="card--location">
              <img className="card--icon" src={props.iconUrl}></img>
              <h5 className="card--h5">{props.location}</h5>
            </div>
            <h2>{props.title}</h2>
            {props.type && (
              <p>
                <span>Goverment type: </span>
                <span className="card--type">{props.type}</span>{" "}
              </p>
            )}
            <p>{props.description}</p>
            <Tippy
              // className="tippy"
              hideOnClick={false}
              interactive={true}
              content={
                <section className="card--champions">{champions}</section>
              }
            >
              <h6 className="card--champions--h5">Champions List</h6>
            </Tippy>
            <section className="card--champions">{champions}</section>
          </div>
        </div>
      </div>
    </div>
  );
}
