const initialState = [
                {name: "High priority" , id: 1, parentId: [], select: false, indent: 0, visible: true, collapsed: false},
                {name: "Medium priority" , id: 2, parentId: [], select: false, indent: 0, visible: true, collapsed: false},
                {name: "Low priority" , id: 3, parentId: [], select: false, indent: 0, visible: true, collapsed: false},
                {name: "Sub" , id: 4, parentId: [], select: false, indent: 2, visible: true, collapsed: false},
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
            rootId: null,
            collapsed: false,
            visible: true
        },
      ...state
      ]
    case 'REMOVE_CATEGORY':
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
              rootId: action.rootId,
              collapsed: false,
              visible: action.visible
          });
        }      
        return newState;
      case 'SAVE_CATEGORY':
        return state.map(category =>
          category.id === action.id ?
            { ...category, name: action.name } :
            category
        )
      // case 'TOOGLE_SHOW_CHILD':
      //   return state.map(category =>
      //     category.parentId.includes(action.id) ?
      //       { ...category, visible: !action. } :
      //       category
      //   )
    default:
      return state
  }
}

export default category