const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'bank',
});

const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {
  const insertRowsToAccount = `INSERT INTO account (
    balance)
    VALUES ? ;`;

  const insertRowsToAccountChanges = `INSERT INTO account_changes (
    account_number,
    amount,
    changed_date,
    remark)
    VALUES ? ;`;

  const valuesOfTableAccount = [['2000'], ['2500'], ['4000'], ['1500'], ['3500']];

  const valuesOfTableAccountChanges = [
    ['105', '-500', '2022-04-03', 'payment1'],
    ['104', '+500', '2022-04-03', 'payment1'],
  ];

  connection.connect();

  try {
    await execQuery(insertRowsToAccount, [valuesOfTableAccount]);
    await execQuery(insertRowsToAccountChanges, [valuesOfTableAccountChanges]);
  } catch (error) {
    console.log(error);
    connection.end();
  }

  connection.end();
};

seedDatabase();
