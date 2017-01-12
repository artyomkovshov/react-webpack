import * as types from './action-types';

export const addTodo = (name, id, categoryId) => ({ type: types.ADD_TODO, name, id, categoryId })
export const toogleTodo = (id) => ({ type: types.TOOGLE_TODO, id })
