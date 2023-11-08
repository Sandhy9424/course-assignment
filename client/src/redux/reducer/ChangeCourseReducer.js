import { CHANGECOURSE } from "../actions/actionsTypes.js";

const initialState={}
const changeCourseReducer=(state=initialState,action)=>{
   switch(action.type){
    case CHANGECOURSE:return action.value;
    default :return state
   }
}
export default changeCourseReducer;