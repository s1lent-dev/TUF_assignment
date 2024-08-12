CREATE TABLE IF NOT EXISTS banner (
    bannerId INT PRIMARY KEY,
    title VARCHAR(255),
    description VARCHAR(255),
    timer INT,
    link VARCHAR(255),
    isVisible BOOLEAN
);
