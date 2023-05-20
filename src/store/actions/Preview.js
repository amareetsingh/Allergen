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
export const MindestenSelectBox = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.MINDESTENS_AND_ZU_SELECT_BOX,
        payload: payload,
      });
    };
  };
export const Action_mid_Zu = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.MINDESTENS_AND_ZU_GET_INPUT_VALUE,
        payload: payload,
      });
    };
  };
export const set_netto_gewticht = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_NETTO_GEWICHT,
        payload: payload,
      });
    };
  };
export const set_netto_fullmenge = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_NETTO_FULLMENGE,
        payload: payload,
      });
    };
  };
export const set_Abtropfgewicht = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_ABSTROPFGWICHT,
        payload: payload,
      });
    };
  };
export const set_fullgewicht = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_FULLGEWICHT,
        payload: payload,
      });
    };
  };
export const set_fischanggebiet = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_FISCHANGGEBIET,
        payload: payload,
      });
    };
  };
export const set_Herkunfit = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_HERKUNFIT,
        payload: payload,
      });
    };
  };
export const set_Chargen_number = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_CHARGEN_NUMBER,
        payload: payload,
      });
    };
  };
export const setPreis = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_PREIS_VALUE,
        payload: payload,
      });
    };
  };
export const setPreisPro = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_PREIS_PRO_VALUE,
        payload: payload,
      });
    };
  };
export const setpreparedRaw = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_RAW_PREPARED,
        payload: payload,
      });
    };
  };
export const setPortionserf = (payload) => {
    return (dispatch) => {
      dispatch({
        type: Actions.SET_PORTIONSERF,
        payload: payload,
      });
    };
  };



 