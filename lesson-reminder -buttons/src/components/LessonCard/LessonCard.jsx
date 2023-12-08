import React, { useState } from "react";
import Lesson from "../pages/Lesson";
import LessonStyle from "./Lesson.module.css";

const LessonCard = ({ lessons }) => {
  const [toggle, setToggle] = useState(true);

  const handleDelete = (e) => {
    setToggle(!toggle);
  };

  return (
    <div className={LessonStyle.lesson_reminder}>
      <h1 className={LessonStyle.reminder}>Lesson Reminder</h1>
      <div className={LessonStyle.main}>
        {lessons.map((lesson) => (
          <Lesson key={lesson.id} {...lesson} />
        ))}
        <div className={LessonStyle.delete_btn}>
          <button onClick={handleDelete}>Delete All</button>
        </div>
      </div>
     
    </div>
  );
};

export default LessonCard;
