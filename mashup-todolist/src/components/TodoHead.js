import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

const TodoHead = ({ tasks }) => {
  let today = new Date();
  let year = today.getFullYear();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let week = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = week[new Date("2016-07-28").getDay()];
  let dateString = year + "년 " + month + "월 " + day + "일";

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayOfWeek + "요일"}</div>
      <div className="tasks-left">할 일 {tasks}개 남음</div>
    </TodoHeadBlock>
  );
};

export default TodoHead;
