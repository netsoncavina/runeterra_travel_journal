import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import info from "./data";
import { useState } from "react";
import Flags from "country-flag-icons/react/3x2";

function App() {
  const [language, setLanguage] = useState(2);
  const [flag, setFlag] = useState(
    <Flags.BR title="Brasil" className="flag" />
  );
  function changeLanguage() {
    let id = document.getElementById("lang");
    if (language === 0) {
      setLanguage(1);
      id.innerHTML = "Deutsch";
      setFlag(<Flags.DE title="Deutschland" className="flag" />);
    } else if (language == 1) {
      setLanguage(2);
      id.innerHTML = "Português";
      setFlag(<Flags.BR title="Brasil" className="flag" />);
    } else {
      setLanguage(0);
      id.innerHTML = "English";
      setFlag(<Flags.GB title="United Kingdom" className="flag" />);
    }
  }
  const cards = info.map((item) => {
    return <Card key={item.id} language={language} {...item} />;
  });
  return (
    <>
      <Navbar />

      <div className="languages--selector">
        {flag}

        <span id="lang" onClick={changeLanguage}>
          Português
        </span>
      </div>
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
