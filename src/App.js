import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Champion from "./components/Champion";
import info from "./data";
import test from "./test";

function App() {
  // test();
  const cards = info.map((item) => {
    return <Card key={item.id} {...item} />;
  });
  return (
    <>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </>
  );
}

export default App;
