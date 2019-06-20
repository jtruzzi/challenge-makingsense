import { getCharacterDetails } from "../services/characters";

export function characterDetailsHasErrored(bool) {
  return {
    type: "CHARACTER_DETAILS_HAS_ERRORED",
    hasErrored: bool
  };
}

export function characterDetailsIsLoading(bool) {
  return {
    type: "CHARACTER_DETAILS_IS_LOADING",
    isLoading: bool
  };
}

export function characterDetailsFetchDataSuccess(details) {
  return {
    type: "CHARACTER_DETAILS_FETCH_DATA_SUCCESS",
    details: details
  };
}

export function characterDetailsFetchData(characterId) {
  return async dispatch => {
    dispatch(characterDetailsIsLoading(true));
    try {
      const response = await getCharacterDetails(characterId);
      const characterDetails = response.data.results;
      dispatch(characterDetailsFetchDataSuccess(characterDetails));
      dispatch(characterDetailsIsLoading(false));
    } catch {
      dispatch(characterDetailsHasErrored(true));
    }
  };
}
