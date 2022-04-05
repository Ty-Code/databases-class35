const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  // database: 'bank',
});

const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {

  const dropDatabase = `DROP DATABASE IF EXISTS bank`;

  const createDatabase = `CREATE DATABASE bank`;

  const useDatabase = `USE bank`;

  const createTableAccount = `CREATE TABLE account(
    account_number int PRIMARY KEY AUTO_INCREMENT,
    balance float)
    AUTO_INCREMENT = 101`;

  const createTableAccountChanges = `CREATE TABLE account_changes(
  change_number int PRIMARY KEY AUTO_INCREMENT,
  account_number int,
  amount float,
  changed_date date,
  remark varchar(150),
  FOREIGN KEY (account_number) REFERENCES account(account_number))`;

  connection.connect();

  try {
    await execQuery(dropDatabase);
    await execQuery(createDatabase);
    await execQuery(useDatabase);
    await execQuery(createTableAccount);
    await execQuery(createTableAccountChanges);
  } catch (error) {
    console.log(error);
    connection.end();
  }

  connection.end();
};

seedDatabase();
