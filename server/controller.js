const database=require("./database.js")

const addStudent=(req,res)=>{
    if(req.body.name==null||req.body.email==null){
        res.status(404).send("invalid input");
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
  res.status(200).send(st);
}catch(err){
    res.status(404).send(err);
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
    res.status(404).send("student not find")
  }
  res.status(200).send(student);
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
  let b=false;
  student.courseList.forEach((e)=>{
    if(e.id==id){
      b=true
      res.status(404).send("err");
    }
  })

let course=null
database.courseList.forEach((e)=>{
    if(e.id==id){
        course=e;
    }
  })
  if(b==false){
  student.courseList.push({...course,status:"InProgress"})
  course.students.push(student.id);
  }
  res.status(200).send(student);

}catch(err){
  res.status(404).send( err);
}
}
const getAllCourse=(req,res)=>{
    res.status(200).send(database.courseList);
}

const changeStatus=(req,res)=>{
  try{
    const studentid=req.query.id;
  let student=null;

  database.studentList.forEach((e)=>{
    if(e.id==studentid){
        student=e;
    }
  })
     if(student==null){
      res.status(404).send("err");
     }
     const id=req.query.courseid;
let course=null
student.courseList.forEach((e)=>{
    if(e.id==id){
        course=e;
    }
  })
  if(course==null){
    res.status(404).send("err");
   }
     course.status="completed";
     res.status(200).send(student)     
}catch(err){
  res.status(404).send("err")
}

}

let controller={
   "getStudent":getStudent,
   "addStudent":addStudent,
   "addCourse":addCourse,
   "getAllCourse":getAllCourse,
   "changeStatus":changeStatus
}

module.exports=controller;