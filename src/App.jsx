import "./App.css";
import divider from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ slip: {} });

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="card">
      <p>Advice #{data.slip.id}</p>
      <h3>&ldquo;{data.slip.advice} &rdquo;</h3>
      <img
        src={divider}
        alt="divider"
        width="100%"
        style={{ marginBottom: "1.5rem" }}
      />
      <div className="dice" onClick={fetchData}>
        <img src={dice} alt="dice roller" width={20} />
      </div>
    </div>
  );
}

export default App;
