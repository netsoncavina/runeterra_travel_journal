import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import info from "./data";
import { useState } from "react";
import Flags from "country-flag-icons/react/3x2";
import Row from "react-bootstrap/Row";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [languageCode, setLanguageCode] = useState("en_US");
  const [language, setLanguage] = useState(2);
  const [flag, setFlag] = useState(
    <Flags.BR title="Brasil" className="flag" />
  );
  function changeLanguage() {
    let id = document.getElementById("lang");
    if (language === 0) {
      setLanguage(1);
      setLanguageCode("de_DE");
      id.innerHTML = "Deutsch";
      setFlag(<Flags.DE title="Deutschland" className="flag" />);
    } else if (language == 1) {
      setLanguage(2);
      setLanguageCode("pt_BR");
      id.innerHTML = "Português";
      setFlag(<Flags.BR title="Brasil" className="flag" />);
    } else {
      setLanguage(0);
      setLanguageCode("en_US");
      id.innerHTML = "English";
      setFlag(<Flags.GB title="United Kingdom" className="flag" />);
    }
  }
  const cards = info.map((item) => {
    return (
      <Card
        key={item.id}
        language={language}
        languageCode={languageCode}
        {...item}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Row>
        <div className="languages--selector">
          {flag}

          <span id="lang" onClick={changeLanguage}>
            Português
          </span>
        </div>
      </Row>

      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
