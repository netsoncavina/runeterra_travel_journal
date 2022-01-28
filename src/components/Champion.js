export default function Champion(props) {
  const srcUrl = `images/champion/${props.name}.png`;
  return (
    <div className="card--champion--list">
      <img className="card--champion--icon" src={srcUrl} />
      <h5>{props.name}</h5>
    </div>
  );
}
