 const express = require('express')
 const app = express()
 const cors = require('cors')
 const port = process.env.PORT || 5000
 
 app.use(cors())
 const categories = require('./data/data.json')

 


 app.get('/courses',(req,res)=>{
    res.send(categories)
 })

 app.get('/',(req,res)=>{
    res.send('news')
 })

 app.listen(port,()=>{
    console.log('server active')
 })