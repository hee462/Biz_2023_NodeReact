import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Input from "./comps/Input";

function Num() {
  // int sum = sum(30, 40);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const puls = () => {
    setNum1(num1 + num2);
  };
  const mius = () => {
    setNum1(num1 - num2);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          덧셈 : {num1}+{num2} = setNum1
        </div>
        <div>
          뺄셈 : {num2}-{num1} = setNum1
        </div>
        <Input />
      </header>
    </div>
  );
}

export default App;
