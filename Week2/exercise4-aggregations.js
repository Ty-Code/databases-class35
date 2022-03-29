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

const query1 = `SELECT research_Papers.paper_id, COUNT(authors.author_no) AS 'number of authors' FROM research_Papers JOIN authors ON authors.author_no = research_Papers.author GROUP BY paper_id`;

const query2 = `SELECT authors.gender, COUNT(research_Papers.paper_id) AS 'total number of papers' FROM authors JOIN research_Papers ON authors.author_no = research_Papers.author GROUP BY gender HAVING gender = 'f' `;

const query3 = `SELECT university, AVG(h_index) AS 'average of h-index' FROM authors GROUP BY university `;

const query4 = `SELECT authors.university, COUNT(research_Papers.paper_id) AS 'total number of papers' FROM authors JOIN research_Papers ON authors.author_no = research_Papers.author GROUP BY university`;

const query5 = `SELECT university, MIN(h_index) AS 'min h-index',  MAX(h_index) AS 'max h-index' FROM authors GROUP BY university`;

const queries = [query1, query2, query3, query4, query5];

queries.forEach((query) => execQuery(query));

connection.end();
