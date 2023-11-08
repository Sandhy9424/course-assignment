import { useState, useEffect, useRef } from "react";
import {useSelector,useDispatch} from  "react-redux";
import {changeCourse} from "../redux/actions/ChangeCourseAction.js"
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios  from "axios";
import "../CSS/Head.css"
import { changeStudent } from "../redux/actions/changeStudentActions.js";


function CourseListing(){





const [courseList,setCourseList]=useState([])
const navigate=useNavigate();
const dispatch=useDispatch();
const Student=useSelector(state=>state.changeStudent)
const d=useSelector(state=>state.changeCourse)
const tempcourseList=useRef();
console.log(courseList,d)
 
function getAllCourse(){
    axios.get("http://localhost:4000/get-all-course").then((result) => {
        setCourseList(result.data);
        tempcourseList.current=result.data;
        console.log(tempcourseList,result)
    }).catch((err) => {
        console.log(err);
    });
}
  useEffect(()=>getAllCourse(),[]);

 function search(e){
    let value=e.target.value;
    let te=tempcourseList.current.filter(e=> e.name.includes(value))
    setCourseList(te);
    console.log(value,te)
 }

 function Subscribe(e){
    let courseid=e.target.parentNode.children[0].innerText;

   axios.post(`http://localhost:4000/add-course?id=${Student.id}&courseid=${courseid}`).then((res)=>{
    dispatch(changeStudent(res.data))
     alert("course subscribed successfully")
    console.log(res.data)}).catch((err)=>console.log(err))
   console.log(Student,courseid)
    
 }

    return(
<div className="course-l">
    <div className="navvv">
    <svg onClick={()=>navigate(-1)} xmlns="http://www.w3.org/2000/svg" width="83" height="44" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
</svg>
    <h1>All Courses</h1>
    
    </div>
    <input onChange={search} type="text" placeholder="search"></input>
    <div>
        {courseList.map((e)=>{

            return(
                <div className="course-list" >
                            <p style={{display:"none"}}>{e.id}</p>
                            <p>{e.name}</p>
                            <p>by : {e.instructor}</p>
                            <button onClick={Subscribe} >Subscribe</button>
                    <svg onClick={()=>{
                    console.log(e,)
                    dispatch(changeCourse(e))
                    navigate("course-detail")
                }} xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16">
                <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                    </svg>
                        </div>
            )
        })}
    </div>
</div>

    )
}

export default CourseListing;