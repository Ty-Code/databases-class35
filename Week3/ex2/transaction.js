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
  const amount = 1000;

  const createProcedure = `CREATE PROCEDURE makeTransaction()
  BEGIN 
    UPDATE account SET balance = (balance - ${amount}) WHERE account_number = 101; 
    UPDATE account SET balance = (balance + ${amount}) WHERE account_number = 102; 
    INSERT INTO account_changes(
      account_number,
      amount,
      changed_date,
      remark) VALUES
      ('101', '-${amount}', '2022-04-04', 'payment2'),
      ('102', '+${amount}', '2022-04-04', 'payment2');
  END`;

  const callProcedure = 'CALL makeTransaction()';

  connection.connect();

  try {
    await execQuery('START TRANSACTION');

    await execQuery(createProcedure);
    await execQuery(callProcedure);

    await execQuery('COMMIT');
  } catch (error) {
    await execQuery('ROLLBACK');
    connection.end();
  }

  connection.end();
};

seedDatabase();
