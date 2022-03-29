const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'hyfuser',
  password: 'hyfpassword',
  database: 'research_projects',
});

const execQuery = util.promisify(connection.query.bind(connection));

const seedDatabase = async () => {
  const NULL = null;

  const createTable = `CREATE TABLE research_Papers(
    paper_id int PRIMARY KEY AUTO_INCREMENT,
    paper_title varchar(150),
    conference varchar(100),
    publish_date date,
    author int,
    FOREIGN KEY (author) REFERENCES authors(author_no))`;

  const alterAutoIncrement = `ALTER TABLE research_Papers AUTO_INCREMENT = 101`;

  const insertRowsToAuthors = `INSERT INTO authors (
    author_name,
    university,
    date_of_birth,
    h_index,
    gender,
    mentor)
    VALUES ? ;`;

  const insertRowsToPapers = `INSERT INTO research_Papers (
    paper_title,
    conference,
    publish_date,
    author)
    VALUES ? ;`;

  const valuesOfTableAuthors = [
    ['author1', 'university5', '1970-01-01', '5', 'm', NULL],
    ['author2', 'university5', '1974-01-01', '3', 'm', '1'],
    ['author3', 'university4', '1981-01-01', '3', 'f', '1'],
    ['author4', 'university2', '1984-01-01', '3', 'm', '1'],
    ['author5', 'university4', '1992-01-01', '2', 'f', '2'],
    ['author6', 'university3', '1990-01-01', '1', 'f', '2'],
    ['author7', 'university1', '1994-01-01', '1', 'm', '2'],
    ['author8', 'university5', '1987-01-01', '1', 'm', '1'],
    ['author9', 'university1', '1982-01-01', '1', 'f', '2'],
    ['author10', 'university4', '1983-01-01', '2', 'f', '1'],
    ['author11', 'university2', '1989-01-01', '1', 'f', '3'],
    ['author12', 'university1', '1980-01-01', '2', 'f', '2'],
    ['author13', 'university3', '1981-01-01', '2', 'm', '3'],
    ['author14', 'university2', '1991-01-01', '1', 'f', '3'],
    ['author15', 'university1', '1994-01-01', '1', 'f', '1'],
  ];

  const valuesOfTablePapers = [
    ['title1', 'conference5', '2008-01-01', '1'],
    ['title2', 'conference2', '2005-01-01', '2'],
    ['title3', 'conference1', '2012-01-01', '1'],
    ['title4', 'conference5', '2016-01-01', '3'],
    ['title5', 'conference1', '2020-01-01', '2'],
    ['title6', 'conference1', '2012-01-01', '1'],
    ['title7', 'conference2', '2020-01-01', '4'],
    ['title8', 'conference3', '2015-01-01', '2'],
    ['title9', 'conference2', '2019-01-01', '2'],
    ['title10', 'conference3', '2013-01-01', '3'],
    ['title11', 'conference3', '2016-01-01', '8'],
    ['title12', 'conference5', '2018-01-01', '4'],
    ['title13', 'conference5', '2014-01-01', '8'],
    ['title14', 'conference2', '2020-01-01', '5'],
    ['title15', 'conference4', '2017-01-01', '10'],
    ['title16', 'conference1', '2021-01-01', '6'],
    ['title17', 'conference3', '2021-01-01', '12'],
    ['title18', 'conference4', '2022-01-01', '7'],
    ['title19', 'conference1', '2022-01-01', '11'],
    ['title20', 'conference2', '2009-01-01', '1'],
    ['title21', 'conference2', '2018-01-01', '9'],
    ['title22', 'conference4', '2019-01-01', '2'],
    ['title23', 'conference3', '2019-01-01', '11'],
    ['title24', 'conference1', '2012-01-01', '3'],
    ['title25', 'conference4', '2020-01-01', '13'],
    ['title26', 'conference1', '2011-01-01', '4'],
    ['title27', 'conference3', '2022-01-01', '12'],
    ['title28', 'conference4', '2022-01-01', '15'],
    ['title29', 'conference1', '2022-01-01', '13'],
    ['title30', 'conference2', '2022-01-01', '11'],
  ];

  connection.connect();

  try {
    await execQuery(createTable);
    await execQuery(alterAutoIncrement);
    await execQuery(insertRowsToAuthors, [valuesOfTableAuthors]);
    await execQuery(insertRowsToPapers, [valuesOfTablePapers]);
  } catch (error) {
    console.log(error);
    connection.end();
  }

  connection.end();
};

seedDatabase();
