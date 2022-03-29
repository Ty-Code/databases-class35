const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  // database: 'research_projects',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('MySql connected.');
});

const execQuery = (query) => {
  connection.query(query, (error, results) => {
    if (error) {
      throw error;
    } else {
      console.table(results);
    }
  });
};

const dropDatabase = `DROP DATABASE IF EXISTS research_projects`;
const createDatabase = `CREATE DATABASE research_projects`;
const useDatabase = `USE research_projects`;
const createTable = `CREATE TABLE authors(
  author_no int PRIMARY KEY AUTO_INCREMENT,
  author_name varchar(100),
  university varchar(100),
  date_of_birth date,
  h_index int,
  gender enum('m', 'f'))`;
const addColumn = `ALTER TABLE authors 
ADD COLUMN mentor int,
ADD FOREIGN KEY (mentor)
REFERENCES authors(author_no)`;

const commands = [dropDatabase, createDatabase, useDatabase, createTable, addColumn];

commands.forEach((command) => execQuery(command));

connection.end();
