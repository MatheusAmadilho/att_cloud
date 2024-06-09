const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'user',
    password: 'passwd',
    database: 'db_aula'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

app.get('/consulta-dados', (req, res) => {
    db.query('SELECT * FROM table_name', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
