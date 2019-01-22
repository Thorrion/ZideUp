const initialState = {
  list : []
}

export default (state = initialState, { type, payload }) => {
  let list = state.list
  switch (type) {

  case 'ADD_CHALLENGE':
    list.push(payload)
    return { ...state, list }

  case 'REMOVE_CHALLENGE':
    list.splice(payload,1)
    return { ...state, list }

  default:
    return state
  }
}
