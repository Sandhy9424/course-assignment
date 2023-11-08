import {useSelector,useDispatch}from "react-redux"
import { changeCourse } from "../redux/actions/ChangeCourseAction.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Head.css"
import store from "../redux/store.js";
function StudentDashbord(){
    const student=useSelector(state=>state.changeStudent);
    console.log(student);
    const navigate=useNavigate();
    let l=[];
    
        l=student.courseList;
    
const [courseList,setCourseList]=useState(l);
 const dispatch=useDispatch()

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
                {courseList.map((e)=>{

                    return (
                        <div className="course-list" >
                        <p style={{display:"none"}}>{e.id}</p>
                        <p>{e.name}</p>
                        <p>by : {e.instructor}</p>
                <svg onClick={()=>{
                console.log(e,)
                dispatch(changeCourse(e))
                navigate("course-detail")
            }} xmlns="http://www.w3.org/2000/svg" width="44" height="33" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16">
            <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                </svg>
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export default StudentDashbord;