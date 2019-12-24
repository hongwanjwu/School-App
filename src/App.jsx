import React from 'react';
import request from './request.js';
import Teachers from './Teachers.jsx';
import Students from './Students.jsx';
import Classes from './Classes.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      teachers: [],
      students: [],
      classes: [],
      selected: []
    };
  }

  componentDidMount() {
    request.getAll(info => {
      const teachers = info.teachers;
      const students = info.students;
      const classes = info.classes;
      this.setState({teachers, students, classes});
    });
  }

  render() {
    return (
      <div>
        <Teachers
          teachers={this.state.teachers}
          selected={this.state.selected}
        />
        <Classes classes={this.state.classes} />
        <Students students={this.state.students} />
      </div>
    );
  }
}

export default App;
