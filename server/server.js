const express=require("express");
const cors=require("cors")
const controller=require("./controller.js")
const app=express();

app.use(express.json())
app.use(cors())


app.post("/add-student",controller.addStudent);

app.get("/get-student",controller.getStudent);

app.post("/add-course",controller.addCourse);

app.get("/get-all-course",controller.getAllCourse);

app.listen(4000,()=>console.log("Srerver at localhost:4000"))
