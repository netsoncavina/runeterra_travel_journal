import Champion from "./Champion";
import info from "../data";
import React from "react";
import { useState } from "react";
import Tippy from "@tippyjs/react";
import { Carousel } from "react-responsive-carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
import "bootstrap/dist/css/bootstrap.min.css";
import "tippy.js/dist/tippy.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Card(props) {
  console.log(props.languageCode);
  let championsList = props.champions;
  let champions = props.champions
    ? Object.keys(championsList).map((key) => {
        return (
          <Champion
            key={key}
            language={props.languageCode}
            {...championsList[key]}
          />
        );
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
    <div className="card">
      <Row>
        <div className="card--header">
          <div>
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
              <Image src={props.imageUrl} className="card--image" />
            </Tippy>
          </div>

          <div className="card--info">
            <div className="card--location">
              <Figure>
                <Figure.Image
                  width={30}
                  height={50}
                  src={props.iconUrl}
                  alt={`${props.title} crest`}
                  className="crest"
                />
              </Figure>
              <h5 className="card--h5">{props.location}</h5>
            </div>
            <h2>{props.title}</h2>
            {props.type && (
              <p>
                <span>Goverment type: </span>
                <span className="card--type">{props.type}</span>{" "}
              </p>
            )}
          </div>
        </div>
        <p>{props.description[props.language]}</p>
        <Row>
          <section className="card--champions">{champions}</section>
        </Row>
      </Row>
    </div>
  );
}
