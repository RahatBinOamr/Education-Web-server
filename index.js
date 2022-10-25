const express = require("express");
const app = express();
const cors = require ("cors");
app.use(cors());

const Port = process.env.Port || 5000;
const category = require("./Data/Category.json")
const courses = require('./Data/Courses.json')


app.get('/courses',(req,res)=>{
  res.send(courses);
})


app.get('/courses/:id',(req,res)=>{
  const id = req.params.id;
  const selectedCourses = courses.find(n=>n.id===id);
  res.send(selectedCourses)
})

app.get("/CoursesCategory",(req,res)=>{
  res.send(category)
})

app.get('/CoursesCategory/:id',(req,res)=>{
  const id = req.params.id;
  if(id=="07"){
    res.send(courses)
  }
  else{
  
    const categoryCourses = courses.filter(n=>n.category_id===id);
    res.send(categoryCourses)
  }
  })






app.get("/",(req,res)=>{
    res.send("Now sever running");
})
app.listen(Port,()=>{
    console.log("server is running ", Port);
});