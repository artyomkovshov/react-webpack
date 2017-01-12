import { combineReducers } from 'redux';

// Reducers
import categoryReducer from './category-reducer';
import todoReducer from './todo-reducer';

// Combine Reducers
var reducers = combineReducers({
    categoryReducer: categoryReducer,
    todoReducer: todoReducer
});

export default reducers;