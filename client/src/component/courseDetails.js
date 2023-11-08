import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../CSS/Head.css"
function CourseDetails(){

const course= useSelector(state=>state.changeCourse)
const navigate=useNavigate()
console.log(course);

const [syllabus,setSyllabus]=useState([]);
console.log(course,syllabus);
    return(
<div className="course-details">
    <div className="navvv">
    <svg onClick={()=>navigate(-1)} xmlns="http://www.w3.org/2000/svg" width="83" height="44" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
    <h1>Course : {course.name}</h1>
    </div>
    <p>Instructor : {course.instructor}</p>
    <p>Description : {course.description}</p>
    <p>Enrollment Status : {course.enrollmentStatus}</p>
    <p>Duration : {course.duration}</p>
    <p>Schedule : {course.schedule}</p>
    <p>Location : { course.location}</p>
    <div>
    
        <p>Prerequisites :</p>
        {course.prerequisites.map((e,i)=>{
        const s=i+1+" : "+e;
        return(
        <p>{s}</p>)})}
    </div>
    <div>
        <div className="syllabus">
    <svg onClick={()=>{
        if(syllabus.length==0){
        setSyllabus(course.syllabus)
        }
        else{
            setSyllabus([]);
        }
    }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-view-stacked" viewBox="0 0 16 16">
  <path d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3z"/>
</svg>
        <p>syllabus</p>
       </div>
        {syllabus.map((e)=>{

            return(
                <div className="syllabus-content">
                    <p>week : {e.week}</p>
                    <p>topic : {e.topic}</p>
                    <p>content :{e.content}</p>
                </div>
            )
        })}
    </div>
</div>

    )
}
export default CourseDetails;