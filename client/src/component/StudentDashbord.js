import {useSelector,useDispatch}from "react-redux"
import { changeCourse } from "../redux/actions/ChangeCourseAction.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Head.css"
import store from "../redux/store.js";
import axios from "axios";
import ListData from "./ListData.js";
function StudentDashbord(){
    const student=useSelector(state=>state.changeStudent);
    console.log(student);
    const navigate=useNavigate();
    let l=[];
    
        l=student.courseList;
    
const [courseList,setCourseList]=useState(l);

 

    return(
        <div> 
            <div className="nav" >
                <h1>Welcome {student.name}</h1>
                <div>
                    <h1 onClick={()=>navigate("all-courses")}>All Courses</h1><h1 onClick={()=>navigate(-1)}>Log Out</h1></div>    
            </div>
            <div className="student-course-list">
                <h3>All Subscribed Courses</h3>
                {courseList.length==0?<p>No course Subscribed</p>:console.log("Courses avilable")}
                {courseList.map((e)=><ListData data={e} ></ListData>)}
            </div>

        </div>
    )
}

export default StudentDashbord;