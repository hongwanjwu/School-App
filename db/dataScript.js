const Promise = require('bluebird');
const faker = require('faker');
const fs = Promise.promisifyAll(require('fs'));

const writeTeachers = fs.createWriteStream('teachers.csv');
const writeStudents = fs.createWriteStream('students.csv');
const writeClasses = fs.createWriteStream('classes.csv');
const writeClasStudents = fs.createWriteStream('clas_students.csv');

const writeCSV = (table, writer, cb) => {
  const encoding = 'utf-8';
  let i =
    table === 'teachers'
      ? 10
      : table === 'students'
      ? 300
      : table === 'classes'
      ? 20
      : 1200;

  const write = () => {
    let ok = true;
    let data = [];

    do {
      if (table === 'teachers' || 'students') {
        const fullName = faker.name.findName();
        data.push(fullName + '\n');
        data = data.join('');
      }

      if (table === 'classes') {
        const teacherId = Math.floor(Math.random() * 19) + 1;
        const className = faker.lorem.word();

        data = [teacherId, className + '\n'].join('|');
      }

      if (table === 'clas_students') {
        const classId = Math.floor(Math.random() * 20) + 1;
        const studentId = Math.floor(Math.random() * 300) + 1;

        data = [classId, studentId + '\n'].join('|');
      }

      i--;

      if (i === 0) {
        writer.write(data, encoding, cb);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      writer.once('drain', write);
    }
  };

  write();
};

writeCSV('teachers', writeTeachers, () => {
  console.log('writing teachers');
  writeTeachers.end();
});

writeCSV('students', writeStudents, () => {
  console.log('writing students');
  writeStudents.end();
});

writeCSV('classes', writeClasses, () => {
  console.log('writing classes');
  writeClasses.end();
});

writeCSV('clas_students', writeClasStudents, () => {
  console.log('writing classes students');
  writeClasStudents.end();
});
