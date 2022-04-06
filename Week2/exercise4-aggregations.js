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

const query1 = `SELECT paper_id, 
COUNT(author_no)
AS number_of_authors
FROM authors_and_papers
GROUP BY paper_id`;

const query2 = `SELECT 
COUNT(authors_and_papers.paper_id) 
AS total_number_of_papers
FROM authors_and_papers
JOIN authors
ON authors.author_no = authors_and_papers.author_no
GROUP BY gender
HAVING gender = 'f'`;

const query3 = `SELECT university, 
AVG(h_index)
AS average_of_h_index
FROM authors
GROUP BY university`;

const query4 = `SELECT authors.university, 
COUNT(authors_and_papers.paper_id) 
AS total_number_of_papers 
FROM authors 
JOIN authors_and_papers 
ON authors.author_no = authors_and_papers.author_no 
GROUP BY university
`;

const query5 = `SELECT university, 
MIN(h_index) AS min_h_index,
MAX(h_index) AS max_h_index
FROM authors
GROUP BY university`;

const queries = [query1, query2, query3, query4, query5];

queries.forEach((query) => execQuery(query));

connection.end();
