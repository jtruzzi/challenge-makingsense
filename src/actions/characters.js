import { getCharacters } from "../services/characters";

export function charactersHasErrored(bool) {
  return {
    type: "CHARACTERS_HAS_ERRORED",
    hasErrored: bool
  };
}

export function charactersIsLoading(bool) {
  return {
    type: "CHARACTERS_IS_LOADING",
    isLoading: bool
  };
}

export function charactersFetchDataSuccess(characters) {
  return {
    type: "CHARACTERS_FETCH_DATA_SUCCESS",
    characters: characters
  };
}

export function charactersFetchData() {
  return async dispatch => {
    dispatch(charactersIsLoading(true));
    try {
      const response = await getCharacters();
      const characters = response.data.results;
      dispatch(charactersFetchDataSuccess(characters));
      dispatch(charactersIsLoading(false));
    } catch {
      dispatch(charactersHasErrored(true));
    }
  };
}
