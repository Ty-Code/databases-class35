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

  const createTableResearchPapers = `CREATE TABLE research_papers(
    paper_id int PRIMARY KEY AUTO_INCREMENT,
    paper_title varchar(150),
    conference varchar(100),
    publish_date date) AUTO_INCREMENT = 501`;

  const createTableAuthorsAndPapers = `CREATE TABLE authors_and_papers(
    id int PRIMARY KEY AUTO_INCREMENT,
    author_no int,
    paper_id int,
    FOREIGN KEY (author_no) REFERENCES authors(author_no),
    FOREIGN KEY (paper_id) REFERENCES research_papers(paper_id))`;

  const populateAuthors = `INSERT INTO authors (
    author_name,
    university,
    date_of_birth,
    h_index,
    gender,
    mentor)
    VALUES ? ;`;

  const populatePapers = `INSERT INTO research_Papers (
    paper_title,
    conference,
    publish_date)
    VALUES ? ;`;

  const populateAuthorsAndPapers = `INSERT INTO authors_and_papers (
    author_no,
    paper_id)
    VALUES ? ;`;

  const valuesAuthors = [
    ['author1', 'university5', '1970-01-01', '5', 'm', NULL],
    ['author2', 'university5', '1974-01-01', '3', 'm', '101'],
    ['author3', 'university4', '1981-01-01', '3', 'f', '101'],
    ['author4', 'university2', '1984-01-01', '3', 'm', '101'],
    ['author5', 'university4', '1992-01-01', '2', 'f', '102'],
    ['author6', 'university3', '1990-01-01', '1', 'f', '102'],
    ['author7', 'university1', '1994-01-01', '1', 'm', '102'],
    ['author8', 'university5', '1987-01-01', '1', 'm', '101'],
    ['author9', 'university1', '1982-01-01', '1', 'f', '102'],
    ['author10', 'university4', '1983-01-01', '2', 'f', '101'],
    ['author11', 'university2', '1989-01-01', '1', 'f', '103'],
    ['author12', 'university1', '1980-01-01', '2', 'f', '102'],
    ['author13', 'university3', '1981-01-01', '2', 'm', '103'],
    ['author14', 'university2', '1991-01-01', '1', 'f', '103'],
    ['author15', 'university1', '1994-01-01', '1', 'f', '101'],
  ];

  const valuesPapers = [
    ['title1', 'conference5', '2008-01-01'],
    ['title2', 'conference2', '2005-01-01'],
    ['title3', 'conference1', '2012-01-01'],
    ['title4', 'conference5', '2016-01-01'],
    ['title5', 'conference1', '2020-01-01'],
    ['title6', 'conference1', '2012-01-01'],
    ['title7', 'conference2', '2020-01-01'],
    ['title8', 'conference3', '2015-01-01'],
    ['title9', 'conference2', '2019-01-01'],
    ['title10', 'conference3', '2013-01-01'],
    ['title11', 'conference3', '2016-01-01'],
    ['title12', 'conference5', '2018-01-01'],
    ['title13', 'conference5', '2014-01-01'],
    ['title14', 'conference2', '2020-01-01'],
    ['title15', 'conference4', '2017-01-01'],
    ['title16', 'conference1', '2021-01-01'],
    ['title17', 'conference3', '2021-01-01'],
    ['title18', 'conference4', '2022-01-01'],
    ['title19', 'conference1', '2022-01-01'],
    ['title20', 'conference2', '2009-01-01'],
    ['title21', 'conference2', '2018-01-01'],
    ['title22', 'conference4', '2019-01-01'],
    ['title23', 'conference3', '2019-01-01'],
    ['title24', 'conference1', '2012-01-01'],
    ['title25', 'conference4', '2020-01-01'],
    ['title26', 'conference1', '2011-01-01'],
    ['title27', 'conference3', '2022-01-01'],
    ['title28', 'conference4', '2022-01-01'],
    ['title29', 'conference1', '2022-01-01'],
    ['title30', 'conference2', '2022-01-01'],
  ];

  const valuesAuthorAndPapers = [
    [101, 501],
    [101, 502],
    [101, 503],
    [102, 504],
    [102, 505],
    [103, 506],
    [103, 507],
    [104, 508],
    [104, 509],
    [105, 510],
    [105, 511],
    [106, 512],
    [106, 513],
    [107, 514],
    [108, 515],
    [108, 516],
    [109, 517],
    [109, 519],
    [110, 520],
    [110, 520],
    [111, 521],
    [112, 522],
    [113, 523],
    [114, 524],
    [115, 525],
    [115, 526],
    [114, 527],
    [113, 528],
    [112, 529],
    [111, 530],
    [110, 501],
    [109, 502],
    [108, 503],
    [107, 504],
    [106, 505],
    [105, 506],
    [104, 507],
    [103, 508],
    [102, 509],
    [101, 510],
  ];

  connection.connect();

  try {
    await execQuery(createTableResearchPapers);
    await execQuery(createTableAuthorsAndPapers);
    await execQuery(populateAuthors, [valuesAuthors]);
    await execQuery(populatePapers, [valuesPapers]);
    await execQuery(populateAuthorsAndPapers, [valuesAuthorAndPapers]);
  } catch (error) {
    console.log(error);
    connection.end();
  }

  connection.end();
};

seedDatabase();
