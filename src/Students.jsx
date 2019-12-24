import React from 'react';
import Student from './student.jsx';

const Students = props => (
  <ul>
    Students
    {props.students.map(student => (
      <Student student={student} key={student.studentid} />
    ))}
  </ul>
);

export default Students;
