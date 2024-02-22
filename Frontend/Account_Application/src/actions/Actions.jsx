import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { GET_ACCOUNTS } from "./Types";


export const createnewAccount = (newAccount) => async dispatch =>{

    try{
        const response = await axios
      .post("http://localhost:8080/account", newAccount)
      .then((response) => {
        //   navigate("/dashboard");
        // console.log(newAccount);
      })
      .catch((error) => {
        alert(error);
      });
    }catch(error) {
        console.log(error)
    }
}

export const getAccounts = () => async dispatch => {
    try{
        await axios.get('http://localhost:8080/account').then((res) => {
            dispatch({type:GET_ACCOUNTS, payload:res.data});
        })
    }catch(error){
        alert(error);
    }
}
