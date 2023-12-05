import React from 'react'
import Lesson from '../pages/lesson'
import LessonStyle from './Lesson.module.css';

const LessonCard = ({lessons}) => {
    console.log(lessons);
  return (
    <div className={LessonStyle.lesson_reminder}>
      <h1 className={LessonStyle.reminder}>Lesson Reminder</h1>
      <div className={LessonStyle.main}>
        {lessons.map((lesson) => (
          <Lesson key={lesson.id} {...lesson} />
        ))}
      </div>
    </div>
  );
}

export default LessonCard