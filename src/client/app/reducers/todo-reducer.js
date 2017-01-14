import { List, Record } from 'immutable';
import undoable from 'redux-undo';

const initialState = [
                {name: "Cook dinner", id: 1, done: false, categoryId: 1, description: "123"},
                {name: "Learn react", id: 2, done: false, categoryId: 1, description: "123"},
                {name: "Fix skedooler", id: 3, done: false, categoryId: 1, description: "123"},
                {name: "Sleep", id: 4, done: false, categoryId: 2, description: "123"},

];


const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
          {
            name: action.name,
            id: action.id,
            categoryId: action.categoryId,
            done: false,
            description: ""
        },
      ...state
      ]

    case 'TOOGLE_TODO':
      return state.map(item =>
          item.id === action.id ?
            { ...item, done: !item.done } :
            item
        )

    case 'SAVE_TODO':
        debugger;
        return state.map(item =>
          item.id === action.id ?
            { ...item, id: action.id, name: action.name, done: action.done, categoryId: action.categoryId, description: action.description } :
            item
        )

    default:
      return state
  }
}

const undoableTodo = undoable(todo)

export default undoableTodo