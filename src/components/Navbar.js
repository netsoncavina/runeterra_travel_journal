import runeterraIcon from "../images/Runeterra_Crest_icon.png";

export default function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <img className="logo" src={runeterraIcon} />
        <h5>Runeterra travel journal</h5>
      </div>
    </nav>
  );
}
