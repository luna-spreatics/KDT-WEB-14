import React, { Component, createRef } from "react";

export default class ExClass extends Component {
  state = {
    comment: [
      {
        writer: "민수",
        title: "안녕",
      },
    ],
  };

  writerRef = createRef();
  titleRef = createRef();

  checkInputValue = () => {
    const inputWriter = this.writerRef.current.value;
    const inputTitle = this.titleRef.current.value;

    if (inputWriter.trim().length === 0) {
      this.writerRef.current.focus();
      return false;
    }
    if (inputTitle.trim().length === 0) {
      this.titleRef.current.focus();
      return false;
    }
    return true;
  };

  addComment = () => {
    if (!this.checkInputValue()) return;

    const newComment = {
      writer: this.writerRef.current.value,
      title: this.titleRef.current.value,
    };

    this.setState((prevState) => {
      return { comment: [...prevState.comment, newComment] };
    });

    this.writerRef.current.value = "";
    this.titleRef.current.value = "";
  };
  render() {
    const { comment } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="writer">작성자 : </label>
          <input type="text" id="writer" ref={this.writerRef} />
          <label htmlFor="title">제목 : </label>
          <input type="text" id="title" ref={this.titleRef} />
          <button type="button" onClick={this.addComment}>
            작성
          </button>
        </form>

        <table
          border={1}
          cellSpacing={0}
          style={{ marginTop: "30px", width: "500px" }}
        >
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
          <tbody>
            {comment.map((value, idx) => {
              return (
                <tr key={idx + 1}>
                  <td>{idx + 1}</td>
                  <td>{value.title}</td>
                  <td>{value.writer}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
