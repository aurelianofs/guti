const chat = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          author: action.author
        }
      ]
    default:
      return state
  }
}

export default chat
