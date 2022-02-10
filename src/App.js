import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Champion from "./components/Champion";
import info from "./data";
import test from "./test";
import { useState } from "react";
import Flags from "country-flag-icons/react/3x2";

function App() {
  // test();
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
    console.log(item);
    return <Card key={item.id} language={language} {...item} />;
  });
  return (
    <>
      <Navbar />
      <div class="languages--selector">
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
