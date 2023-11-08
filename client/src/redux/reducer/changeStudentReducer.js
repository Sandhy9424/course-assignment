import { CHANGESTUDENT } from "../actions/actionsTypes.js";

const initialState={}

const changeStudentReducer=(state=initialState,action)=>{
switch(action.type){
    case CHANGESTUDENT: return action.value
    default :return state
}
}

export default changeStudentReducer;