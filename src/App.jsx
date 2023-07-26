import { useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState("0");
  function handleClick(e) {
    setTotal(total.concat(e.target.value));
  }
  function handleClear() {
    setTotal("");
  }
  function handleDelete() {
    setTotal(total.slice(0, -1));
  }
  function Calculate() {
    try {
      setTotal(eval(total).toString());
    } catch {
      setTotal("Error");
    }
  }
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container">
        <form>
          <input type="text" value={total} />
        </form>
        <div className="keypad">
          <button onClick={handleClear} className="highlight" id="clear">
            AC
          </button>
          <button onClick={handleDelete} className="highlight">
            DEL
          </button>
          <button className="highlight" value="/">
            &divide;
          </button>
          <button onClick={handleClick} value="7">
            7
          </button>
          <button onClick={handleClick} value="8">
            8
          </button>
          <button onClick={handleClick} value="9">
            9
          </button>
          <button onClick={handleClick} value="*" className="highlight">
            &times;
          </button>
          <button onClick={handleClick} value="4">
            4
          </button>
          <button onClick={handleClick} value="5">
            5
          </button>
          <button onClick={handleClick} value="6">
            6
          </button>
          <button onClick={handleClick} value="-" className="highlight">
            -
          </button>
          <button onClick={handleClick} value="1">
            1
          </button>
          <button onClick={handleClick} value="2">
            2
          </button>
          <button onClick={handleClick} value="3">
            3
          </button>
          <button onClick={handleClick} value="+" className="highlight">
            +
          </button>
          <button onClick={handleClick} value="0">
            0
          </button>
          <button onClick={handleClick} value=".">
            .
          </button>
          <button onClick={Calculate} className="highlight" id="equal">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
