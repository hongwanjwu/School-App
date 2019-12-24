const {Client} = require('pg');
const PGPW = require('../config.js');

const client = new Client({
  user: 'mac_home',
  database: 'school',
  password: PGPW,
  port: 5432
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('db connected');
  }
});

module.exports = {
  getAll: (req, res) => {
    const info = {};
    client
      .query(`SELECT * FROM teachers`)
      .then(data => {
        info.teachers = data.rows;
        return client.query(`SELECT * FROM students`);
      })
      .then(data => {
        info.students = data.rows;
        return client.query(`SELECT * FROM classes`);
      })
      .then(data => {
        info.classes = data.rows;
        res.send(info);
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  }
};
