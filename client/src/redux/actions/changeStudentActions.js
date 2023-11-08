import { CHANGESTUDENT } from "./actionsTypes.js";

export const changeStudent=(value)=>{

    return{
        type:CHANGESTUDENT,
        value:value
    }
}

