import logo from "./logo.svg";
import "./App.css";
import { useSatte, useEffect } from "react";

function App() {
  const [bbs, setBbs] = useState(["제목"]);
  const bbsList = bbs.map((dto) => {
    return <div>{dto.b_title}</div>;
  });
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <section></section>
    </>
  );
}

export default App;
