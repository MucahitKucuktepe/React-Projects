import React from "react";
import LessonStyle from "../LessonCard/Lesson.module.css";

const lesson = ({ name, hour, image }) => {
  return (
    <div className={LessonStyle.lessons}>
      <div>
        <img className={LessonStyle.lesson_img} src={image} alt="" />
      </div>
      <div className={LessonStyle.info}>
        <h4 className={LessonStyle.lesson_name}>Lesson Name: {name}</h4>
        <h4 className={LessonStyle.lesson_hour}>Lesson Hour: {hour}</h4>
      </div>
    </div>
  );
};

export default lesson;
