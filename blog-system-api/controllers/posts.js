const connectdb = require("../database_connection/mongo_connection")

exports.add_post = async(req,res)=>{
    try{
        const db = await connectdb()
        const collection = db.collection('posts')
        const content = req.body
        await collection.insertOne({content, date: new Date()})
    }
    catch(error){
        console.log("error: ", error)
        res.status(500).json({message: error.message})
    }
}
exports.get_posts = async(req,res)=>{
    try{
        const db = await connectdb()
        const collection = db.collection("posts")
        const posts = await collection.find().toArray()
        res.json(posts)
    }
    catch(error){
        console.log("error: ", error)
        res.status(500).json({message: error.message})
    }
}
