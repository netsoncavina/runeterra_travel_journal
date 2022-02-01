import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

export default function Champion(props) {
  const srcUrl = `images/champion/${props.name}.png`;
  return (
    <div className="card--champion--list">
      <Tippy
        content={
          <a>
            {props.name} : {props.nick}
          </a>
        }
      >
        <img className="card--champion--icon" src={srcUrl} />
      </Tippy>
      {/* <h5>{props.name}</h5> */}
    </div>
  );
}
