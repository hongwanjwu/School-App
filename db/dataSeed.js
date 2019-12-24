const {Client} = require('pg');
const path = require('path');
const PG = require('../config.js');

const client = new Client({
  user: PG.user,
  database: 'school',
  password: PG.PW,
  port: 5432
});

client.connect(err => {
  if (err) {
    console.error('connection error', err.stack);
  } else {
    console.log('db connected');
  }
});

client
  .query(
    `copy teachers (fullName) from '${path.join(
      __dirname,
      '/data/teachers.csv'
    )}' delimiter '|' CSV HEADER;`
  )
  .then(() => {
    console.log('inserting students');
    return client.query(
      `copy students (fullName) from '${path.join(
        __dirname,
        '/data/students.csv'
      )}' delimiter '|' CSV HEADER;`
    );
  })
  .then(() => {
    console.log('inserting classes');
    return client.query(
      `copy classes (teacherId, className) from '${path.join(
        __dirname,
        '/data/classes.csv'
      )}' delimiter '|' CSV HEADER;`
    );
  })
  .then(() => {
    console.log('inserting classes students');
    return client.query(
      `copy classes_students (classId, studentId) from '${path.join(
        __dirname,
        '/data/clas_students.csv'
      )}' delimiter '|' CSV HEADER;`
    );
  })
  .then(() => {
    console.log('success!');
    client.end();
  })
  .catch(err => {
    console.log(err);
  });
