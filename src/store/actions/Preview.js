import * as Actions from "./actionTypes/Preview";

export const RecipeName = (payload) => {
    return (dispatch) => {
          dispatch({
            type: Actions.RECIPE_NAME,
            payload: payload,
          });
         
    };
  };
export const KurzeBascheribung = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.KURZE_BESCHERIBUNG,
        payload: payload,
        
      });
    };
  };
export const BeilagenAction = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.BEILAGEN_ACTION,
        payload: payload,
        
      });
    };
  };



 