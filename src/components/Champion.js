export default function Champion(props) {
  const srcUrl = `images/champion/${props.name}.png`;
  return <img className="card--champion--icon" src={srcUrl} />;
}
