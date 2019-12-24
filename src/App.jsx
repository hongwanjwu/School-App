import React from 'react';
import request from './request.js';
import Teachers from './Teachers.jsx';
import Students from './Students.jsx';
import Classes from './Classes.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      teachers: [],
      students: [],
      classes: [],
      selected: []
    };

    this.getStudents = this.getStudents.bind(this);
  }

  componentDidMount() {
    request.getAll(info => {
      const teachers = info.teachers;
      const students = info.students;
      const classes = info.classes;
      this.setState({teachers, students, classes});
    });
  }

  getStudents(teacherId) {
    request.getStudents(teacherId, info => {
      const students = info.students;
      const classes = info.classes;
      this.setState({students, classes});
    });
  }

  render() {
    return (
      <div>
        <Teachers
          teachers={this.state.teachers}
          selected={this.state.selected}
          getStudents={this.getStudents}
        />
        <Classes classes={this.state.classes} />
        <Students students={this.state.students} />
      </div>
    );
  }
}

export default App;
