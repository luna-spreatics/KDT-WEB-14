import "./App.css";
import ExClass from "./ExClass";
import ExFunction from "./ExFunction";
import RefClass1 from "./RefClass1";
import RefClass2 from "./RefClass2";
import RefFunction1 from "./RefFunction1";
import RefFunction2 from "./RefFunction2";

function App() {
  return (
    <div className="App">
      <RefClass1 />
      <hr />

      <RefClass2 />
      <hr />

      <ExClass />
      <hr />

      <RefFunction1 />
      <RefFunction1 />
      <hr />

      <RefFunction2 />
      <hr />

      <ExFunction />
    </div>
  );
}

export default App;
