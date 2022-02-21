import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import info from "./data";
import { useState } from "react";
import Flags from "country-flag-icons/react/3x2";

async function getSkin(champion) {
  const data = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion/${champion}.json`
  );
  const json = await data.json();
  const skins = await json["data"][champion]["skins"];
  const championSkins = Object.keys(skins).map((item) => {
    console.log(skins[item]["name"]);
  });

  return championSkins;
}

function getSkins(champion) {
  let name = champion;
  const data = fetch(
    `http://ddragon.leagueoflegends.com/cdn/12.4.1/data/en_US/champion/${name}.json`
  )
    .then((response) => response.json())
    .then((json) => {
      console.log(json["data"]["title"]);
    });
}

function App() {
  const skins = getSkins("Draven");

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
      {skins}
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
