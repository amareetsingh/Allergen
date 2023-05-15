import * as Actions from "../actions/actionTypes/totalRecipe";

const intialState = {
  TotalRecipe: {},
  RecipeDetails: {},
  error:{},
  isLoading:true
};

const totalRecipe = function (state = intialState, action) {
  switch (action.type) {
    case Actions.GET_TOTAL_RECIPE: {
      return {
        ...state,
        TotalRecipe: action.payload,
        isLoading:action.isLoading
      };
    }
    case Actions.GET_TOTAL_RECIPE_FAILD: {
      return {
        ...state,
        error: action.payload,
        isLoading:action.isLoading
      };
    }
    case Actions.GET_RECIPE_DETAILS: {
      return {
        ...state,
        RecipeDetails: action.payload,
      };
    }
    default:
      return state;
  }
};

export default totalRecipe;
