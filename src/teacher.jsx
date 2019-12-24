import React from 'react';

const Teacher = props => (
  <li
    onClick={() => {
      props.getStudents(props.teacher.teacherid);
    }}
  >
    Name: {props.teacher.fullname}
  </li>
);

export default Teacher;
