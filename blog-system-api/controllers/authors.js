const connection = require("../database_connection/connection")

exports.add_author = async(req, res)=>{
    try{
        const {first_name, last_name, birth_date, about, profile_picture} = req.body
        const query = `insert into author (first_name, last_name, birth_date, about, profile_picture) values ($1,$2,$3,$4,$5)`
        await connection.query(query,[first_name,last_name,birth_date,about,profile_picture])
        res.status(200).json({ message: "Author added successfully" });
    }
    catch(error){
        console.log("an error occured: ", error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.get_all_authors = async (req,res) =>{
    try{
        const query = `select * from author`
        const result = await connection.query(query)
        res.json(result['rows'])
        res.status(200).json({ message: "Authors retrieved successfully" });
    }
    catch(error){
        console.log("an error occured: ", error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.update_author_profile_picture = async (req,res) =>{
    try{
        console.log("Request body:", req.body);
        const {id, profile_picture} = req.body
        const query = `update author set profile_picture = $1 where id = $2`
        await connection.query(query,[profile_picture,id])
        res.status(200).json({ message: "Profile picture updated successfully" });
    }
    catch(error){
        console.log("an error happened: ", error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}

exports.delete_author = async(req,res) =>{
    try{
        const author_id = req.params.id
        const query= ` delete from author where id = $1`
        connection.query(query,[author_id])
        res.status(200).json({ message: "Author deleted successfully" });
    }
    catch(error){
        console.log("an error occurred: ", error)
        res.status(500).json({ error: "Internal Server Error" });
    }
}
