DROP DATABASE IF EXISTS school;

CREATE DATABASE school;

\c school;

CREATE TABLE teachers (
  teacherId SERIAL NOT NULL,
  fullName VARCHAR(100),
  PRIMARY KEY (teacherId)
);

CREATE TABLE students (
  studentId SERIAL NOT NULL,
  fullName VARCHAR(100),
  PRIMARY KEY (studentId)
);

CREATE TABLE classes (
  classId SERIAL NOT NULL,
  teacherId INTEGER REFERENCES teachers(teacherId) ON DELETE CASCADE, 
  className VARCHAR(100),
  PRIMARY KEY (classId)
);

CREATE INDEX idx_teacherId on classes(teacherId);

CREATE TABLE classes_students (
  classId INTEGER REFERENCES classes(classId) ON DELETE CASCADE,
  studentId INTEGER REFERENCES students(studentId) ON DELETE CASCADE
);

CREATE INDEX idx_classId on classes_students(classId);