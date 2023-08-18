import logo from "./logo.svg";
import "./css/App.css";
import BuMain from "./compus/BuMain";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>오늘은 내생에 가장 젊은날</h1>
      <BuMain />
    </div>
  );
}

export default App;
