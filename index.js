const express = require("express");
const app = express();
const cors = require ("cors");
app.use(cors());

const Port = process.env.Port || 5000;
const category = require("./Data/Category.json")

app.get("/CoursesCategory",(req,res)=>{
    res.send(category)
})
app.get("/CoursesCategory/:id", (req, res) => {
    const id = req.params.id;
    const getSingleItem = category?.find((p) => p.id == id);
    if (!getSingleItem) {
      res.send("no more id");
    }
    res.send(getSingleItem);
  });
app.get("/",(req,res)=>{
    res.send("Now sever running");
})
app.listen(Port,()=>{
    console.log("server is running ", Port);
});