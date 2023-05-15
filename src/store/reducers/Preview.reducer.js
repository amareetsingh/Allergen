import * as Actions from "../actions/actionTypes/Preview";

const intialState = {
  Recipe_name:"",
  Kurze_bescheribung:"",
  Beilagen:""
};

const Preview = function (state = intialState, action) {

  switch (action.type) {
    case Actions.RECIPE_NAME: {
      return {
        ...state,
        Recipe_name: action.payload,
      };
    }
    case Actions.KURZE_BESCHERIBUNG: {
      return {
        ...state,
        Kurze_bescheribung: action.payload,
      };
    }
    case Actions.BEILAGEN_ACTION: {
      return {
        ...state,
        Beilagen: action.payload,
      };
    }

    default:
      return state;
  }
};

export default Preview;
