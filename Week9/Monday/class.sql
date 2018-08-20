
-- DROP TABLE student;
-- CREATE TABLE student(
--     name varchar,
--     website varchar,
--     point integer,
--     gender char(1),
    
-- );

-- INSERT INTO student VALUES (
--   'Veronica', 'me@me.com', 1, 'F', 'Houston', 'Texas'
-- );

-- INSERT INTO student (name, point) VALUES (
--   'Paul', 1
-- );


-- ALTER TABLE student
-- ADD location3 varchar;

-- ALTER TABLE student
-- DROP location3;


-- CREATE TABLE student2 (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name VARCHAR,
--   github VARCHAR,
--   points INTEGER,
--   start_date DATE,
--   graduated BOOLEAN
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Matt', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Eric', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Tracy', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Melissa', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Travis', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Sam', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Keith', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Jeff', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Skylar', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Hussein', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Preston', 'me@me.com', 1, '2017-04-17', TRUE
-- );

-- INSERT INTO student2 VALUES (
--   Default, 'Michael', 'me@me.com', 1, '2017-04-17', TRUE
-- );


-- UPDATE student2 SET name = 'Matt Fisher' WHERE name = 'Eric';
-- UPDATE student2 SET points = 8;

-- UPDATE student2 SET points = 2, graduated = TRUE 
--   WHERE id = 1;

-- DELETE FROM student2 WHERE id = 4;

-- CREATE TABLE student3 (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name VARCHAR,
--   github VARCHAR,
--   points INTEGER DEFAULT 0,
--   start_date DATE,
--   graduated BOOLEAN DEFAULT FALSE
-- );

-- INSERT INTO student3 (name) VALUES (
--   'Paul'
-- );

-- CREATE TABLE student4 (
--   id SERIAL NOT NULL PRIMARY KEY,
--   name varchar,
--   github varchar UNIQUE NOT NULL,
--   points integer DEFAULT 0 CHECK (points >= 0),
--   start_date date NOT NULL,
--   graduated boolean DEFAULT FALSE
-- );

-- INSERT INTO student4 (name, github, points,  start_date) VALUES (
--   'Paul', 'github35', 2, '2017-6-6'
-- );

-- SELECT * FROM student2;

-- SELECT name, points FROM student2;

-- SELECT * FROM student2 WHERE name = 'Matt Fisher';

-- SELECT * FROM student2 WHERE points > 7 and graduated = TRUE;

-- SELECT * FROM student2 WHERE name ilike '%mat%';

-- SELECT * FROM student WHERE website is NULL;

-- SELECT * FROM student2 WHERE start_date > '2018-01-01';

-- ALTER TABLE student
-- ADD city varchar(30);

-- ALTER TABLE student
-- DROP COLUMN city

-- ALTER TABLE student
-- ALTER COLUMN city integer

-- SELECT COUNT(*) FROM student2;

-- SELECT COUNT(github) FROM student2;

-- SELECT SUM(points) FROM student2 WHERE graduated = FALSE;
-- SELECT MIN(points) FROM student2 WHERE graduated = FALSE;

-- SELECT start_date, sum(points) FROM GROUP BY start_date;

-- SELECT * FROM student2 ORDER BY name DESC;

-- SELECT * FROM student2 ORDER BY name DESC LIMIT 2;

SELECT * FROM student2 ORDER BY points LIMIT 5 OFFSET 5;
