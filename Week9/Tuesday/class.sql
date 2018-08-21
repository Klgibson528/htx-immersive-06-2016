-- CREATE TABLE author (
--     id serial PRIMARY KEY,
--     name varchar
-- );


-- CREATE TABLE article (
--     id serial PRIMARY KEY,
--     title varchar,
--     author_id integer REFERENCES author (id)
-- );

-- INSERT INTO author VALUES (
--   DEFAULT, 'Jeff'
-- );

-- INSERT INTO author VALUES (
--   DEFAULT, 'Matt'
-- );

-- INSERT INTO author VALUES (
--   DEFAULT, 'Keith'
-- );

-- INSERT INTO author VALUES (
--   DEFAULT, 'Sam'
-- );

-- INSERT INTO author VALUES (
--   DEFAULT, 'Eric'
-- );

-- INSERT INTO author VALUES (
--   DEFAULT, 'Tracy'
-- );

-- INSERT INTO author VALUES (
--   DEFAULT, 'Melissa'
-- );

-- INSERT INTO article VALUES (
--   DEFAULT, 'Cats', 4
-- );

-- INSERT INTO article VALUES (
--   DEFAULT, 'Dogs', 4
-- );

-- INSERT INTO article VALUES (
--   DEFAULT, 'Chickens', 4
-- );

-- INSERT INTO article VALUES (
--   DEFAULT, 'Birds', 4
-- );

-- SELECT * FROM article WHERE author_id = 1;


-- SELECT * FROM article, author
--   WHERE article.author_id = author.id and name = 'Sam';

-- SELECT * FROM article, author

-- SELECT * FROM article
--   INNER JOIN author
--     ON article.author_id = author.id;

-- SELECT * FROM article
--  RIGHT OUTER JOIN author
--     ON article.author_id = author.id;

-- SELECT author.id, author.name,  count(article.id) FROM article
-- FULL OUTER JOIN author
--     ON article.author_id = author.id
-- GROUP BY
--     author.id;

-- SELECT * FROM article
--  RIGHT OUTER JOIN author
--     ON article.author_id = author.id


-- CREATE TABLE team (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR
-- );
-- CREATE TABLE member (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR
-- );
-- CREATE TABLE team_member (
--   id SERIAL PRIMARY KEY,
--   team_id INTEGER REFERENCES team (id),
--   member_id INTEGER REFERENCES member (id)
-- );


-- INSERT INTO team VALUES (
--   DEFAULT, 'texans'
-- );

-- INSERT INTO member VALUES (
--   DEFAULT, 'jjWatt'
-- );

-- INSERT INTO member VALUES (
--   DEFAULT, 'mercilus'
-- );

-- INSERT INTO member VALUES (
--   DEFAULT, 'hopkins'
-- );

-- INSERT INTO member VALUES (
--   DEFAULT, 'watson'
-- );

-- INSERT INTO team VALUES (
--   DEFAULT, 'falcons'
-- );

-- INSERT INTO member VALUES (
--   DEFAULT, 'jones'
-- );

-- INSERT INTO member VALUES (
--   DEFAULT, 'ryan'
-- );

-- INSERT INTO team VALUES (
--   DEFAULT, 'titans'
-- );

-- INSERT INTO member VALUES (
--   DEFAULT, 'mariotta'
-- );

-- INSERT INTO member VALUES (
--   DEFAULT, 'lewis'
-- );

-- INSERT INTO team VALUES (
--   DEFAULT, 'jaguars'
-- );

-- INSERT INTO member VALUES (
--   DEFAULT, 'bortles'
-- );

-- INSERT INTO member VALUES (
--   DEFAULT, 'fournette'
-- );

-- INSERT INTO team_member VALUES (
--   DEFAULT, 1, 1
-- );

-- INSERT INTO team_member VALUES (
--   DEFAULT, 1, 2
-- );

-- INSERT INTO team_member VALUES (
--   DEFAULT, 1, 3
-- );

-- INSERT INTO team_member VALUES (
--   DEFAULT, 1, 4
-- );

-- INSERT INTO team_member VALUES (
--   DEFAULT, 2, 1
-- );

-- INSERT INTO team_member VALUES (
--   DEFAULT, 3, 1
-- );

-- INSERT INTO team_member VALUES (
--   DEFAULT, 2, 5
-- );

SELECT * FROM member
  JOIN team_member ON team_member.member_id = member.id
  JOIN team ON team_member.team_id = team.id;
