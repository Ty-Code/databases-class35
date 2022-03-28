const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  // database: 'books',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySql connected.');
});

db.query('DROP DATABASE IF EXISTS books2', (error, result) => {
  if (error) throw error;
  console.log('Database has been dropped!');
});

let createDB = `CREATE DATABASE books2`;
db.query(createDB, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Database has been created!');
});

let useDB = `USE books2`;
db.query(useDB, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Database has been selected!');
});

let createTable = `CREATE TABLE authors(author_no int PRIMARY KEY, author_name varchar(100), university varchar(100), date_of_birth date, h_index int, gender enum('m', 'f'))`;
db.query(createTable, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Table authors has been created!');
});

let addColumn = `ALTER TABLE authors ADD COLUMN mentor int, ADD FOREIGN KEY (mentor) REFERENCES authors(author_no)`;
db.query(addColumn, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Column has been added!');
});

db.end();
