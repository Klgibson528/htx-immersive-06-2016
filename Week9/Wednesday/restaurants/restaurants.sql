DROP TABLE dishes;

CREATE TABLE dishes (
    id serial PRIMARY KEY,
    title varchar,
    description varchar,
    price decimal, 
    course varchar(100),
    imageURL varchar(300)
);

INSERT INTO dishes VALUES (
  DEFAULT, 'deep dish pizza', '10.99', 'lunch', ''
);