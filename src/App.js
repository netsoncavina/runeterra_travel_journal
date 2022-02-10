import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Champion from "./components/Champion";
import info from "./data";
import test from "./test";
import { useState } from "react";

function App() {
  // test();
  const [language, setLanguage] = useState(2);
  function changeLanguage() {
    if (language === 2) {
      setLanguage(0);
    } else {
      setLanguage(language + 1);
    }
  }
  const cards = info.map((item) => {
    console.log(item);
    return <Card key={item.id} language={language} {...item} />;
  });
  return (
    <>
      <Navbar />
      <button className="card--button" onClick={changeLanguage}>
        button
      </button>
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
