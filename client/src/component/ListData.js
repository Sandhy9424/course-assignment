import { changeCourse } from "../redux/actions/ChangeCourseAction.js";
import { changeStudent } from "../redux/actions/changeStudentActions.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Head.css"
import {useSelector,useDispatch}from "react-redux"
import axios from "axios";



function ListData(props){
    const dispatch=useDispatch()
    const navigate=useNavigate();
    const student=useSelector(state=>state.changeStudent);
    const[status,setStatus]=useState(props.data.status);
    function changeStat(e){
        console.log("ayyaa")
        let courseid=e.target.parentNode.children[0].innerText;
        axios.post(`http://localhost:4000/change-status?id=${student.id}&courseid=${courseid}`).then((res)=>{
            console.log(res.data)
            setStatus("completed")
            dispatch(changeStudent(res.data))
        }).catch((err)=>setStatus("InProgress"))
    
     }

    return(
        <div className="course-list" >
                        <p style={{display:"none"}}>{props.data.id}</p>
                        <p>{props.data.name}</p>
                        <p>by : {props.data.instructor}</p>
                        <p>Status :{status}</p>
                        <select onChange={changeStat}>
                            <option >Set Status</option>
                            <option>completed</option>
                        </select>
                <svg onClick={()=>{
                dispatch(changeCourse(props.data))
                navigate("course-detail")
            }} xmlns="http://www.w3.org/2000/svg" width="44" height="33" fill="currentColor" class="bi bi-info-lg" viewBox="0 0 16 16">
            <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                </svg>
                    </div>
    )
    
}

export default ListData