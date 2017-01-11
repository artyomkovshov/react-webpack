const initialState = [
                {name: "High priority" , id: 1, parentId: [], select: false, indent: 0},
                {name: "Medium priority" , id: 2, parentId: [], select: false, indent: 0},
                {name: "Low priority" , id: 3, parentId: [], select: false, indent: 0},
                {name: "Sub" , id: 4, parentId: [], select: false, indent: 2},
];


const category = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
          {
            name: action.name,
            id: action.id,
            parentId: [],
            select: false,
            indent: 0,
            rootId: null
        },
      ...state
      ]
    case 'REMOVE_CATEGORY':
      debugger;
      return state.filter(category =>
        category.id !== action.id && !category.parentId.includes(action.id)
      )
    case 'ADD_SUB_CATEGORY':
        let index = state.findIndex(e => e.id === action.parentId[0]);
        let newState = [...state];

        if (index !== -1) {
          index += 1;
          newState.splice(index, 0, {
              name: action.name,
              id: action.id,
              parentId: action.parentId,
              select: false,
              indent: action.indent,
              rootId: action.rootId
          });
        }      
        return newState;
    default:
      return state
  }
}

export default category