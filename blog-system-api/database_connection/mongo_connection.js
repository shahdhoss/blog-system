const {MongoClient} = require("mongodb")
const client = new MongoClient("mongodb://localhost:27017")

async function connectdb(){
    try{
        await client.connect()
        return client.db('blog')
    }catch(error){
        console.log("error: ", error)
    }
}
module.exports = connectdb