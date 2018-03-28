const reducer = (state = { isLoading: false, data:{} }, action) => {
  console.log('loadReducer', action.type)
  if (action.type === 'LOAD_REQUEST') {
    return {...state, isLoading: true}
  }
  if (action.type === 'LOAD_SUCCESS') {
    return {...state, isLoading: false, data: action.data}
  }
  return state
}
export default reducer
