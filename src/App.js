import "./App.css";

function AddBtn() {
  return <h1>AddBtn</h1>;
}

function MinusBtn() {
  return <h1>MinusBtn</h1>;
}

function Counter() {
  return <h1>Counter</h1>;
}

function AppContainer() {
  return (
    <>
      <Counter />
      <AddBtn />
      <MinusBtn />
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
