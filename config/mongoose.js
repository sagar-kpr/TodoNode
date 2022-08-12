const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_db');
const db = mongoose.connection;

db.on('error',console.error.bind(console,"error"));

db.once('open', function(){
    console.log("database connected");
});
