const connection = require("../database_connection/connection")
const create_table_author = `create table author(
    id serial primary key,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    birth_date date,
    about varchar(255),
    profile_picture varchar(255))`

connection.query(create_table_author).then(()=>{
    console.log("table created successfully")
}).catch(err=> {
    console.error("error creating table", err.stack)
}).finally(()=>{
    connection.end()
})