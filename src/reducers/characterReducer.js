const initialState = {
  hasErrored: false,
  isLoading: false,
  characters: []
};

export function charactersReducer(state = initialState, action) {
  switch (action.type) {
    case "CHARACTERS_HAS_ERRORED":
      state = Object.assign({}, state, {
        hasErrored: action.hasErrored
      });
      break;
    case "CHARACTERS_IS_LOADING":
      state = Object.assign({}, state, {
        isLoading: action.isLoading
      });
      break;
    case "CHARACTERS_FETCH_DATA_SUCCESS":
      state = Object.assign({}, state, {
        characters: action.characters
      });
      break;
    default:
      return state;
  }
  return state;
}

export function characterDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "CHARACTER_DETAILS_HAS_ERRORED":
      state = Object.assign({}, state, {
        hasErrored: action.hasErrored
      });
      break;
    case "CHARACTER_DETAILS_IS_LOADING":
      state = Object.assign({}, state, {
        isLoading: action.isLoading
      });
      break;
    case "CHARACTER_DETAILS_FETCH_DATA_SUCCESS":
      state = Object.assign({}, state, {
        details: action.details
      });
      break;
    default:
      return state;
  }
  return state;
}
