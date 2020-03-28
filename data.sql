CREATE TABLE staff(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    details TEXT NOT NULL,
    position VARCHAR(100) NOT NULL
);

CREATE TABLE teams(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    details TEXT NOT NULL,
    kind VARCHAR(100) NOT NULL
);

CREATE TABLE team_members(
    id SERIAL PRIMARY KEY,
    team_id INTEGER NOT NULL references teams(id),  
    staff_id INTEGER NOT NULL  references staff(id),
    job TEXT
);


CREATE TABLE franchises (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    details TEXT NOT NULL,
    kind VARCHAR(100) NOT NULL,
    team_id INTEGER 
);

CREATE TABLE media(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    details TEXT NOT NULL,
    kind VARCHAR(100) NOT NULL,
    team_id INTEGER  references teams(id)
);

CREATE TABLE advertisements(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    details TEXT NOT NULL,
    kind VARCHAR(100) NOT NULL,
    team_id INTEGER references teams(id)
);

CREATE TABLE events(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    details TEXT NOT NULL,
    kind VARCHAR(100) NOT NULL,
    team_id INTEGER  references teams(id)
);

CREATE TABLE merchandise(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    details TEXT NOT NULL,
    kind VARCHAR(100) NOT NULL,
    team_id INTEGER  references teams(id)
);

CREATE TABLE event_advertisement(
    id SERIAL PRIMARY KEY,
    event_id INTEGER  references events(id),
    advertisement_id INTEGER  references advertisements(id)
);

CREATE TABLE merchandise_advertisement(
    id SERIAL PRIMARY KEY,
    merchandise_id INTEGER  references merchandise(id),
    advertisement_id INTEGER  references advertisements(id)
);

CREATE TABLE media_advertisement(
    id SERIAL PRIMARY KEY,
    media_id INTEGER  references media(id),
    advertisement_id INTEGER  references advertisements(id)
);