import React from "react";
import { Link } from "react-router-dom";

export default function StudentHeader() {
  const style = { margin: "4px" };

  return (
    <>
      <h2>ReactRouter 실습</h2>
      <nav>
        <ul>
          <li style={style}>
            <Link to="/student/kdt">학생</Link>
          </li>
          <li style={style}>
            <Link to="/student/codingon">코딩온</Link>
          </li>
          <li style={style}>
            <Link to="/student/new?name=kdt14th">searchParams</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
