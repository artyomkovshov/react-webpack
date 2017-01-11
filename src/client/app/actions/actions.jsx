import * as types from './action-types';

export const addCategory = (name, id) => ({ type: types.ADD_CATEGORY, name, id })
export const deleteCategory = id => ({ type: types.DELETE_CATEGORY, id })
export const addSubCategory = (name, id, parentId, indent) => ( { type: types.ADD_SUB_CATEGORY, name, id, parentId, indent } )