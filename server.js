const exp = require('constants');
const express = require('express')
const app = express()


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(express.json())


app.post('/signup', (req, res)=>{
    console.log(req.body)
    res.json("success")
})



app.listen(5000, ()=>{
    console.log("Server is listening")
})