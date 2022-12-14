import { useState } from "react";
import "./App.css";

function AddBtn({ handle }) {
  return (
    <button className="btn" onClick={handle}>
      <span>+</span>
    </button>
  );
}

function MinusBtn({ handle }) {
  return (
    <button onClick={handle} className="btn">
      <span>-</span>
    </button>
  );
}

function Counter({ count }) {
  return (
    <div className="btn">
      <span>{count}</span>
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
    <>
      <Counter count={count} />
      <AddBtn handle={handlePlus} />
      {count ? <MinusBtn handle={handleMinus} /> : ""}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <AppContainer />
    </div>
  );
}

export default App;
