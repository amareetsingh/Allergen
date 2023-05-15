import * as Actions from '../actions/actionTypes/Auth';

const intialState = {
  user:{},
  error:{},
  isLoading:false
  
};

const totalRecipe = function (state = intialState, action) {
  switch (action.type) {
    case Actions.GET_USER_PROFILE: {
      return {
        ...state,
        user: action.payload,
        isLoading:action.isLoading
      };
    }
    case Actions.GET_USER_PROFILE_FAILD: {
      return {
        ...state,
        user: action.payload,
        isLoading:action.isLoading
      };
    }
    default:
      return state;
  }
};

export default totalRecipe;
