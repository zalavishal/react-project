import UserService from "./../services/UserService.jsx"

export const retriveUsers = () => async(dispatch)=>{
    console.log("retriveUsers inside action");
    try {
        const ResData = await UserService.getAll();
        return dispatch({type:"RETRIVE_ALL_USERS",
        payload:ResData})
    } catch (error) {
        console.log(error);
    }
}