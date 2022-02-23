import runeterraIcon from "../images/Runeterra_Crest_icon.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Figure from "react-bootstrap/Figure";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <Row>
      <Col>
        <nav>
          <div className="navbar">
            <Figure>
              <Figure.Image
                width={30}
                height={30}
                src={runeterraIcon}
                alt="Runeterra Icon"
                className="logo"
              />
            </Figure>
            <h5>Runeterra travel journal</h5>
          </div>
        </nav>
      </Col>
    </Row>
  );
}
