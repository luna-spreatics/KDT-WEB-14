import React, { useState } from "react";

export default function Ex3() {
  const [display, changeDisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          changeDisplay(!display);
        }}
      >
        {display ? "사라져라" : "보여라"}
      </button>
      {display && <h4>안녕하세요</h4>}
    </div>
  );
}
