import React from 'react';
import Teacher from './teacher.jsx';

const Teachers = props => (
  <ul>
    Teachers
    {props.teachers.map(teacher => (
      <Teacher
        teacher={teacher}
        key={teacher.teacherid}
        getStudents={props.getStudents}
      />
    ))}
  </ul>
);

export default Teachers;
