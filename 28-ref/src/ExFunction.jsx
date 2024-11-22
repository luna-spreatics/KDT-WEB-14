import { useRef, useState } from "react";

export default function ExFunction() {
  const [comment, setComment] = useState([
    {
      writer: "민수",
      title: "안녕",
    },
  ]);

  const writerRef = useRef(null);
  const titleRef = useRef(null);

  const checkInputValue = () => {
    const inputWriter = writerRef.current.value;
    const inputTitle = titleRef.current.value;

    if (inputWriter.trim().length === 0) {
      writerRef.current.focus();
      return false;
    }
    if (inputTitle.trim().length === 0) {
      titleRef.current.focus();
      return false;
    }
    return true;
  };

  const addComment = () => {
    if (!checkInputValue()) return;

    const newComment = {
      writer: writerRef.current.value,
      title: titleRef.current.value,
    };

    setComment([...comment, newComment]);

    writerRef.current.value = "";
    titleRef.current.value = "";
  };

  return (
    <div>
      <form>
        <label htmlFor="writer">작성자 : </label>
        <input type="text" id="writer" ref={writerRef} />
        <label htmlFor="title">제목 : </label>
        <input type="text" id="title" ref={titleRef} />
        <button type="button" onClick={addComment}>
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
