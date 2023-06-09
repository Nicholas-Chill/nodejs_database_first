/*
To Start a new project
npm init -y
npm install better-sqlite3
*/

// 1. Import the database driver
const databaseDriver = require('better-sqlite3');

// 2. Connect to the database
const db = databaseDriver('bands.sqlite3');
/* 
Prepare a statement, execute statement
*/

// 3. Send our first query
let statement = db.prepare('SELECT * FROM bands');

// 4. Execute statement, receive results
let results = statement.all();

// 5. Check the results
console.log(results);

// 6 Using parameters
let statement2 = db.prepare(`
    SELECT * FROM bands WHERE genre = ?
`);

let results2 = statement2.all('Metal');

//console.log(results2);

// Using named parameters
let statement3 = db.prepare(`
    SELECT * FROM bands WHERE genre = :genre
`);

let results3 = statement3.all({
    genre: 'Rock'
});

//console.log(results3);
let table = 'bands';
// Insert something into a database
/*let insertStatement = db.prepare(`
     DELETE FROM ${table} WHERE id = 7
`);

let resultOfInsert = insertStatement.run({
    name: 'Bathory',
    genre: 'Metal'
});

console.log(resultOfInsert);*/