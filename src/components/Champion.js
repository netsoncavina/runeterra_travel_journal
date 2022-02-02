import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import info from "../data";

export default function Champion(props) {
  const srcUrl = `images/champion/${props.name}.png`;
  const splashUrl = `images/splash/${props.name}_0.jpg`;
  const skins = props.skins;
  const championSkins = props.skins ? (
    Object.keys(skins).map((item) => {
      return (
        <div>
          <img src={skins[item].splashUrl} />
          <p>{skins[item].description}</p>
        </div>
      );
    })
  ) : (
    <div>
      <img src={splashUrl} />
      <p>
        {props.name} : {props.nick}
      </p>
    </div>
  );
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
              interval={1000}
            >
              {championSkins}
            </Carousel>

            {/* //<img className="card--champion--splash" src={splashUrl} /> */}
          </>
        }
      >
        <img className="card--champion--icon" src={srcUrl} />
      </Tippy>
      {/* <h5>{props.name}</h5> */}
    </div>
  );
}
