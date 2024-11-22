import React, { useState } from "react";
import LifeCycleFuncChild from "./LifeCycleFuncChild";

export default function LifeCycleFunc() {
  const [number, setNumber] = useState(0);
  const [visible, seVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    seVisible(!visible);
  };
  return (
    <>
      <div>LifeCycle Function</div>
      <button onClick={changeNumber}>PLUS</button>
      <button onClick={changeVisible}>ON/OFF</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </>
  );
}
