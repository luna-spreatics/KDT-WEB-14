import "./App.css";
import UseCallback2 from "./components/UseCallback2";
import UseCallbackEx1 from "./components/UseCallbackEx1";
import UseMemoEx from "./components/UseMemoEx";

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />

      <UseCallbackEx1 />
      <hr />

      <UseCallback2 postId={9} />
    </div>
  );
}

export default App;
