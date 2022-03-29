const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'research_projects',
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

const query1 = `SELECT author_name, mentor FROM authors`;

const query2 = `SELECT authors.author_name, research_Papers.paper_title FROM authors LEFT JOIN research_Papers ON authors.author_no = research_Papers.author`;

execQuery(query1);
execQuery(query2);

connection.end();
