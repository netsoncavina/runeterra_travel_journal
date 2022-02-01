import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export default function Champion(props) {
  const srcUrl = `images/champion/${props.name}.png`;
  const splashUrl = `images/splash/${props.name}_0.jpg`;
  return (
    <div className="card--champion--list">
      <Tippy
        interactive={true}
        content={
          <>
            <img className="card--champion--splash" src={splashUrl} />
            <p>
              {props.name} : {props.nick}
            </p>
          </>
        }
      >
        <img className="card--champion--icon" src={srcUrl} />
      </Tippy>
      {/* <h5>{props.name}</h5> */}
    </div>
  );
}
