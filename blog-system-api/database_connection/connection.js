const {Client} = require("pg")
const connection = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"shahd",
    database:"blog"
})
connection.connect()
module.exports = connection 