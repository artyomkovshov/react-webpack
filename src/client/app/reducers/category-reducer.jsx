const initialState = [
                {name: "High priority" , id: 1, parentID: null, select: false, indent: 0},
                {name: "Medium priority" , id: 2, parentID: null, select: false, indent: 0},
                {name: "Low priority" , id: 3, parentID: null, select: false, indent: 0},
                {name: "Sub" , id: 4, parentID: 3, select: false, indent: 2},
];


const category = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
          {
            name: action.name,
            id: Date.now(),
            parentID: null,
            select: false,
            indent: 0
        },
      ...state
      ]
    case 'REMOVE_CATEGORY':
      return state.filter(category =>
        category.id !== action.id
      )

    default:
      return state
  }
}

export default category