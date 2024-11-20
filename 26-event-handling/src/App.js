import "./App.css";
import ClassBind from "./ClassBind";
import Counter from "./Counter";
import Ex2 from "./Ex2";
import Ex3 from "./Ex3";
import ExAll from "./exAll/ExAll";
import SyntheticEvent from "./SyntheticEvent";

function App() {
  return (
    <div className="App">
      {/* 합성 이벤트 */}
      <SyntheticEvent />
      <hr />

      {/* 클래스형 컴포넌트 */}
      <ClassBind />

      {/* 함수형 컴포넌트 */}
      <Counter />
      <hr />

      {/* 실습 */}
      <Ex2 />
      <hr />
      <Ex3 />
      <hr />

      <ExAll />
    </div>
  );
}

export default App;
