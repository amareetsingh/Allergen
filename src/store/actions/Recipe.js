import * as Actions from "./actionTypes/totalRecipe";
import apiService from "../../Services/ApiService";

export const getTotalRecipe = (payload) => {
  return (dispatch) => {
    apiService
      .getTotalRecipe(payload)
      .then((res) => {
        dispatch({
          type: Actions.GET_TOTAL_RECIPE,
          payload: res.data,
          isLoading:false
        });
      })
      .catch((err) =>{
        dispatch({
          type: Actions.GET_TOTAL_RECIPE_FAILD,
          payload: err,
          isLoading:true
        });
      });
  };
};

export const getRecipeDetials = (payload) => {
  return (dispatch) => {
    dispatch({
      type: Actions.GET_RECIPE_DETAILS,
      payload: payload,
    });
  };
};
