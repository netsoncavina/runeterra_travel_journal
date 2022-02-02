import Champion from "./Champion";
import info from "../data";
import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Card(props) {
  let championsList = props.champions;
  let champions = props.champions
    ? Object.keys(championsList).map((key) => {
        return <Champion key={key} {...championsList[key]} />;
      })
    : null;
  const wallpapersList = props.wallpapers;
  const wallpapers = props.wallpapers
    ? Object.keys(wallpapersList).map((key) => {
        return (
          <div>
            <img src={wallpapersList[key].url} />
            <p>{wallpapersList[key].title}</p>
          </div>
        );
      })
    : null;

  return (
    <div>
      <div className="card">
        <Tippy
          interactive={true}
          placement="right"
          content={
            <>
              <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={2000}
                className="card--wallpaper-carousel"
              >
                {wallpapers}
              </Carousel>
            </>
          }
        >
          <img className="card--image" src={props.imageUrl} />
        </Tippy>
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
            {/* <Tippy
              hideOnClick={false}
              interactive={true}
              content={
                <section className="card--champions">{champions}</section>
              }
            >
              <h6 className="card--champions--h5">Champions List</h6>
            </Tippy> */}
            <section className="card--champions">{champions}</section>
          </div>
        </div>
      </div>
    </div>
  );
}
