import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';

import totalRecipe from './Recipe.reducer'
import AuthReducer from './Auth.reducer'
import Preview from './Preview.reducer';
const rootReducers = combineReducers({
    totalRecipe,
    users:AuthReducer,
    Preview

});

export default rootReducers;
