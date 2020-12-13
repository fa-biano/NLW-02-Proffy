//Criar arquivo do Banco de Dados
const Database = require('sqlite-async')
module.exports = Database.open(__dirname + '/database.sqlite').then(execute)
//.them será executado após a abertura do Banco do Dados
// module.exports irá permitir a exportação do Dando de Dados para outro arquivo js.

// Abrir terminal:
// node src/database/db.js
// Esse comando irá criar o banco de dados (arquivo: database.sqlite) dentro da pasta que está o db.js

function execute(db){
    // Criar as tabelas do banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            proffy_id INTEGER,
            subject INTEGER,
            cost TEXT
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    
    `)
}
