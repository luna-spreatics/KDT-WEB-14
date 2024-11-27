import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function StudentDetail() {
  const { name } = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("name");

  const navigate = useNavigate();
  return (
    <div>
      <h5>
        학생의 이름은 <span style={{ color: "green" }}>{name}</span>
      </h5>
      {keyword && (
        <h5>
          실제 이름은 <span style={{ color: "red" }}>{keyword}</span>
        </h5>
      )}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </div>
  );
}
