import * as types from './action-types';

export const addCategory = name => ({ type: types.ADD_CATEGORY, name })
export const removeCategory = id => ({ type: types.REMOVE_CATEGORY, id })