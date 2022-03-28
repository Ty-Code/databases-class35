const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  // database: 'meetup',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySql connected.');
});

db.query("DROP DATABASE IF EXISTS meetup", (error, result) => {
  if (error) throw error;
  console.log("Database has been dropped!");
});

let createDB = `CREATE DATABASE meetup`;
db.query(createDB, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Database has been created!');
});

let useDB = `USE meetup`;
db.query(useDB, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Database has been selected!');
});

let createTable1 = `CREATE TABLE Invitee(invitee_no int AUTO_INCREMENT PRIMARY KEY, invitee_name VARCHAR(100), invited_by VARCHAR(100))`;
db.query(createTable1, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Table Invitee created!');
});

let createTable2 = `CREATE TABLE Room(room_no int, room_name VARCHAR(100), floor_number int)`;
db.query(createTable2, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Table Room created!');
});

let createTable3 = `CREATE TABLE Meeting(meeting_no int, meeting_title VARCHAR(100), starting_time datetime, ending_time datetime, room_no int)`;
db.query(createTable3, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Table Meeting created!');
});

let insertRowsTable1 = `INSERT INTO Invitee (invitee_name, invited_by) VALUES('Gandalf', 'Elrond'), ('Aragorn', 'Arwen'), ('Legolas', 'Elrond'), ('Gimli', 'Elrond'),('Frodo','Bilbo')`;
db.query(insertRowsTable1, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Values added!');
});

let insertRowsTable2 = `INSERT INTO Room VALUES(101, 'Rivendell', 0), (102, 'Isengard', 0), (103, 'Minas Trith', 1), (104, 'Minas Morgul', 1),(105, 'Lothlorien', 2)`;
db.query(insertRowsTable2, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Values added!');
});

let insertRowsTable3 = `INSERT INTO Meeting VALUES (001, 'First Meeting', '1000-01-01 00:00:00', '1000-01-01 01:00:00', 101), (002, 'Second Meeting', '1000-01-01 05:00:00', '1000-01-01 06:00:00', 102), (003, 'Third Meeting', '1000-01-01 09:00:00', '1000-01-01 11:00:00', 103), (004, 'Fourth Meeting', '1000-01-01 13:00:00', '1000-01-01 15:00:00', 104),(005, 'Fifth Meeting', '1000-01-01 17:00:00', '1000-01-01 21:00:00', 105)`;
db.query(insertRowsTable3, (err, result) => {
  if (err) throw err;
  console.log(result);
  console.log('Values added!');
});

db.end();
