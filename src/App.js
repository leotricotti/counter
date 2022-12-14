import { useState } from "react";
import "./App.css";

function AddBtn({ handle }) {
  return (
    <button className="btn btn-plus" onClick={handle}>
      <span>+</span>
    </button>
  );
}

function MinusBtn({ handle }) {
  return (
    <button onClick={handle} className="btn btn-minus">
      <span>─</span>
    </button>
  );
}

function Counter({ count }) {
  return (
    <div className="counter">
      <span className="count">{count}</span>
    </div>
  );
}

function AppContainer() {
  let [count, setCount] = useState(0);

  const handleMinus = () => {
    let result = (count -= 1);
    setCount(result);
  };

  const handlePlus = () => {
    let result = (count += 1);
    setCount(result);
  };

  return (
    <main className="appContainer">
      <Counter count={count} />
      <AddBtn handle={handlePlus} />
      {count ? <MinusBtn handle={handleMinus} /> : ""}
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <AppContainer />
    </div>
  );
}

export default App;
