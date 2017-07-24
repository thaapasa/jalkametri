CREATE TABLE users (
  user_id SERIAL NOT NULL,
  user_name VARCHAR(32) NOT NULL,
  password VARCHAR(40) NOT NULL,
  display_name VARCHAR(128) NOT NULL
)
