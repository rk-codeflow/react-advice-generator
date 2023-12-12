import "./App.css";
import divider from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const result = await response.json();
        setData(result);
        console.log("result", result);
        console.log(result.slip.advice);
      } catch (error) {
        console.log("Error getting data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card">
      <p>Advice #117</p>
      <h3>&ldquo; fjfjf &rdquo;</h3>
      <img
        src={divider}
        alt="divider"
        width="100%"
        style={{ marginBottom: "1.5rem" }}
      />
      <div className="dice">
        <img src={dice} alt="dice roller" width={20} />
      </div>
    </div>
  );
}

export default App;
