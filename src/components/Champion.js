import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import info from "../data";
import { useState, useEffect } from "react";

function fixName(champion) {
  let name;
  if (champion == "Jarvan IV") {
    name = "JarvanIV";
  } else if (champion == "Renata Glasc") {
    name = "Renata";
  } else if (champion == "Wukong") {
    name = "MonkeyKing";
  } else {
    name = champion;
  }
  return name;
}

function getImage(champion) {
  if (champion == "Jarvan IV") {
    return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/JarvanIV.png`;
  } else if (champion == "Renata Glasc") {
    return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/Renata.png`;
  } else if (champion == "Wukong") {
    return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/MonkeyKing.png`;
  } else {
    return `https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${champion}.png`;
  }
}

export default function Champion(props) {
  const [skins, setSkins] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(async () => {
    let name = fixName(props.name);
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/12.4.1/data/${props.language}/champion/${name}.json`
    )
      .then((response) => response.json())
      .then((json) => {
        setSkins(json["data"][name]["skins"]);
        setTitle(json["data"][name]["title"]);
      }, []);
  });

  const srcUrl = getImage(props.name);

  const championSkins = Object.keys(skins).map((item) => {
    let name = fixName(props.name);
    return (
      <div>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skins[item]["num"]}.jpg`}
        />
        {item == 0 ? (
          <p>
            {props.name} {title}
          </p>
        ) : (
          <p>{skins[item]["name"]}</p>
        )}
      </div>
    );
  });

  return (
    <div className="card--champion--list">
      <Tippy
        interactive={true}
        content={
          <>
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              showStatus={false}
              showIndicators={false}
              showThumbs={false}
              interval={4000}
            >
              {championSkins}
            </Carousel>
          </>
        }
      >
        <img className="card--champion--icon" src={srcUrl} />
      </Tippy>
    </div>
  );
}
