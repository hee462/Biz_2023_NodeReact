import logo from "./logo.svg";
import "./css/App.css";
import { useState, useEffect } from "react";
import BBsMain from "./compus/BbsMain";
import { hello } from "./modules/FetchModule";
import { BBsContextProvder } from "./provider/BBsProvider";

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>{title ? title : "React_Movie"}</p> */}
        <h1 class="fifth">{title ? title : "React_Movie"}</h1>
      </header>
      <BBsContextProvder>
        <BBsMain />
      </BBsContextProvder>
    </div>
  );
}

export default App;
