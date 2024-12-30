const exp = require('constants');
const express = require('express')
const fs = require('fs');
const path = require('path')

const signupRouter = require('./routes/signup')
const username = require('./routes/users.js')

const app = express()

if(!fs.existsSync('Database.json')){
    fs.writeFile('Database.json', '[]', (err, file)=>{
        if(err){
            console.log(err)
        }   
    })
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(express.static("public"))
app.use('/signup', signupRouter)
app.use('/u', username)

app.get('/login', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'login.html'))
})


app.listen(5000, ()=>{
    console.log("Server is listening")
})