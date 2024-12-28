const exp = require('constants');
const express = require('express')
const fs = require('fs');

const app = express()

if(!fs.existsSync('Database.json')){
    fs.writeFile('Database.json', '[]', (err, file)=>{
        if(err){
            console.log(err)
        }
    })
}



app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(express.json())


app.post('/signup', (req, res)=>{
    fs.readFile('database.json', (err,file)=>{
        if(err){
            console.log("Error in loading file")
            return
        }
        users = []
        try{
            users = JSON.parse(file)
        }catch(err){
            console.log(err)
            res.status(500).json({message:"Corrupted database"})
            return 
        }
        for(let e of users){
            if(req.body['Email']==e['Email']){
                console.log("aleardy exists")
                res.status(409).json({message:"User already exists"})
                return
            }
            
        }
        users.push(req.body)

        fs.writeFile('database.json', JSON.stringify(users), (err, file)=>{
            if(err){
                console.log("error in writing to the database")
                return
            }
            console.log("User added")
            res.json({message:"success"})
        })
    
    })
})



app.listen(5000, ()=>{
    console.log("Server is listening")
})