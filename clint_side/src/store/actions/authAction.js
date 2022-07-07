import * as api from "../../api"

const authActions ={
    SET_USER_DETAILS:'AUTH. SET_USER_DETAILS'
    
};
export const getActions=(dispatch)=>{
    return {
        login:(userDetails,history)=>dispatch(api.login(userDetails,history)) ,
        register:(userDetails,history)=>dispatch(api.register(userDetails,history)) 

    }
}