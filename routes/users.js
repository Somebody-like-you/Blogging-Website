const express = require('express')
const app = express.app
const router = express.Router()
const path = require('path')
const fs = require('fs')

router.get('/:username', (req, res)=>{
    fs.readFile(path.join(__dirname, '..', 'database.json'), 'utf8', (err, file)=>{
        if(err){
            console.log(err)
        }else{
            users = JSON.parse(file)
            const flag = users.some(e=>req.params.username==e['Name'])
            if(flag){
                res.sendFile(path.join(__dirname, '..', 'public', 'hello.html'))
            }else{
                res.send("The User don't exists")
            }
        }
    })
    
})


module.exports = router

