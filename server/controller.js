const database=require("./database.js")

const addStudent=(req,res)=>{
    if(req.body.name==null||req.body.email==null){
        res.send("invalid input");
    }
  let st={
    id:database.studentList.length+1,
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    courseList:[]
  }
  try{
  database.studentList.push(st);
  res.send(st);
}catch(err){
    res.send(err);
}
}
const getStudent=(req,res)=>{
  const email=req.query.email;
  const password=req.query.password;
  let student=null;

  database.studentList.forEach((e)=>{
    if(e.email==email&&e.password==password){
        student=e;
    }
  })
  if(student==null){
    res.send("student not find")
  }
  res.send(student);
}
const addCourse=(req,res)=>{
  try{
    const studentid=req.query.id;
  let student=null;

  database.studentList.forEach((e)=>{
    if(e.id==studentid){
        student=e;
    }
  })
const id=req.query.courseid;
let course=null
database.courseList.forEach((e)=>{
    if(e.id==id){
        course=e;
    }
  })
  student.courseList.push(course)
  course.students.push(student.id);
  res.send(student);
}catch(err){
  res.send("err");
}
}
const getAllCourse=(req,res)=>{
    res.send(database.courseList);
}

let controller={
   "getStudent":getStudent,
   "addStudent":addStudent,
   "addCourse":addCourse,
   "getAllCourse":getAllCourse
}

module.exports=controller;