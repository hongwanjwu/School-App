import React from 'react';
import request from 'request.js';

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
}

export default App;
