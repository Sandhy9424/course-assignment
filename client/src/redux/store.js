import {createStore,combineReducers} from "redux"
import changeStudentReducer from "./reducer/changeStudentReducer.js"
import changeCourseReducer from "./reducer/ChangeCourseReducer.js"
const rootReducer=combineReducers({
changeStudent:changeStudentReducer,
changeCourse:changeCourseReducer
})
const store= createStore(rootReducer)

export default store;