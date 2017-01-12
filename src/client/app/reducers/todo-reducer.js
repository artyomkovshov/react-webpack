import { List, Record } from 'immutable';

const initialState = [
                {name: "Cook dinner", id: 1, done: false, categoryId: 1},
                {name: "Learn react", id: 2, done: false, categoryId: 1},
                {name: "Fix skedooler", id: 3, done: false, categoryId: 1},
                {name: "Sleep", id: 4, done: false, categoryId: 2},

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
        },
      ...state
      ]

    case 'TOOGLE_TODO':
      return state.map(item =>
          item.id === action.id ?
            { ...item, done: !item.done } :
            item
        )
    default:
      return state
  }
}

export default todo