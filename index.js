 const express = require('express')
 const app = express()
 const cors = require('cors')
 const port = process.env.PORT || 5000
 
 app.use(cors())
 const categories = require('./data/categories.json')
 const courses = require('./data/courses.json')


 


 app.get('/categories',(req,res)=>{
    res.send(categories)
 })

// single course category
 app.get('/category/:id',(req,res)=>{
    const id = req.params.id
    if(id==='08'){
        res.send(courses)
    }else{
        const selectedCategory = courses.filter(ct=>ct.category_id===id)
        res.send(selectedCategory)
    }
    
 })

 app.get('/courses/:id',(req,res)=>{
    const id = req.params.id
    const selectedCourse = courses.find(c=>c._id=== id)
    res.send(selectedCourse)    
 })

 app.get('/courses',(req,res)=>{
    res.send(courses)
 })

 app.listen(port,()=>{
    console.log('server active')
 })