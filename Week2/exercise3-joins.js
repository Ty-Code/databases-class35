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

const query1 = `SELECT authors.author_name, mentors.author_name AS mentor_name
FROM authors
JOIN authors AS mentors
ON authors.mentor = mentors.author_no;`;

const query2 = `SELECT authors.*, research_papers.paper_title
FROM authors
LEFT JOIN authors_and_papers
ON authors.author_no = authors_and_papers.author_no
LEFT JOIN research_papers
ON authors_and_papers.paper_id = research_papers.paper_id;`;

execQuery(query1);
execQuery(query2);

connection.end();
