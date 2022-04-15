/* ANSWER TO QUESTION 1: 
Example value: ' or ''='
 */

const prompt = require('prompt');
const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'world',
  multipleStatements: true,
});

const input = util.promisify(prompt.get.bind(this));

function getPopulation(table, name, code, cb) {
  connection.query(
    'SELECT Population FROM ' +
      connection.escape(table).slice(1, -1) +
      ' WHERE Name = ' +
      connection.escape(name) +
      ' and code = ' +
      connection.escape(code),
    function (err, result) {
      if (err) cb(err);
      if (result.length == 0) cb(new Error('Not found'));
      cb(null, result);
    }
  );
}

function cb(err, result) {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(result);
}

async function queryDatabase() {
  prompt.start();
  try {
    const { table_name: tableName } = await input(['table_name']);
    const { country_name: countryName } = await input(['country_name']);
    const { country_code: countryCode } = await input(['country_code']);

    connection.connect();

    getPopulation(tableName, countryName, countryCode, cb);
  } catch (error) {
    console.error(error);
  }

  connection.end();
}

queryDatabase();
