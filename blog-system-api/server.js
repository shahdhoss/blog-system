const express = require("express")
const app = express()
const {get_all_authors,delete_author,update_author_profile_picture,add_author} = require("./controllers/authors")
const {get_posts, add_post} = require("./controllers/posts")
app.use(express.json())

app.get('/',get_all_authors)
app.post('/author', add_author)
app.put('/author',update_author_profile_picture)
app.delete('/author/:id',delete_author)

app.get("/posts", get_posts)
app.post('/post', add_post)
app.listen(3000)