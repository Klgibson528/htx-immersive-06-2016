
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


UPDATE student2 SET name = 'Matt Fisher' WHERE id = 2;
