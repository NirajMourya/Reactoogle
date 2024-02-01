export const initialState = {
    term: null,
  };
  
  export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM",
  };
  
  const searchReducer = (currentState =initialState, action) => {
    console.log(action);
    switch (action.type) {
      case actionTypes.SET_SEARCH_TERM:
        return {
          ...currentState,
          term: action.term,
        };
  
      default:
        return currentState;
    }
  };
  
  export default searchReducer;