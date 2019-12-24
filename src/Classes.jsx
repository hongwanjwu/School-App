import React from 'react';
import Class from './class.jsx';

const Classes = props => (
  <ul>
    Classes
    {props.classes.map(schoolClass => (
      <Class schoolClass={schoolClass} key={schoolClass.classid} />
    ))}
  </ul>
);

export default Classes;
