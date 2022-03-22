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

// let sql = `SELECT name FROM country WHERE population > 8000000`
// db.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

// let sql = `SELECT name FROM country WHERE name LIKE '%land%'`
// db.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

// let sql = `SELECT name FROM city WHERE population BETWEEN 500000 AND 999999`
// db.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

// let sql = `SELECT name FROM country WHERE continent = 'Europe'`;
// db.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

// let sql = `SELECT name FROM country ORDER BY surfaceArea DESC`;
// db.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

// let sql = `SELECT name FROM city WHERE countryCode = 'NLD'`;
// db.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

// let sql = `SELECT population FROM city WHERE name = 'Rotterdam'`;
// db.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

// let sql = `SELECT name FROM country ORDER BY surfaceArea DESC LIMIT 10`;
// db.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

// let sql = `SELECT name FROM city ORDER BY population DESC LIMIT 10`;
// db.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

// let sql = `SELECT Sum(population) AS 'World Population' FROM country `;
// db.query(sql, (error, result) => {
//   if (error) throw error;
//   console.log(result);
// });

db.end();
