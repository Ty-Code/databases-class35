const mysql = require('mysql');

//Create connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'world',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySql connected.');
});

let query1 = `SELECT name FROM country WHERE population > 8000000`
db.query(query1, (error, result) => {
  if (error) throw error;
  console.log(result);
});

let query2 = `SELECT name FROM country WHERE name LIKE '%land%'`
db.query(query2, (error, result) => {
  if (error) throw error;
  console.log(result);
});

let query3 = `SELECT name FROM city WHERE population BETWEEN 500000 AND 999999`
db.query(query3, (error, result) => {
  if (error) throw error;
  console.log(result);
});

let query4 = `SELECT name FROM country WHERE continent = 'Europe'`;
db.query(query4, (error, result) => {
  if (error) throw error;
  console.log(result);
});

let query5 = `SELECT name FROM country ORDER BY surfaceArea DESC`;
db.query(query5, (error, result) => {
  if (error) throw error;
  console.log(result);
});

let query6 = `SELECT name FROM city WHERE countryCode = 'NLD'`;
db.query(query6, (error, result) => {
  if (error) throw error;
  console.log(result);
});

let query7 = `SELECT population FROM city WHERE name = 'Rotterdam'`;
db.query(query7, (error, result) => {
  if (error) throw error;
  console.log(result);
});

let query8 = `SELECT name FROM country ORDER BY surfaceArea DESC LIMIT 10`;
db.query(query8, (error, result) => {
  if (error) throw error;
  console.log(result);
});

let query9 = `SELECT name FROM city ORDER BY population DESC LIMIT 10`;
db.query(query9, (error, result) => {
  if (error) throw error;
  console.log(result);
});

let query10 = `SELECT Sum(population) AS 'World Population' FROM country `;
db.query(query10, (error, result) => {
  if (error) throw error;
  console.log(result);
});

db.end();
