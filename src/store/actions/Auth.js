import * as Actions from "./actionTypes/Auth";
import apiService from "../..//Services/ApiService";

export const loginUser = (payload) => {
  return (dispatch) => {
    apiService
      .login(payload)
      .then((res) => {
        console.log("response", res);
        localStorage.setItem("sessionToken", res.data.sessionToken);
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };
};


export const getUser = (payload) => {
  return (dispatch) => {
    apiService
      .getUser(payload)
      .then((res) => {
        dispatch({
          type: Actions.GET_USER_PROFILE,
          payload: res.data,
          isLoading:true
        });
        console.log("GET USER PROIFLE ", res);
      })
      .catch((err) =>{
        dispatch({
          type: Actions.GET_USER_PROFILE_FAILD,
          payload: err,
          isLoading:false
        });

      });
  };
};
