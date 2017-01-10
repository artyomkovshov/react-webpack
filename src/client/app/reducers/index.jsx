import { combineReducers } from 'redux';

// Reducers
import categoryReducer from './category-reducer';

// Combine Reducers
var reducers = combineReducers({
    categoryReducer: categoryReducer,
});

export default reducers;