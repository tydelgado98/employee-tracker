require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: 'employee_db'
});

db.connect(err=>{
    if(err) console.log(err);
});

module.exports = db;
