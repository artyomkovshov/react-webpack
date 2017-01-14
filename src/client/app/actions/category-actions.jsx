import * as types from './action-types';

export const addCategory = (name, id) => ({ type: types.ADD_CATEGORY, name, id })
export const deleteCategory = id => ({ type: types.DELETE_CATEGORY, id })
export const addSubCategory = (name, id, parentId, indent, visible) => ( { type: types.ADD_SUB_CATEGORY, name, id, parentId, indent, visible } )
export const saveCategory = (id, name) => ( { type: types.SAVE_CATEGORY, id, name } )
export const setDone = id => (({ type: types.SET_DONE, id }))
export const setUndone = id => (({ type: types.SET_UNDONE, id }))
// export const toggleShowChild = (id) => ( {type: types.TOOGLE_SHOW_CHILD, id, collapsed} )